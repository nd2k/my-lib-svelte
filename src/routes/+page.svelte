<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
    import Field from '$lib/components/Field.svelte';

    import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
    import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

    let email: string;
</script>

<h1>My Lib</h1>

<hr>

<Button variant="primary" size="100%" fontSize="2rem">My Btn</Button>
<Button variant="secondary" size="20%" radius="2rem">My Btn</Button>
<Button variant="tertiary">My Btn</Button>
<Button variant="fourthary" size="75%" radius="1rem">My Btn</Button>
<Button variant="fifthary" fontSize="1rem">My Btn</Button>
<Button disabled radius="1.5rem">My Btn</Button>

<hr>

<Card radius="2rem">
    <span slot="title">
        <h2>Title Card</h2>
        <div class="border"></div>
    </span>
    <span slot="body">Body Card</span>
</Card>

<hr>

<Field 
    id="email" 
    placeholder="Email" 
    type="email" 
    icon={faUser} 
    bind:value={email} 
/>

<style lang="scss">
    .border {
        border-top: 1px solid black;
    }
</style>



