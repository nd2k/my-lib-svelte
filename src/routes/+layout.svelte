<script lang="ts">
    import '$lib/styles/theme.css';
    import '$lib/styles/main.css';
    import '$lib/styles/utility.css';
</script>
<div class="main">
    <slot />
</div>

<style lang="scss">
    .main {
        margin: 0.5rem;
    }
</style>