<template lang="pug">
.home
	field-add-task
	list-tasks(v-if='$store.state.tasks.length')
	.no-tasks(v-else)
		v-icon(size='100', color='primary') mdi-check
		.text-h5.primary--text No tasks
</template>

<script>
export default {
	name: 'Home',
	components: {
		FieldAddTask: require('@/components/todo/FieldAddTask.vue').default,
		ListTasks: require('@/components/todo/ListTasks.vue').default,
	},
}
</script>

<style lang="sass">
.no-tasks
	position: absolute
	left: 50%
	top: 50%
	transform: translate(-50%, -50%)
	opacity: .5
</style>