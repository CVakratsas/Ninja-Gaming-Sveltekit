<script>
    export let title = "Ninja Gaming";
</script>

<div class="title">
    <img src="favicon.png" alt="Just an icon">
    <h1>{title}</h1>
</div>

<style>
    .title {
        display: flex;
    }
    .title img {
        display: flex;
        height: 80px;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(100%);
    }
    .title h1 {
        margin-left: 10px;
    }
</style>