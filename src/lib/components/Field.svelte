<script lang="ts">
    import type { ValidationResponse } from '$lib/types/interfaces';
    import { createEventDispatcher } from 'svelte';
    import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
    import Icon from './Icon.svelte';
  
    export let id: string = "id";
    export let placeholder: string = "placeholder";
    export let type: string = "text";
    export let value: string = "";
    export let validationResponse: ValidationResponse = {valid: false, errorMessage: ""}
    export let reset: boolean = false;
    export let variant: string = "--primary-color-500";

    const style = `${variant}`;
  
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
  <div class='field'>
    <div class="line_1">
      <Icon 
          icon= {faUser}
          variant="--fifthary-color-700"
      />
      <div class="input_fields">
        <input 
        class="{status === true ? 'active' : ''} {style}" 
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
    </div>
    <div class="line_2">
      <div class="error"></div>
      {#if !validationResponse.valid}
        <div class="error message">
            {validationResponse.errorMessage}
        </div>
      {/if}
    </div>
  </div>
  
  <style lang="scss">
    .field {
      .line_1 {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          width: 2.3rem;
          height: 2.3rem;
          &.active {
            background-color: blue;
            color: black;
          }
        }
        .input_fields {
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
              color: black;
            }
          }
        }
      }
      .line_2 {
        display: flex;  
        .error {
          flex: 0 7 100%;
        }
        .message {
          margin-top: -0.6rem;
          color: red;
          font-size: 0.8rem;
          flex: 2 4 150%;
        }
      }
    }
  </style>