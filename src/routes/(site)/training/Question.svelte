<script>
    export let question

</script>

<details class='content popout'>
    <summary>{question}</summary>
    
    <p>
        <slot />
    </p>
</details>
<style>
    
    details {
        margin-block: .5rem;
        padding: 1rem;
        background: var(--lightgray);

        padding-left: 2rem;
    }

    summary {
        font-weight: bold;
        font-size: 1.2rem;
        margin-left: -1rem;
    }
</style> 