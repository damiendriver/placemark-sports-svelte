<script>
    import TitleBar from "$lib/TitleBar.svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import AddClubs from "$lib/AddClubs.svelte";
    import ListClubs from "$lib/ListClubs.svelte";
    import SportgroundsMap from "$lib/SportgroundsMap.svelte";
    import { placemarkService } from "../../services/placemark-service";


</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Clubs Detail & Locations"} title={"Placemark - Sportgrounds"} />
    </div>
    <div class="column">
        <MainNavigator />
    </div>
</div>

<div class="box">
    <ListClubs />
</div>
<div class="box">
        <AddClubs /> 
</div>
<div class="box">
        <SportgroundsMap />
</div>