<script lang="ts">
    import type { ValidationResponse } from '$lib/types/interfaces';
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
    import Fa from 'svelte-fa';

    export let icon: any = "null";
    export let validationResponse: ValidationResponse = {valid: false, errorMessage: ""};
    export let variant: string = "--primary-color-500";

    let style = `${variant}`;

    let status: boolean = false;
</script>

{#if icon !== "null"}
<div class="{status === true ? 'icon active' : 'icon'} {style}">
    {#if validationResponse.valid}
      <Fa icon={faCheck} scale={1.2} /> 
    {:else}                                                 
      <Fa icon={icon} scale={1.2} />
    {/if}
</div>
{/if}

<style lang="scss">
    .icon {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 2.3rem;
        height: 2.3rem;
    }
</style>