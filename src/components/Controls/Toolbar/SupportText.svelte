<script lang="ts">
	import { BAC_LINK, IS_DECEMBER} from '$lib/constants';
	import { getXmas } from '$lib/utils';

	import ToolbarButton from './ToolbarButton.svelte';
</script>

{#if IS_DECEMBER}
	<ToolbarButton
		class="text-green-200 !opacity-100"
		variant="full"
		icon="mdi:snowflake"
		action={getXmas}
		title="Get Festive"
	/>
{:else}
	<ToolbarButton variant="full" action={BAC_LINK} title="Advertise w/ The Loft" />
{/if}
