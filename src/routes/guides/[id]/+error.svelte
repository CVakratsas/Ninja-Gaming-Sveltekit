<script>
    export let error;
    let errorMessage = error.message;
</script>

<div class="error">
    <h2>Oooops</h2>
    <p>{errorMessage}</p>
    <a href="/guides">View all guides...</a>
</div>