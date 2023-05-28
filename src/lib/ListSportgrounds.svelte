<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let sportground = {};

    let sportgroundsList = [];
    onMount(async () => {
        sportgroundsList = await placemarkService.getAllSportgrounds();
    });

     async function newClub(sportground) {
    localStorage.currentSportground = JSON.stringify(sportground);
    goto("/clubs");
  }

    async function deleteSportground(sportground) {
      const success = await placemarkService.deleteSportground(sportground);
       goto("/sportgrounds");
    }

</script>

<table class="table is-fullwidth">
    <thead>
        <th>Sport Name</th>
        <th>List Clubs</th>
        <th>Delete Sport</th>
    </thead>
    <tbody>
        {#each sportgroundsList as sportgrounds}
            <tr>
                <td>
                    {sportgrounds.title}
                </td>
                <td>
                <button on:click={() => { newClub(sportground) }}><i class="fas fa-folder-open fa-2x" style="color:rgb(0, 255, 0)" /></button>
                </td>
                <td>
                <button on:click={() => { deleteSportground(sportground) }}><i class="fas fa-trash fa-2x" style="color:rgb(0, 0, 255)" /></button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>