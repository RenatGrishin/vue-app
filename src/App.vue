<script setup>
	import Stat from './components/Stat.vue';
	import CitySelect from './components/CitySelect.vue';
	import { computed, ref } from 'vue';
	import Error from './components/Error.vue';
	import DayCard from './components/DayCard.vue';

	const API_ENDPOINT = 'http://api.weatherapi.com/v1';

	let data = ref(null);
	let error = ref();
	let activeIndex = ref(0);

	const errorMap = new Map([[1006, 'Указанный город не найден']]);

	const dataModified = computed(() => {
		return [
			{
				labelName: 'Влажность',
				labelVal: `${data.value.current.humidity}%`,
			},
			{
				labelName: 'Облочность',
				labelVal: `${data.value.current.cloud}%`,
			},
			{
				labelName: 'Ветер',
				labelVal: `${data.value.current.wind_kph} км/с`,
			},
		];
	});

	const errorDisplay = computed(() => {
		return errorMap.get(error.value?.error?.code);
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
			console.error(error.value.error.message);
			return;
		}

		error.value = null;
		data.value = await res.json();
	}
</script>

<template>
	<main class="main">
		<div class="left"></div>
		<div class="right">
			<Error v-if="error" :error="errorDisplay" />
			<div v-else-if="data" class="info">
				<Stat v-for="(item, index) in dataModified" :key="index" v-bind="item" />
			</div>
			<div v-if="data && data.forecast" class="dayCards-list">
				<DayCard
					v-for="(item, index) in data.forecast.forecastday"
					:key="item.date"
					:icon-code="item.day.condition.code"
					:temperature="item.day.avgtemp_c"
					:date="new Date()"
					:is-active="activeIndex === index"
					@click="
						() => {
							activeIndex.value = index;
						}
					"
				/>
			</div>
			<CitySelect class="citySelect" @select-city="getCity" />
		</div>
	</main>
</template>

<style scoped lang="scss">
	.main {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.left {
		width: 500px;
		height: 660px;
		border-radius: 30px;
		background-image: url('/public/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.right {
		background: var(--color-bg-main);
		padding: 50px 60px;
		border-radius: 0 25px 25px 0;
	}

	.info {
		display: grid;
		gap: 16px;
	}

	.dayCards-list {
		margin-top: 80px;
		display: flex;
		justify-content: space-between;
	}

	.citySelect {
		margin-top: 70px;
	}
</style>
