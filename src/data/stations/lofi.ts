import type { Genre } from '$lib/types';

export const lofi = {
	name: 'Lofi',
	emoji: 'hot-beverage',
	stations: {
		afro: {
			displayName: '24/7 Chill Afro Soul/Gospel instrumentals',
			name: '24/7 Chill Afro Soul/Gospel instrumentals',
			trackID: 'p6_D5I4IxdA',
			live: true
		},
		sleep: {
			displayName: '[chill instrumental worship] 🙏🏻',
			name: 'Best of Christian Lofi 🙏🏽 [chill instrumental worship] 🙏🏻',
			trackID: 'yaTEX4bXiZc',
			live: false
		},
		coffeeShop: {
			displayName: 'Christian Coffee Vibes',
			name: 'Christian lofi beats to study/relax + prayers for peace',
			trackID: 'NKdJ-xV-p_g',
			live: false
		},
		chillHop: {
			displayName: 'Christian ChillHop Radio 24/7',
			name: 'Christian Lofi radio 24/7~study, pray, sleep, relax~Yoni Charis',
			trackID: 'qcSYp34NRU4',
			live: true
		},
		girl: {
			displayName: 'Lofi Gospel Radio: Beats to Study/Relax To',
			name: '24/7 Christian lofi radio~ study, work, productivity, relax~Yoni Charis',
			trackID: 'YJmGR2tD0k',
			live: true
		}
	}
} satisfies Genre;
