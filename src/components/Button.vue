<script setup></script>

<template>
	<button class="button"><slot /></button>
</template>

<style scoped lang="scss">
	.button {
		display: flex;
		justify-content: center;
		gap: 9px;
		width: 100%;
		height: 53px;
		align-items: center;
		border: none;
		border-radius: 10px;
		background: var(--gradient);
		padding: 14px;
		color: var(--color-primary);
		font-size: 20px;
		font-family: var(--font);
		font-weight: 600;
		cursor: pointer;

		&:hover {
			background: var(--gradient-inverted);
		}
	}
</style>
