import type { Genre } from '$lib/types';

export const electronic = {
	name: 'Electronic',
	emoji: 'musical-keyboard',
	stations: {
		vaporfunk: {
			displayName: 'VaporFunk Station: Vaporwave Radio',
			name: 'VaporFunk Station 📼 | 24/7 Vaporwave Radio',
			trackID: 'cVibfBy77Yg',
			live: true
		},
		chillsynth: {
			displayName: 'ChillSynth FM',
			name: 'ChillSynth FM - lofi synthwave radio for retro dreaming',
			trackID: 'UedTcufyrHc',
			live: true
		},
		synthwave: {
			displayName: 'Synthwave Radio',
			name: 'synthwave radio 🌌 - beats to chill/game to',
			trackID: '4xDzrJKXOOY',
			live: true
		},
		tropicalHouse: {
			displayName: 'Tropical House Radio',
			name: 'The Good Life Radio • 24/7 Live Radio',
			trackID: '36YnV9STBqc',
			live: true
		}
	}
} satisfies Genre;
