import { SceneTypes } from '$data/scene-types';
import { genres } from '$data/stations';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'India',
	emoji: 'flag',
	scenes: [
		{
			name: 'Kolkata',
			type: SceneTypes.walk,
			videoID: '7Kzfz86esI0',
			offset: { start: 10 },
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.afro
		},
		{
			name: 'Kolkata',
			type: SceneTypes.drive,
			videoID: '6iG9PpV20_U',
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.afro
		},
		{
			name: 'Mumbai',
			type: SceneTypes.drive,
			videoID: '0o8PlX0JUn0',
			offset: { start: 28 },
			tags: [Tags.night],
			suggestedTrack: genres.lofi.stations.afro
		},
		{
			name: 'Mumbai',
			type: SceneTypes.walk,
			videoID: '8W4ZTX1z02E',
			offset: { start: 120 },
			tags: [Tags.day, Tags.night],
			suggestedTrack: genres.lofi.stations.afro
		},
		{
			name: 'New Delhi',
			scenes: [
				{
					name: 'Meena Bazaar',
					videoID: 'InPGfxTjiFI',
					type: SceneTypes.walk,
					suggestedTrack: genres.lofi.stations.afro
				},
				{
					name: 'Connaught Place',
					videoID: '6F0lXW6i-Sc',
					type: SceneTypes.walk,
					suggestedTrack: genres.lofi.stations.afro
				},
				{
					name: 'Tilak Nagar Market',
					videoID: 'FTfpaW_Rr2M',
					type: SceneTypes.walk,
					suggestedTrack: genres.lofi.stations.afro
				},
				{
					name: 'Central Delhi',
					type: SceneTypes.drive,
					videoID: 'g-c3K8plBxo',
					offset: { start: 28 },
					tags: [Tags.night],
					suggestedTrack: genres.lofi.stations.afro
				}
			]
		},
		{
			name: 'Kochi',
			type: SceneTypes.walk,
			videoID: '4YKjcbVUkP0',
			tags: [Tags.day, Tags.rain],
			suggestedTrack: genres.lofi.stations.afro
		},
		{
			name: 'Bengaluru',
			type: SceneTypes.walk,
			videoID: '2YJYJMtVTLc',
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.afro
		},
		{
			name: 'Bengaluru',
			type: SceneTypes.drive,
			videoID: 'Guu6shSEbp8',
			tags: [Tags.day],

			suggestedTrack: genres.lofi.stations.afro
		}
	]
} satisfies Country;
