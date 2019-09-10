<script>
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 1100px;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Header />

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />