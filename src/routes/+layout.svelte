<script lang="ts">
    import '$lib/styles/theme.css';
    import '$lib/styles/main.css';
    import '$lib/styles/utility.css';

    import { onMount } from 'svelte';
    import { createTheme } from '$lib/utils/colorUtils';

    onMount(() => {
        createTheme();
    }) 
    
</script>
<div class="main">
    <slot />
</div>

<style lang="scss">
    .main {
        margin: 0.5rem;
    }
</style>