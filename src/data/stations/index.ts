import type { Station } from '$lib/types';
import { objectify } from 'radash';

import { classical } from './classical';

import { jazz } from './jazz';
import { lofi } from './lofi';
import { random } from './random';
import { rnb } from './rnb';

export const genres = {
	lofi,
	classical,
	jazz,
	random,
	rnb
};

export const christmasStations = [
	jazz.stations.christmas1,
	jazz.stations.christmas2,
	lofi.stations.christmas,
	classical.stations.christmas
];

export interface StationWithGenre extends Station {
	genre: keyof typeof genres;
}

const stations: StationWithGenre[] = Object.entries(genres).flatMap(([genre, { stations }]) =>
	Object.values(stations).map((station) => ({
		...station,
		genre
	}))
);

export const stationMap = objectify(stations, (station) => station.trackID);

export const stationList = stations.filter((s) => !s.hidden);
