<script>
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import AddClubs from '$lib/AddClubs.svelte';
    import ListClubs from '$lib/ListClubs.svelte';
    import SportgroundsMap from "$lib/SportgroundsMap.svelte";
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <ListClubs />
        <SportgroundsMap />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Add a new Club</h1>
        <AddClubs />
    </div>
</div>
