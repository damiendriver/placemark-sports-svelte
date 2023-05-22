<script>
    import TitleBar from './TitleBar.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={'Placemark - Sportgrounds'} subTitle={'Sign up or Log in'} />
    </div>
    <div class="column">
        <slot />
    </div>
</div>

