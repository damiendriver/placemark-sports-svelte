<script>
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
    import { latestClub } from "../stores";

    let totalBySportgrounds = {
        labels: ["Soccer", "GAA", "Rugby", "Golf", "Athletics"],
        datasets: [
        {
            values: [0, 0, 0, 0, 0]
        }
        ]
    };

    function populateBySportgrounds(sportgrounds) {
        sportgrounds.forEach(sportgrounds => {
            if (sportgrounds.title == "Soccer") {
                totalBySportgrounds.datasets[0].values[0] ++;
            } else if (sportgrounds.title == "GAA") {
                totalBySportgrounds.datasets[0].values[1] ++;
            } else if (sportgrounds.title == "Rugby") {
                totalBySportgrounds.datasets[0].values[2] ++;
            } else if (sportgrounds.title == "Golf") {
                totalBySportgrounds.datasets[0].values[3] ++;
            } else if (sportgrounds.title == "Athletics") {
                totalBySportgrounds.datasets[0].values[4] ++;
            }
        });
    }

async function refreshChart() {
        let sportgrounds = await placemarkService.getAllSportgrounds();
        populateBySportgrounds(sportgrounds);
    }

onMount(async () => {
        refreshChart();
        });

</script>

    <h1 class="title is-4">Sportgrounds by Sport</h1>
    <Chart data={totalBySportgrounds} type="pie" />