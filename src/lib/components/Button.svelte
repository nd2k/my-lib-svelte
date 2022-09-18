<script lang="ts">
    import { ButtonTypes } from '$lib/types/interfaces';

    import { onMount } from 'svelte';
    import { getPropertyValue } from '$lib/utils/colorUtils';

    export let type: any = ButtonTypes.button;
    export let disabled: boolean = false;
    export let variant: string = "primary";
    export let size: string = "50%";
    export let radius: string = "0"
    export let fontSize: string = "1.2rem"

    
    
    const style = `
        width: ${size}; 
        border-radius: ${radius}; 
        font-size: ${fontSize};
        `;
</script>


<button {type} {disabled} class={variant} {style} on:click>
    <slot />
</button>

<style lang="scss">
    button {
        outline: none;
        min-height:2.3rem;
        min-width: 4rem;
        border-radius:2rem;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 0.5rem 1rem;
        border: none;
        margin: auto;
        &:hover {
            filter: brightness(0.85);
            border: 1px solid inherit;
        }
        &:active {
            box-shadow: none;
        }
        &:disabled {
            background-color: inherit;
            color: inherit;
            border: 1px solid inherit;
            cursor: wait;
            &:active {
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
        }
    }
</style>