<script setup>
	import { computed } from 'vue';
	import Error from './Error.vue';
	import Stat from './Stat.vue';
	import DayCard from './DayCard.vue';
	import CitySelect from './CitySelect.vue';

	const { error, data, activeIndex } = defineProps({
		error: Object,
		data: Object,
		activeIndex: Number,
	});

	const emit = defineEmits(['select-index', 'select-city']);

	const errorMap = new Map([[1006, 'Указанный город не найден']]);

	const errorDisplay = computed(() => {
		return errorMap.get(error.error?.code);
	});

	const statData = computed(() => {
		return [
			{
				labelName: 'Влажность',
				labelVal: `${data.current.humidity}%`,
			},
			{
				labelName: 'Облочность',
				labelVal: `${data.current.cloud}%`,
			},
			{
				labelName: 'Ветер',
				labelVal: `${data.current.wind_kph} км/с`,
			},
		];
	});
</script>

<template>
	<Error v-if="error" :error="errorDisplay" />
	<div v-else-if="data" class="info">
		<Stat v-for="(item, index) in statData" :key="index" v-bind="item" />
	</div>
	<div v-if="data && data.forecast" class="dayCards-list">
		<DayCard
			v-for="(item, index) in data.forecast.forecastday"
			:key="item.date"
			:icon-code="item.day.condition.code"
			:temperature="item.day.avgtemp_c"
			:date="new Date()"
			:is-active="activeIndex === index"
			@click="() => emit('select-index', index)"
		/>
	</div>
	<CitySelect class="citySelect" />
</template>

<style scoped lang="scss">
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
