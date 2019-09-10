<script>
	export let quote;

	import Button from './Button.svelte';
	// import Icon from 'svelte-icon';
	import '../../static/icons/arrow-down.svg';

	// import Icon from './Icon.svelte';

	let isExpanded = false;

	function toggleExpand() {
		if(isExpanded)
		{
			isExpanded = false;
		} else
		{
			isExpanded = true;
		}
	}
</script>

<style lang="scss">
	.quote-row
	{
		background: #fff;
		border-radius: 8px;
		border: 1px solid #e2e6eb;
		margin-bottom: 45px;

		&__main
		{
			display: flex;
			justify-content: space-evenly;
			align-items: center;
		}

		&__logo
		{
			img { display: block; }
		}

		&__features
		{
			display: flex;

			> div + div { margin-left: 20px; }
		}

		&__details
		{
			background: #fafbfc;
			border-top: 1px solid #e2e6eb;
			display: none;
			padding: 20px;
			justify-content: space-evenly;
		}

		&--expanded { display: flex; }

		.btn-dropdown
		{
			border-radius: 50%;
			border: 1px solid #505050;
			outline: 0;
			cursor: pointer;
			height: 60px;
			width: 60px;
		}
	}
</style>

<quote-row>
	<div class="quote-row">
		<svg class="inline-svg-icon">
		  <use xlink:href="dist/bundle.svg#arrow-down"></use>
		</svg>
		<div class="quote-row__main">
			<div class="quote-row__logo">
				<img src="{quote.PartnerLogo}" alt="" />
				{quote.PartnerDisplayName}
			</div>

			<div class="quote-row__features">
				{#each quote.ProductGuarantees as guarantee, i}
					{#if i < 3}
						<div>
							<div>{guarantee.DisplayName}</div>
							<div>{@html guarantee.DisplayValue}</div>
						</div>
					{/if}
				{/each}
			</div>

			<Button>
				<div>{quote.YearlyPrice}</div>
				Souscrire
			</Button>

			<button class="btn-dropdown" type="button" on:click={toggleExpand}>
				<!-- <Icon /> -->
			</button>
		</div>
		<div class="quote-row__details" class:quote-row--expanded="{isExpanded === true}">
			<div>Étudiez le devis en détail</div>
			<div>Souscrivez à cette offre</div>
		</div>
	</div>
</quote-row>