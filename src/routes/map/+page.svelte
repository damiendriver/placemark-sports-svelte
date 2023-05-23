<script>
    import TitleBar from "$lib/TitleBar.svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import SportgroundsMap from "$lib/SportgroundsMap.svelte";
    import { placemarkService } from "../../services/placemark-service";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Clubs Map Locations"} title={"Placemark - Sportgrounds"} />
    </div>
    <div class="column">
        <MainNavigator />
    </div>
</div>

<div class="box">Map of Sportgrounds here</div>

<SportgroundsMap />

