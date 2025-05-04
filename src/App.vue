<script setup>
	import Stat from './components/Stat.vue';
	import CitySelect from './components/CitySelect.vue';
	import { computed, nextTick, ref } from 'vue';

	let savedCity = ref('Moscow');
	let humidity = ref(90);
	let data = ref({
		labelName: 'Влажность',
		labelVal: '90%',
	});

	const dataModified = computed(() => {
		return {
			labelName: 'Влажность',
			labelVal: `${humidity.value}%`,
		};
	});

	function getCity(city) {
		humidity.value = 30;
		savedCity.value = city;
	}
</script>

<template>
	<main class="main">
		<div id="city">{{ savedCity }}</div>
		<Stat v-bind="dataModified" />
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
