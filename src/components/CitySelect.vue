<script setup>
	import Button from './Button.vue';
	import Input from './Input.vue';
	import IconLocation from '../icons/IconLocation.vue';
	import { ref } from 'vue';

	let isEdited = ref(true);

	const emit = defineEmits({
		selectCity: (val) => {
			if (!val) {
				console.log('selectCity не может быть пустым!');
				return false;
			}
			console.log(`validation emit ${val}`);
			return true;
		},
	});

	function select() {
		isEdited.value = false;
		emit('selectCity', 'Kazan');
	}
	function edit() {
		isEdited.value = true;
	}
</script>
<template>
	<div class="city-select">
		<div v-if="isEdited" class="city-input">
			<Input placeholder="Введите город" />
			<Button @click="select()">Сохранить</Button>
		</div>
		<Button v-else @click="edit()"><IconLocation /> Изменить город</Button>
	</div>
</template>

<style lang="scss" scoped>
	.city-input {
		display: flex;
		gap: 12px;
	}
	.city-select {
		width: 420px;
	}
</style>
