<style lang="scss">
	.btn
	{
		background: #00bbe0;
		border: 0;
		color: #fff;
		cursor: pointer;
		border-radius: 50px;
		padding: 0 30px;
		display: flex;
		outline: 0;
		font-weight: bold;
		height: 50px;

		&:hover,
		&:focus
		{

		}
	}
</style>

<button class="btn" type="button">
	<slot>Bouton</slot>
</button>