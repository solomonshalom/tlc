<script>
	import '@fontsource-variable/figtree';
	import 'iconify-icon';

	import figtreeVariable from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2';
	import figtreeVariableItalic from '@fontsource-variable/figtree/files/figtree-latin-wght-italic.woff2';

	import { MetaTags } from 'svelte-meta-tags';

	import { page } from '$app/stores';

	import '../app.postcss';

	import { onMount } from 'svelte';

	onMount(() => {
		navigator.mediaSession.setActionHandler('play', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('pause', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekbackward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekforward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('previoustrack', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('nexttrack', function () {
			/* Code excerpted. */
		});
	});

	const siteTitle = 'The Loft Cafe';

	const siteDescription =
		'Praise God, Take leisurely walks and drives around the world while chilling to beautiful, christian tracks 🎶';

	const siteURL = 'https://www.tlc.solomonlijo.com';

	const ogImage = `${$page.url.origin}/og.jpg`;

	const twtImage = `${$page.url.origin}/twitter.jpg`;
</script>

<svelte:head>
	{#each [figtreeVariable, figtreeVariableItalic] as ft}
		<link rel="preload" as="font" crossorigin="anonymous" href={ft} type="font/woff2" />
	{/each}
</svelte:head>

<MetaTags
	title="The Loft Cafe | Worship Songs, Aesthetic walks and drives from around the world"
	description={siteDescription}
	canonical={siteURL}
	openGraph={{
		url: siteURL,
		title: siteTitle,
		description: siteDescription,
		images: [{ url: ogImage }],
		siteName: 'The Loft Cafe'
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
		image: twtImage
	}}
/>

<slot />
