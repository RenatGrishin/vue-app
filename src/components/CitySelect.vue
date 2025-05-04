<script setup>
	import Button from './Button.vue';
	import IconLocation from '../icons/IconLocation.vue';
	import { ref } from 'vue';

	let isEdited = ref(false);

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
	{{ isEdited }}
	<Button @click="select()"><IconLocation /> Изменить город</Button>
	<div><input /><Button @click="edit()">Сохранить</Button></div>
</template>
