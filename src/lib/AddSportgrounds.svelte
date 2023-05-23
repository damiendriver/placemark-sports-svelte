<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let sportgroundsList = [];
    let selectedSportgrounds = "";

    let title = "";
    let message = "Please add a new Sport";

    onMount(async () => {
        sportgroundsList = await placemarkService.getAllSportgrounds();
    });

  async function addSportgrounds() {
    if (title) {
      const sportground = {
        title: title
      };
      const success = await placemarkService.addSportground(sportground);
          if (!success) {
                message = "Sportground not added - some error occurred";
                return;
            }
            message = "Thanks! Your Sportground has been added";
            goto("/dashboard");
        } else {
            message = "Please complete all requested fields";
        }
      }  
</script>

<form on:submit|preventDefault={addSportgrounds}>
     <label for="label">Your Sportground Details</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Title" bind:value={title}>
            </div>
          </div>
        </div>
        <button class="button is-primary is-rounded">Add Sportground</button>
<div class="box">
      {message}
  </div>
</form>
