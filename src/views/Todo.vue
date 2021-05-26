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