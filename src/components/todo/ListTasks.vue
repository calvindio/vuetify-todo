<template lang="pug">
v-list.pt-0(flat)
	task(v-for='task in $store.state.tasks', :key='task.id', :task='task')
</template>

<script>
export default {
	components: {
		Task: require('@/components/todo/Task').default,
	},
}
</script>