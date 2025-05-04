<script setup>
	const { labelName = 'Не задан', labelVal } = defineProps({
		labelName: String,
		labelVal: String,
	});
</script>

<template>
	<div class="stat">
		<div class="name">{{ labelName }}</div>
		<div class="value">{{ labelVal }}</div>
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
		text-transform: uppercase;
	}
	.stat {
		font-weight: 500;
	}
</style>
