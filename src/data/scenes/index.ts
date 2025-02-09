import { Tags } from '$data/tags';
import type { Continent, Country, Scene, SceneGroup } from '$lib/types';
import { alphabetical } from 'radash';

import africa from './africa';
import asia from './asia';
import europe from './europe';
import northAmerica from './north-america';
import australia from './oceania';
import southAmerica from './south-america';

function flattenScenes(scenes: (Scene | SceneGroup)[], country: string) {
	return scenes.reduce(
		(acc, scene): Record<string, Scene> => ({
			...acc,
			...('scenes' in scene ? flattenScenes(scene.scenes, country) : { [scene.videoID]: scene })
		}),
		{}
	);
}

function flattenCountries(countries: Country[]): Record<string, Scene> {
	return countries.reduce(
		(acc, country) => ({
			...acc,
			...flattenScenes(country.scenes, country.name)
		}),
		{}
	);
}

function getSceneMap(continents: Continent[]): Record<string, Scene> {
	return continents.reduce(
		(acc, continent) => ({
			...acc,
			...flattenCountries(continent.countries)
		}),
		{}
	);
}

function deepSort<T extends Continent | Scene | SceneGroup>(list: T): T {
	if ('scenes' in list) {
		return {
			...list,
			scenes: alphabetical(list.scenes.map(deepSort), ({ name }) => name)
		};
	}

	if ('countries' in list) {
		return {
			...list,
			countries: alphabetical(list.countries.map(deepSort), ({ name }) => name)
		};
	}

	return list;
}

const continents: Continent[] = alphabetical(
	[africa, asia, australia, europe, northAmerica, southAmerica],
	({ name }) => name
).map(deepSort);

const sceneMap = getSceneMap(continents);

const scenes: Scene[] = Object.values(sceneMap);

const christmasScenes = scenes.filter((scene) => scene.tags?.includes(Tags.christmas));

const visibleScenes = scenes.filter((scene) => !scene.hidden);

const visibleContinents = continents.filter((scene) => !scene.hidden);

export {
	visibleScenes as scenes,
	visibleContinents as continents,
	sceneMap,
	christmasScenes
};
