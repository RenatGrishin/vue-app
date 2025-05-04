<script setup>
	import Stat from './components/Stat.vue';
	import CitySelect from './components/CitySelect.vue';
	import { computed, reactive, ref } from 'vue';

	let savedCity = ref('Moscow');
	let humidity = ref(90);
	let data = ref({
		humidity: 90,
		rain: 0,
		wind: 3,
	});

	const dataModified = computed(() => {
		return [
			{
				labelName: 'Влажность',
				labelVal: `${data.value.humidity}%`,
			},
			{
				labelName: 'Осадки',
				labelVal: `${data.value.rain}%`,
			},
			{
				labelName: 'Ветер',
				labelVal: `${data.value.wind} м/с`,
			},
		];
	});

	function getCity(city) {
		savedCity.value = city;
		humidity.value = 30;
	}
</script>

<template>
	<main class="main">
		<div id="city">{{ savedCity }}</div>
		<div class="info">
			<Stat v-for="(item, index) in dataModified" :key="index" v-bind="item" />
		</div>
		<CitySelect @select-city="getCity" />
	</main>
</template>

<style scoped lang="scss">
	.main {
		background: var(--color-bg-main);
		padding: 50px 60px;
		border-radius: 25px;
	}

	.info {
		display: grid;
		gap: 16px;
	}
</style>
