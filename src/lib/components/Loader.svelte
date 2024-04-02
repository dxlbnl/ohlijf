<p class="loader"></p>

<style>
	.loader {
		width: 2rem;
		height: 2rem;
		border: 5px solid var(--white);
		border-bottom-color: var(--green);
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
