<script>
    // @ts-nocheck
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
    import { latestClub } from "../stores";

    const mapConfig = {
        location: { lat: 52.160858, lng: -7.15242 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("sportgrounds-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('Clubs');
        map.showLayerControl();
        const clubs = await placemarkService.getAllClubs();
        clubs.forEach((club) => {
            addClubMarker(map, club);
        });

         });

function addClubMarker(map, club) {
        const clubStr = `${club.clubname} ${club.county}`;
        map.addMarker({ lat: club.latitude, lng: club.longitude }, clubStr, "Clubs");
        map.moveTo(8, { lat: club.latitude, lng: club.longitude });
};

latestClub.subscribe(async (club) => {
        if (club && map) {
            const club = await placemarkservice.getClub(club.club)
            club.club = club;
            addClubMarker(map, club);
        }
    });
</script>

<div class="box" id="sportgrounds-map" style="height:75vh" />

