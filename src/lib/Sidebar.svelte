<div class="sidebar">
	<section class="mailinglist">
		<p>Blijf op de hoogte van de belangrijkste updates:</p>
		<form>
			<label>
				e-mailadres
				<input type="email" name="email" required />
			</label>

			<button>Abonneer</button>
		</form>
	</section>

	<section class="lees-ook">
		<h2 class="heading">Lees ook:</h2>

		<article>
			<a class="article" href="/ons">
				<img src="/robin-aurinke.jpeg" />
				<h3>Over ons</h3>
				<p>Lees het verhaal van Robin & Aurinke en waarom zij OhLijf zijn gestart.</p>
			</a>
		</article>
		<article>
			<a class="article" href="/test">
				<img src="/test.png" />
				<h3>Doe de test</h3>
				<p>
					Test hier of jij ook een klachtenvrij leven kan leiden door de echte oorzaak aan te
					pakken.
				</p>
			</a>
		</article>
	</section>
</div>

<style>
	.sidebar {
		& .heading {
			font-size: 20px;
		}
		& section {
			border-radius: var(--rounded);
			border: thin solid var(--pink);

			padding: 1rem 2rem;
			margin-block: 1rem;
		}
	}

	article {
		& + article {
			margin-block-start: 2rem;
		}

		& a {
			text-decoration: none;
			color: black;
			font-weight: inherit;
		}

		& h3 {
			margin-block: 0.5rem;
		}

		& p {
			font-size: 12px;
			margin-block: 0;
		}
	}
	.mailinglist {
		& input {
			width: 100%;
		}
		& button {
			padding: 0.5rem 1rem;
			font-size: 1rem;
			margin-block-start: 1rem;
		}
	}
</style>
