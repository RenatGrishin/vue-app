<script setup>
	import IconLocation from '../icons/IconLocation.vue';
	import WeatherIcon from './WeatherIcon.vue';

	const { data, activeIndex } = defineProps({
		data: Object,
		activeIndex: Number,
	});

	function getDate() {
		const newData = new Date(
			new Date().setDate(new Date().getDate() + activeIndex)
		);

		return {
			weekday: newData.toLocaleDateString('ru-Ru', { weekday: 'long' }),
			data: newData
				.toLocaleDateString('ru-Ru', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})
				.replace(' г.', ''),
		};
	}

	console.log(data);
</script>

<template>
	<section class="section">
		<div class="top">
			<p class="day">{{ getDate().weekday }}</p>
			<p class="data">{{ getDate().data }}</p>
			<p class="location"><IconLocation />{{ data.location.name }}</p>
		</div>
		<div class="bottom">
			<WeatherIcon
				:icon-code="data.forecast.forecastday[activeIndex].day.condition.code"
				:size="95"
			/>
			<p class="temperature">
				{{ data.forecast.forecastday[activeIndex].day.avgtemp_c }} °C
			</p>
			<p class="weather">
				{{ data.forecast.forecastday[activeIndex].day.condition.text }}
			</p>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.section {
		display: flex;
		flex-direction: column;
		width: 500px;
		height: 660px;
		padding: 48px 32px 84px;
		border-radius: 30px;
		background-image: url('/public/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.top {
		margin-bottom: auto;
	}

	.day {
		margin: 0;
		font-size: 37px;
		font-weight: 700;
		text-transform: capitalize;
	}

	.data {
		margin: 16px 0 0;
		font-size: 22px;
		font-weight: 500;
	}

	.location {
		display: flex;
		align-items: center;
		margin: 10px 0 0;

		svg {
			width: 27px;
			margin-right: 7px;
		}
	}

	.temperature {
		margin: 9px 0 0;
		font-size: 50px;
		font-weight: 700;
	}

	.weather {
		margin: 13px 0 0;
		font-size: 30px;
		font-weight: 700;
	}
</style>
