<script>
    export let title = null
</script>

<div class='popout content'>
    {#if title}
        <h3>{title}</h3>
    {/if}
    <slot />
</div>

<style>
    div {
        background-color: lightgray;
    }
</style>