<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
    import Field from '$lib/components/Field.svelte';
    import Icon from '$lib/components/Icon.svelte';

    import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
    import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
	import InputField from '$lib/components/InputField.svelte';

    let email: string;
</script>

<h1>My Lib</h1>

<h2>Color variant</h2>

<!-- <div class="--primary-color">--primary-color-100</div>
<div class="--secondary-color">--primary-color-200</div> -->
<div class="--primary-color-100">--primary-color-100</div>
<div class="--primary-color-200">--primary-color-200</div>
<div class="--primary-color-300">--primary-color-300</div>
<div class="--primary-color-400">--primary-color-400</div>
<div class="--primary-color-500">--primary-color-500</div>
<div class="--primary-color-600">--primary-color-600</div>
<div class="--primary-color-700">--primary-color-700</div>
<div class="--primary-color-800">--primary-color-800</div>
<div class="--primary-color-900">--primary-color-900</div>
<div class="--secondary-color-100">--secondary-color-100</div>
<div class="--secondary-color-200">--secondary-color-200</div>
<div class="--secondary-color-300">--secondary-color-300</div>
<div class="--secondary-color-400">--secondary-color-400</div>
<div class="--secondary-color-500">--secondary-color-500</div>
<div class="--secondary-color-600">--secondary-color-600</div>
<div class="--secondary-color-700">--secondary-color-700</div>
<div class="--secondary-color-800">--secondary-color-800</div>
<div class="--secondary-color-900">--secondary-color-900</div>
<div class="--tertiary-color-100">--tertiary-color-100</div>
<div class="--tertiary-color-200">--tertiary-color-200</div>
<div class="--tertiary-color-300">--tertiary-color-300</div>
<div class="--tertiary-color-400">--tertiary-color-400</div>
<div class="--tertiary-color-500">--tertiary-color-500</div>
<div class="--tertiary-color-600">--tertiary-color-600</div>
<div class="--tertiary-color-700">--tertiary-color-700</div>
<div class="--tertiary-color-800">--tertiary-color-800</div>
<div class="--tertiary-color-900">--tertiary-color-900</div>
<div class="--fourthary-color-100">--fourthary-color-100</div>
<div class="--fourthary-color-200">--fourthary-color-200</div>
<div class="--fourthary-color-300">--fourthary-color-300</div>
<div class="--fourthary-color-400">--fourthary-color-400</div>
<div class="--fourthary-color-500">--fourthary-color-500</div>
<div class="--fourthary-color-600">--fourthary-color-600</div>
<div class="--fourthary-color-700">--fourthary-color-700</div>
<div class="--fourthary-color-800">--fourthary-color-800</div>
<div class="--fourthary-color-900">--fourthary-color-900</div>
<div class="--fifthary-color-100">--fifthary-color-100</div>
<div class="--fifthary-color-200">--fifthary-color-200</div>
<div class="--fifthary-color-300">--fifthary-color-300</div>
<div class="--fifthary-color-400">--fifthary-color-400</div>
<div class="--fifthary-color-500">--fifthary-color-500</div>
<div class="--fifthary-color-600">--fifthary-color-600</div>
<div class="--fifthary-color-700">--fifthary-color-700</div>
<div class="--fifthary-color-800">--fifthary-color-800</div>
<div class="--fifthary-color-900">--fifthary-color-900</div>

<h2>Buttons</h2>

<Button variant="--primary-color-200" size="100%" fontSize="2rem">My Btn</Button>
<Button variant="--secondary-color-800" size="20%" radius="2rem">My Btn</Button>
<Button variant="--primary-color-700">My Btn</Button>
<Button variant="--fourthary-color-100" size="75%" radius="1rem">My Btn</Button>
<Button variant="--fifthary-color-400" fontSize="1rem">My Btn</Button>
<Button disabled radius="1.5rem">My Btn</Button>

<h2>Cards</h2>

<Card radius="2rem">
    <span slot="title">
        <h2>Title Card</h2>
        <div class="border"></div>
    </span>
    <span slot="body">Body Card</span>
</Card>

<h2>Icons</h2>

<Icon 
    icon= {faUser}
    variant="--fifthary-color-700"
/>

<h2>Fields</h2>

<InputField
    id="email" 
    placeholder="Email" 
    type="email"
    bind:value={email} 
/>

<Field 
    id="email" 
    placeholder="Email" 
    type="email"
    bind:value={email} 
/>

<!-- <Field 
    <span slot="icon">
        <Icon 
            icon= {faUser}
            variant="--fifthary-color-700"
        /> 
    </span>
    <span slot=""
    id="email" 
    placeholder="Email" 
    type="email"
    bind:value={email} 
/> -->

<style lang="scss">
    .border {
        border-top: 1px solid black;
    }
</style>



