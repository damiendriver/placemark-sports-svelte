<script>
// @ts-nocheck
    import { goto } from '$app/navigation';
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let clubsList = [];

    let clubname = "";
    let description = "";
    let county = "";
    let latitude = 0;
    let longitude = 0;
    let sportgroundList = [];
    let selectedSportground = "";

    let message = "Please add Your Club Details";

    onMount(async () => {
        sportgroundList = await placemarkService.getAllSportgrounds();
    });

  async function addClub() {
    if (clubname && description && county && latitude && longitude) {
      const sportground = sportgroundList.find(sportground => sportground.title);
      const club = {
        clubname: clubname,
        description: description,
        county: county,
        latitude: latitude,
        longitude: longitude,
        sportground: sportground._id
      };
      const success = await placemarkService.addClub(club);
          if (!success) {
                message = "Club not added - some error occurred";
                return;
            }
            message = "Thanks! Your Club has been added";
            goto("/dashboard");
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
            <div class="field">
              <div class="select">
                <select bind:value={selectedSportground}>
                {#each sportgroundList as sportground}
                <option>{sportground.title}</option>
                {/each}
                </select>
             </div>
            </div>
        </div>
        <button class="button is-primary is-rounded">Add Club</button>
<div class="box">
      {message}
  </div>
</form>
