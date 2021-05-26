<template lang="pug">
v-text-field.pa-3(
	v-model='newTaskTitle',
	@click:append='addTask',
	@keyup.enter='addTask',
	outlined,
	label='Add Task',
	append-icon='mdi-plus',
	hide-details,
	clearable
)
</template>

<script>
export default {
	data() {
		return {
			newTaskTitle: '',
		}
	},
	methods: {
		addTask() {
			this.$store.dispatch('addTask', this.newTaskTitle)
			this.newTaskTitle = ''
		},
	},
}
</script>