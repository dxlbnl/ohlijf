<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="content">
	<h1>{$page.status}: {$page.error?.message}</h1>
</main>
