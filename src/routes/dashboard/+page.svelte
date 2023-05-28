<script>
    import TitleBar from '$lib/TitleBar.svelte';
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import ListClubs from '$lib/ListClubs.svelte';
    import AddClubs from '$lib/AddClubs.svelte';
    import ListSportgrounds from '$lib/ListSportgrounds.svelte';
    import AddSportgrounds from '$lib/AddSportgrounds.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Clubs Dashboard"} title={"Placemark - Sportgrounds"} />
    </div>
    <div class="column">
        <MainNavigator />
    </div>
</div>
 <div class="columns is-vcentered">
    <div class="column has-text-centered">
        <ListSportgrounds />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Add a new Sport</h1>
        <AddSportgrounds />
    </div>
</div>