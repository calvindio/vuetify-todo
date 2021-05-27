<template lang="pug">
v-text-field.pa-3(
	v-model='newTaskTitle',
	@keyup.enter='addTask',
	outlined,
	label='Add Task',
	hide-details,
	clearable
)
	template(v-slot:append) 
		v-icon(@click='addTask', color='primary', :disabled='newTaskTitleInvalid') mdi-plus
</template>

<script>
export default {
	data() {
		return {
			newTaskTitle: '',
		}
	},
	computed: {
		newTaskTitleInvalid() {
			return !this.newTaskTitle
		},
	},
	methods: {
		addTask() {
			if (this.newTaskTitleInvalid) return
			this.$store.dispatch('addTask', this.newTaskTitle)
			this.newTaskTitle = ''
		},
	},
}
</script>