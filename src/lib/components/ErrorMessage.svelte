<script lang="ts">
    import type { ValidationResponse } from '$lib/types/interfaces';

    export let validationResponse: ValidationResponse = {valid: false, errorMessage: ""}
    export let variant: string = "--alert-color-100";

</script>

<div class="error {variant}">
    {#if !validationResponse.valid}
        <div class="error message">
            {validationResponse.errorMessage}
        </div>
    {/if}
</div>