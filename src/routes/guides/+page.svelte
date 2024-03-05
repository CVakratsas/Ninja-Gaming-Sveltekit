<script>
    export let data;
    let guides = data.guides;
</script>

<div class="guides">
    <ul>
        {#each guides as guide}
            <li>
                <a href="/guides/{guide.id}">
                    <h3>{guide.title}</h3>
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .guides {
        margin-top: 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>