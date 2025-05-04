<script setup></script>

<template>
	<input class="input" />
</template>

<style lang="scss" scoped>
	.input {
		width: 260px;
		height: 53px;
		font-size: 18px;
		color: var(--color-primary);
		padding: 15px 17px 14px 19px;
		border-radius: 10px;
		border: none;
		background-color: var(--color-bg-card);
		box-shadow: 1px 2px 4px 0px var(--color-bg-main);

		&::placeholder {
			color: var(--color-text-placeholder);
		}
	}
</style>
