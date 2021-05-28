<template lang="pug">
.home
	list-tasks(v-if='$store.state.tasks.length')
	no-tasks(v-else)
	button-done-sorting(v-if='$store.state.sorting')
</template>

<script>
export default {
	name: 'Home',
	components: {
		ListTasks: require('@/components/todo/ListTasks').default,
		NoTasks: require('@/components/todo/NoTasks').default,
		ButtonDoneSorting: require('@/components/todo/ButtonDoneSorting').default,
	},
}
</script>