<script>
// @ts-nocheck
    import { goto } from '$app/navigation';
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let sportgroundList = [];
    let clubsList = [];

    let clubname = "";
    let description = "";
    let county = "";
    let latitude = 0;
    let longitude = 0;
    let sportgroundId = "647310aa596be67c6ac89e09";

    let message = "Please add Your Club Details";

    onMount(async () => {
        clubsList = await placemarkService.getAllClubs();
    });

  async function addClub() {
    console.log(`attempting to create clubname: ${clubname}`);
    if (clubname && description && county && latitude && longitude) {
      const club = {
        clubname: clubname,
        description: description,
        county: county,
        latitude: latitude,
        longitude: longitude,
      };
      const success = await placemarkService.addClub(sportgroundId, club);
          if (!success) {
                message = "Club ${clubname} not added - some error occurred";
                return;
            }
            message = "Thanks! Your Club  ${clubname}  has been added";
            goto("/clubs");
        } else {
            message = "Please complete all requested fields to add  ${clubname}";
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
              <div class="control">
                <div class="select is-rounded is-hoverable">
                <select bind:value={county} required>
                <option value="" disabled selected>Select County</option>
                <option value="Cork">Cork</option>
                <option value="Derry">Derry
                <option value="Donegal">Donegal
                <option value="Down">Down
                <option value="Dublin">Dublin
                <option value="Fermanagh">Fermanagh
                <option value="Galway">Galway
                <option value="Kerry">Kerry
                <option value="Kildare">Kildare
                <option value="Kilkenny">Kilkenny
                <option value="Laois">Laois
                <option value="Leitrim">Leitrim
                <option value="Limerick">Limerick
                <option value="Longford">Longford
                <option value="Louth">Louth
                <option value="Mayo">Mayo
                <option value="Meath">Meath
                <option value="Monaghan">Monaghan
                <option value="Offaly">Offaly
                <option value="Roscommon">Roscommon
                <option value="Sligo">Sligo
                <option value="Tipperary">Tipperary
                <option value="Tyrone">Tyrone
                <option value="Waterford">Waterford
                <option value="Westmeath">Westmeath
                <option value="Wexford">Wexford
                <option value="Wicklow">Wicklow
                </select>
              </div>
            </div>
          </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Latitude" bind:value={latitude}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Longitude" bind:value={longitude}>
            </div>
        </div>
        <button class="button is-primary is-rounded">Add Club</button>
<div class="box">
      {message}
  </div>
</form>
