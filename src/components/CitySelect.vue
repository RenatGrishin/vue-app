<script setup>
	import Button from './Button.vue';
	import IconLocation from '../icons/IconLocation.vue';

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
		emit('selectCity', 'Kazan');
	}
</script>
<template>
	<Button @click="select()"><IconLocation /> Изменить город</Button>
	<div><input /><Button>Сохранить</Button></div>
</template>
