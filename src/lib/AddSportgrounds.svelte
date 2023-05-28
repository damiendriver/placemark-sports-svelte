<script>
// @ts-nocheck
    import { goto } from '$app/navigation';
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let sportgroundsList = ["Soccer", "GAA", "Rugby", "Golf", "Athletics", "Tennis"];
    let selectedSportgrounds = "";

    let title = "";
    let sportgrounds = "";
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
            goto("/sportgrounds");
        } else {
            message = "Please complete all requested fields";
        }
      }  
</script>

<form on:submit|preventDefault={addSportgrounds}>
     <label for="Sport Title">Your Sportground Details</label>
         <div class="field">
              <div class="control">
                <div class="select is-rounded is-hoverable">
                  <select bind:value={title} required>
                    <option value="" disabled selected>Pick Sport Type</option>
                    <option value="Soccer">Soccer</option>
                    <option value="GAA">GAA</option>
                    <option value="Rugby">Rugby</option>
                    <option value="Golf">Golf</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Tennis">Tennis</option>
                  </select>
                </div>
              </div>
            </div>
        <button class="button is-primary is-rounded">Add Sportground</button>
<div class="box">
      {message}
  </div>
</form>
