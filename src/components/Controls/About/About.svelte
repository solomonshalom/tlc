<script lang="ts">
	import logo from '$images/logo.png';
	import { clickOutside } from '$lib/actions';

	import Button from '../../Button.svelte';
	import FullScreenOverlay from '../FullScreenOverlay.svelte';

	export let open: boolean;
</script>

<FullScreenOverlay bind:open>
	<div class="about" use:clickOutside={() => (open = false)}>
		<img src={logo} alt="Logo" class="w-72" />

		<div class="divider" />

		<div class="flex flex-col items-center gap-8">
			<p>
				The Loft Cafe is a magical place where you can travel around the world from the comfort of
				your desk, exploring new cities by foot or by car, all while listening to chill christian music.
				Simply sit back, praise God, and relax!
			</p>

			<ul>
				<li>Press <kbd>g</kbd> to go to a random place with new music.</li>
				<li>Press <kbd>k</kbd> to go to a random place without changing your music.</li>
				<li>Press <kbd>m</kbd> to switch to a random lofi station.</li>
			</ul>

			<p>Have a city or station you'd like to see on the site?</p>

			<Button
				action="https://github.com/solomonshalom/tlc/issues/new/choose"
				icon="mdi:hand-back-left"
			>
				Open a Request</Button
			>

			<p class="text-sm italic">
				Psst... feel free to
				<a
					href="https://twitter.com/shalomlijo"
					rel="noreferrer"
					target="_blank"
					class="text-accent"
				>
					follow me on Twitter
				</a>
				or
				<a
					class="text-accent"
					href="https://github.com/solomonshalom/tlc"
					rel="noreferrer"
					target="_blank"
				>
					contribute on GitHub!
				</a>
			</p>
		</div>
	</div>
</FullScreenOverlay>

<style lang="postcss">
	.about {
		@apply max-w-xl text-center mx-auto h-full flex flex-col justify-center items-center p-8;

		kbd {
			@apply kbd-sm kbd;
		}
	}
</style>
