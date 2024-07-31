import type { Genre } from '$lib/types';

export const classical = {
	name: 'Classical',
	emoji: 'violin',
	stations: {
		piano: {
			displayName: 'Instrumental Worship 24/7',
			name: 'Prayer Instrumental Music with Scriptures | 24/7 DappyTKeys Piano Worship',
			trackID: 'u2DCFT75kJE',
			live: true
		},
		/*
		rain: {
			name: 'Worship w/ Rain',
			name: '24/7 Worship Instrumental Music with Rain, Christian Instrumental Worship Music with Rain',
			trackID: '3fLV2os74Ik',
			live: true,
		}
		*/
	}
} satisfies Genre;
