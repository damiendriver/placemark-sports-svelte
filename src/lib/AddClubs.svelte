<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let clubsList = [];

    let clubname = "";
    let description = "";
    let county = "";
    let latitude = 0;
    let longitude = 0;

    let message = "Please add Your Club Details";

    onMount(async () => {
        clubsList = await placemarkService.getAllClubs();
    });

  async function addClub() {
    if (clubname && description && county && latitude && longitude) {
      const club = {
        clubname: clubname,
        description: description,
        county: county,
        latitude: latitude,
        longitude: longitude
      };
      const success = await placemarkService.addClub(club);
          if (!success) {
                message = "Club not added - some error occurred";
                return;
            }
            message = "Thanks! Your Club has been added";
            goto("/clubs");
        } else {
            message = "Please complete all requested fields";
        }
      }  
</script>

<form on:submit|preventDefault={addClub}>
     <label for="label">Your Club Details</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="ClubName" bind:value={clubname}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Description" bind:value={description}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="County" bind:value={county}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Latitude" bind:value={latitude}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Longitude" bind:value={longitude}>
            </div>
          </div>
        </div>
        <button class="button is-primary is-rounded">Add Club</button>
<div class="box">
      {message}
  </div>
</form>
