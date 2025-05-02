<script setup>
	const { name = 'Не задан', value } = defineProps({
		name: String,
		value: String,
	});
</script>

<template>
	<div class="stat">
		<div class="name">{{ name }}</div>
		<div class="value">{{ value }}</div>
	</div>
</template>

<style lang="scss" scoped>
	.stat {
		display: flex;
		justify-content: space-between;
		font-size: 28px;
		gap: 16px;
	}
	.name {
		font-weight: 700;
	}
	.stat {
		font-weight: 500;
	}
</style>
