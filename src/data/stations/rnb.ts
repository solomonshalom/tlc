import type { Genre } from '$lib/types';

export const rnb = {
	name: 'R&B',
	emoji: 'microphone',
	stations: {
		intricate: {
			displayName: 'Christian R&B Vol2',
			trackID: 'ILe2389Y7XK8',
			name: 'Christian R&B music playlist Vol.2',
			live: false
		},
		sondae: {
			displayName: 'Sondae - Amen (Full Album)',
			trackID: 'fPuwXO2ZVKI',
			name: 'Sondae - Amen (Full Album)',
			live: false
		},
		rnb: {
			displayName: 'Chill Christian R&B/Lofi Playlist 🌌',
			name: 'Chill Christian R&B/Lofi Playlist 🌌',
			trackID: '-TI3PAAY3O4',
			live: false
		}
	}
} satisfies Genre;
