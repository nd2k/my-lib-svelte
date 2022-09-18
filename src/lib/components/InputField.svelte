<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let id: string = "id";
    export let placeholder: string = "placeholder";
    export let type: string = "text";
    export let value: string = "";
    export let reset: boolean = false;
    export let variant: string = "--primary-color-500";


    let status: boolean = false;
  
    const resetField = () => {
      if (reset) return value = "";
    }
  
    $: reset, resetField()
  
    const dispatcher = createEventDispatcher();
  
    const activeAndValidate = () => {
      dispatcher('validate')
    }
  
    const activeField = () => {
      status = !status
    }
  
    function typeAction(node: HTMLInputElement) {
      node.type = type
    }
</script>

<div class="input_field">
    <input 
        class="{status === true ? 'active' : ''} {variant}" 
        {id} 
        {placeholder} 
        autocomplete="off"
        bind:value
        use:typeAction 
        on:focus={activeField} 
        on:blur={activeField} 
        on:input={activeAndValidate} 
        />
</div>

<style lang="scss">
    .input_field {
        display: flex;
        align-content: center;
        justify-content: center;
            input{
            border:none;
            outline:none;
            border-radius:2rem;
            box-sizing:border-box;
            padding: 0 1rem;
            height:2.3rem;
            margin: 1rem;
            min-width: 10rem;
            font-size: 1.1rem;
            &.active {
                // border: 1px solid red;
                // background-color: red;
                // color: black;
            }
        }
    }
</style>