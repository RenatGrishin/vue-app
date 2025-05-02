<script setup>
	import Stat from './components/Stat.vue';
	import CitySelect from './components/CitySelect.vue';

	const data = {
		name: 'Влажность',
		value: '90%',
	};
</script>

<template>
	<main class="main">
		<Stat v-bind="data" />
		<CitySelect />
	</main>
</template>

<style scoped lang="scss">
	.main {
		background: var(--color-bg-main);
		padding: 50px 60px;
		border-radius: 25px;
	}
</style>
