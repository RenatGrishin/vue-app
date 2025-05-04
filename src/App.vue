<script setup>
	import Stat from './components/Stat.vue';
	import CitySelect from './components/CitySelect.vue';
	import { ref } from 'vue';

	let savedCity = ref('Moscow');
	let data = ref({
		labelName: 'Влажность',
		labelVal: '90%',
	});

	function getCity(city) {
		console.log(city);
		savedCity.value = city;
		data.value.labelVal = '30%';
	}
</script>

<template>
	<main class="main">
		<Stat v-bind="data" />
		<CitySelect @select-city="getCity" />
	</main>
</template>

<style scoped lang="scss">
	.main {
		background: var(--color-bg-main);
		padding: 50px 60px;
		border-radius: 25px;
	}
</style>
