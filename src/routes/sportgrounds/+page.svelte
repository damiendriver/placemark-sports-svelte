<script>
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import AddSportgrounds from '$lib/AddSportgrounds.svelte';
    import ListSportgrounds from '$lib/ListSportgrounds.svelte';
    import { placemarkService } from "../../services/placemark-service";
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <ListSportgrounds />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Add a new Sport</h1>
        <AddSportgrounds />
    </div>
</div>