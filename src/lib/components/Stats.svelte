<section class="stats-section">
	<h2 class="stats-title">Daarom kiezen voor OhLijf</h2>
	<div class="stats-grid">
		<!-- Linker kolom -->
		<div class="stats-col">
			<!-- <div class="stat-item">
				<span class="stat-number">43<span class="stat-plus">+</span></span>
				<p class="stat-text">vrouwen begeleid naar herstel</p>
			</div> -->
			<div class="stat-item">
				<span class="stat-number">29<span class="stat-plus">+</span></span>
				<p class="stat-text">boeken verslonden over mind-body, ADHD en het brein</p>
			</div>
			<!-- <div class="stat-item">
				<span class="stat-number">23<span class="stat-plus">+</span></span>
				<p class="stat-text">methodes uitgeprobeerd — en alleen de écht helpende behouden</p>
			</div> -->
			<div class="stat-item">
				<span class="stat-number">987<span class="stat-plus">+</span></span>
				<p class="stat-text">puzzelstukjes gelegd om de beste methode te creëren</p>
			</div>
		</div>

		<!-- Rechter kolom -->
		<div class="stats-col">
			<div class="stat-item">
				<span class="stat-number">2</span>
				<p class="stat-text">ADHD-breinen vol ideeën</p>
			</div>
			<div class="stat-item stat-item--mission">
				<span class="stat-number stat-number--one">1</span>
				<p class="stat-text">missie: ADHD-vrouwen helpen herstellen van hoofdpijn</p>
			</div>
		</div>
	</div>
</section>

<style>
	.stats-section {
		padding-bottom: 4rem;
		text-align: center;
	}

	.stats-title {
		font-family: 'Martel', sans-serif;
		font-size: 36px;
		font-weight: bold;
		color: var(--green);
		margin-bottom: 3rem;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem 4rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.stats-col {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		animation: popIn 0.5s ease both;
	}

	.stat-item:nth-child(1) {
		animation-delay: 0.05s;
	}
	.stat-item:nth-child(2) {
		animation-delay: 0.15s;
	}
	.stat-item:nth-child(3) {
		animation-delay: 0.25s;
	}

	.stat-number {
		font-family: 'Raleway', sans-serif;
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 800;
		line-height: 1;
		color: var(--green);
		letter-spacing: -0.02em;
	}

	.stat-number--one {
		color: var(--pink);
	}

	.stat-plus {
		font-size: 0.65em;
		vertical-align: super;
		color: var(--light-green);
	}

	.stat-text {
		font-family: 'Raleway', sans-serif;
		font-size: 1rem;
		line-height: 1.5rem;
		color: var(--dark-green);
		margin: 0;
		max-width: 28ch;
	}

	.stat-item--mission .stat-text {
		font-weight: 600;
	}

	@keyframes popIn {
		from {
			opacity: 0;
			transform: translateY(12px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 600px) {
		.stats-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
