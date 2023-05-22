<script>
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
    import { latestClub } from "../stores";

    let totalByCounty = {
        labels: ["Wexford", "Waterford", "Carlow", "Kilkenny", "Wicklow", "Dublin", "Tipperary"],
        datasets: [
            {
                values: [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    };


 function populateByCounty(clubsList) {
    clubsList.forEach((club) => {
            if (club.county == "Wexford") {
                totalByCounty.datasets[0].values[0] ++;
            } else if (club.county == "Waterford") {
                totalByCounty.datasets[0].values[1] ++;
            } else if (club.county == "Carlow") {
                totalByCounty.datasets[0].values[2] ++;
            } else if (club.county == "Kilkenny") {
                totalByCounty.datasets[0].values[3] ++;
            } else if (club.county == "Wicklow") {
                totalByCounty.datasets[0].values[4] ++;
            } else if (club.county == "Dublin") {
                totalByCounty.datasets[0].values[5] ++;
            } else if (club.county == "Tipperary") {
                totalByCounty.datasets[0].values[6] ++;
            }  
        });
 }

 async function refreshChart() {
        let clubsList = await placemarkService.getAllClubs();
        populateByCounty(clubsList);
    }

onMount(async () => {
        refreshChart();
        });

latestClub.subscribe(async (club) => {
        if (club) {
            await refreshChart();
        }
    });

</script>

    <h1 class="title is-4">Clubs by County</h1>
    <Chart data={totalByCounty} type="bar" />
