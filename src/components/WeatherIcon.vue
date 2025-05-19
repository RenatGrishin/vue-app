<script setup>
	import IconCloud from '../icons/IconCloud.vue';
	import IconSun from '../icons/IconSun.vue';
	import IconRain from '../icons/IconRain.vue';

	const { iconCode, size } = defineProps({
		iconCode: Number,
		size: Number,
	});
</script>

<template>
	<IconSun v-if="iconCode == 1000" :size="size" />
	<IconRain v-else-if="iconCode == 1009 || iconCode == 1063" :size="size" />
	<IconCloud v-else :size="size" />
</template>

<style scoped lang="scss"></style>
