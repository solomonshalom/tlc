import type { Genre } from '$lib/types';

// Define an array of track IDs
const trackIDs = [
	'URK4U_bTt6I',
	'p3QXWEUDEZk',
	'KoZx_i_X2rE',
	'QcxdXIz74YI',
	'ljFRJhtRZGE',
	'KWYM4W83ptw'
];

// Function to get a random track ID from the array
const getRandomTrackID = (): string => {
	const randomIndex = Math.floor(Math.random() * trackIDs.length);
	return trackIDs[randomIndex];
};

// Define the random object with a randomly selected track ID
export const random = {
	name: 'random',
	emoji: 'guitar',
	stations: {
		'randomtrack': {
			name: 'Random Track',
			trackID: getRandomTrackID(),
			live: false,
		}
	}
} satisfies Genre;
