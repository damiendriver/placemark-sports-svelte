<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let sportgroundsList = [];
    onMount(async () => {
        sportgroundsList = await placemarkService.getAllSportgrounds();
    });
</script>

<table class="table is-fullwidth">
    <thead>
        <th>Sport Name</th>
        <th></th>
    </thead>
    <tbody>
        {#each sportgroundsList as sportgrounds}
            <tr>
                <td>
                    {sportgrounds.title}
                </td>
            </tr>
        {/each}
    </tbody>
</table>