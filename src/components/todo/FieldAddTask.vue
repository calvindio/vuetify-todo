<template lang="pug">
v-text-field.field-add-task.pa-3(
	v-model='newTaskTitle',
	@keyup.enter='addTask',
	outlined,
	placeholder='Add Task',
	hide-details,
	clearable
)
	template(v-slot:append) 
		v-icon(@click='addTask', :disabled='newTaskTitleInvalid') mdi-plus
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

<style lang="sass">
.field-add-task.v-input--is-focused
	.v-input__slot
		background: rgba(31, 94, 129, .5) !important
</style>