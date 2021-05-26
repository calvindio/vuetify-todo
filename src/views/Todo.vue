<template lang="pug">
.home
	field-add-task
	list-tasks(v-if='$store.state.tasks.length')
	no-tasks(v-else)
</template>

<script>
export default {
	name: 'Home',
	components: {
		FieldAddTask: require('@/components/todo/FieldAddTask').default,
		ListTasks: require('@/components/todo/ListTasks').default,
		NoTasks: require('@/components/todo/NoTasks').default,
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