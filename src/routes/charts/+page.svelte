<script>
    import ChartsBySportgrounds from "$lib/ChartsBySportgrounds.svelte";
    import ChartsByClub from "$lib/ChartsByClub.svelte";
    import TitleBar from "$lib/TitleBar.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";
    import { placemarkService } from "../../services/placemark-service";

    let totalByCounty = {
        labels: ["Wexford", "Waterford", "Carlow", "Kilkenny", "Wicklow", "Dublin", "Tipperary"],
        datasets: [
            {
                values: [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    };

    let totalBySportgrounds = {
        labels: ["Soccer", "GAA", "Rugby", "Golf", "Athletics"],
        datasets: [
        {
            values: [0, 0, 0, 0, 0]
        }
        ]
    }

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

onMount(async () => {
        let clubsList = await placemarkService.getAllClubs();
        let sportgrounds = await placemarkService.getAllSportgrounds();
        populateByCounty(clubsList);
        populateBySportgrounds(sportgrounds);
        });

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Sportgrounds Analytics"} title={"Sportgrounds"} />
    </div>
    <div class="column">
        <MainNavigator />
    </div>
</div>

<div class="columns">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Clubs by County</h1>
        <Chart data={totalByCounty} type="bar" />
    </div>
    <div class="column has-text-centered">
        <h1 class="title is-4">Sportgrounds by Sport</h1>
        <Chart data={totalBySportgrounds} type="pie" />
    </div>
</div>
