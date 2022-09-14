<script lang="ts">
    export let radius: string = "0";

    const style = `border-radius: ${radius};`;
</script>

<div class="card" {style}>
    <div class="title">
        <slot name="title" />
    </div>
    <div class="body">
        <slot name="body" />
    </div>
</div>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: 1px solid var(--grey);
        padding: 2rem;
        margin: 1rem;
        .title {
            width: 100%;
        }
        .body {
            width: 100%;
        }
    }
</style>