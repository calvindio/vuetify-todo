<template lang="pug">
v-list.pt-0(flat)
	draggable(v-model='tasks', handle='.handle')
		task(v-for='task in tasks', :key='task.id', :task='task')
</template>

<script>
import draggable from 'vuedraggable'
export default {
	components: {
		draggable,
		Task: require('@/components/todo/Task').default,
	},
	computed: {
		tasks: {
			get() {
				return this.$store.getters.tasksFiltered
			},
			set(tasks) {
				this.$store.dispatch('setTasks', tasks)
			},
		},
	},
}
</script>