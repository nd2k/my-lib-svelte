<script lang="ts">
    import type { ValidationResponse } from '$lib/types/interfaces';
    import Fa from 'svelte-fa';
    import { createEventDispatcher } from 'svelte';
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
  
    export let id: string = "id";
    export let placeholder: string = "placeholder";
    export let type: string = "text";
    export let icon: any = "null"
    export let value: string = "";
    export let validationResponse: ValidationResponse = {valid: false, errorMessage: ""}
    export let reset: boolean = false;
  
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
  <div class="field">
    <div class="line_1">
      {#if icon !== "null"}
        <div class="{status === true ? 'icon active' : 'icon'}">
            {#if validationResponse.valid}
              <Fa icon={faCheck} scale={1.2} /> 
            {:else}                                                 
              <Fa icon={icon} scale={1.2} />
            {/if}
        </div>
      {/if}
      <div class="input_fields">
        <input 
        class="{status === true ? 'active' : ''}" 
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
          background-color: red;
          border: 1px solid red;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          &.active {
            // background-color: $color-4;
            // color: $color-1;
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
            &.active {
            //   border: 1px solid $color-2;
            //   background-color: $color-4;
            //   color: $color-1;
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
    .mobile {
        .line_1 {
          .icon {
            width: 2rem;
            height: 2rem;
          }
          .input_fields {
            input {
              height: 2rem;
              margin: 0.5rem;
              min-width: 5rem;
              font-size: 0.9rem;
            }
          }
        }
      }
      .desktop {
        .line_1 {
          .icon {
            width: 2.3rem;
            height: 2.3rem;
          }
          .input_fields {
            input {
              height:2.3rem;
              margin: 1rem;
              min-width: 10rem;
              font-size: 1.1rem;
            }
          }
        }
      }  
  </style>