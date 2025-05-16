<script setup>
	import IconSun from '../icons/IconSun.vue';
	import IconCloud from '../icons/IconCloud.vue';
	import IconRain from '../icons/IconRain.vue';

	const { iconCode, date, temperature, isActive } = defineProps({
		iconCode: Number,
		date: Date,
		temperature: Number,
		isActive: Boolean,
	});
</script>

<template>
	<button class="card" :class="{ active: isActive }">
		<IconSun v-if="iconCode == 1000" />
		<IconRain v-else-if="iconCode == 1009 || iconCode == 1063" />
		<IconCloud v-else />
		<p class="day">
			{{ date.toLocaleDateString('ru-Ru', { weekday: 'short' }) }}
		</p>
		<p class="temperature">{{ temperature }} °C</p>
	</button>
</template>

<style lang="scss" scoped>
	.card {
		width: 123px;
		padding: 14px 24px 20px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-bg-card);
		border: none;
		cursor: pointer;

		&:not(.active):hover {
			background-color: var(--color-bg-card-light);
		}
	}

	.day {
		margin: 16px 0 0;
		margin-top: 16px;
		font-size: 20px;
		font-weight: 400;
		color: var(--color-primary);
	}

	.temperature {
		margin: 14px 0 0;
		font-size: 20px;
		font-weight: 700;
		color: var(--color-primary);
	}

	.active {
		background-color: var(--color-primary);
		.day,
		.temperature {
			color: var(--color-brimary-inverted);
		}

		svg {
			fill: var(--color-brimary-inverted);
		}
	}
</style>
