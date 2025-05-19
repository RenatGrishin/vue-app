<script setup>
	import { onMounted, provide, ref, watch } from 'vue';
	import PanleRight from './components/PanelRight.vue';
	import { cityProvide } from './constants';
	import PanelLeft from './components/PanelLeft.vue';

	const API_ENDPOINT = 'http://api.weatherapi.com/v1';

	let data = ref(null);
	let error = ref();
	let activeIndex = ref(0);
	let city = ref('Moscow');

	provide(cityProvide, city);

	watch(city, () => {
		getCity(city.value);
	});

	onMounted(() => {
		getCity(city.value);
	});

	async function getCity(city) {
		const params = new URLSearchParams({
			q: city,
			lang: 'ru',
			key: import.meta.env.VITE_WEATHER_API_KEY,
			days: 3,
			aqi: 'no',
		});

		const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);

		if (res.status !== 200) {
			error.value = await res.json();
			data.value = null;
			return;
		}

		error.value = null;
		data.value = await res.json();
	}
</script>

<template>
	<main class="main">
		<PanelLeft v-if="data" :data :active-index="activeIndex" />
		<div class="right">
			<PanleRight
				:error
				:data
				:active-index="activeIndex"
				@select-index="(index) => (activeIndex = index)"
			/>
		</div>
	</main>
</template>

<style scoped lang="scss">
	.main {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right {
		background: var(--color-bg-main);
		padding: 50px 60px;
		border-radius: 0 25px 25px 0;
	}
</style>
