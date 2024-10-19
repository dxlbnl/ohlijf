<script>
    export let naam = null;
    export let klachten = null
</script>


<div class='review'>
    <slot />

    {#if naam}
        <p class='naam'>{naam}</p>
    {/if}

    {#if klachten}
        <p class='klachten'>{klachten}</p>
    {/if}
</div>

<style>
  .review {
    grid-column: full;
    text-align: center;
    font-style: italic;

    margin-block: 1rem;
    padding: 1rem;
    line-height: 1.5rem;
    background-color: var(--light-pink);

    & p {
      font-style: normal;
    }

    & .naam {
        font-weight: bold;
        margin: 0;
        margin-top: 1rem;
    }
    & .klachten {
        margin: 0;
    }


  }
</style>