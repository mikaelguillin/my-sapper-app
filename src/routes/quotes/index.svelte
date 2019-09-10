<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`quotes.json`).then(r => r.json()).then(quotes => {
			return { quotes };
		});
	}
</script>

<script>
	import QuoteRow from '../../components/QuoteRow.svelte';

	export let quotes;
</script>

<svelte:head>
	<title>Quote page</title>
</svelte:head>

<h1>Quote page</h1>

{#each quotes as quote}
	<QuoteRow {quote} />
{/each}