<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let clubsList = [];
    onMount(async () => {
        clubsList = await placemarkService.getAllClubs();
    });
</script>

<table class="table is-fullwidth">
    <thead>
        <th>Club Names</th>
        <th>Description</th>
        <th>Home County</th>
        <th>Latitude</th>
        <th>Longitude</th>
    </thead>
    <tbody>
        {#each clubsList as clubs}
            <tr>
                <td>
                    {clubs.clubname}
                </td>
                <td>
                    {clubs.description}
                </td>
                <td>
                    {clubs.county}
                </td>
                <td>
                    {clubs.latitude}
                </td>
                <td>
                    {clubs.longitude}
                </td>
            </tr>
        {/each}
    </tbody>
</table>