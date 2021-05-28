<template lang="pug">
.home
	field-add-task
	list-tasks(v-if='$store.state.tasks.length')
	no-tasks(v-else)
	button-done-sorting(v-if='$store.state.sorting')
</template>

<script>
export default {
	name: 'Home',
	components: {
		FieldAddTask: require('@/components/todo/FieldAddTask').default,
		ListTasks: require('@/components/todo/ListTasks').default,
		NoTasks: require('@/components/todo/NoTasks').default,
		ButtonDoneSorting: require('@/components/todo/ButtonDoneSorting').default,
	},
}
</script>