<template lang="pug">
v-list.pt-0(flat)
	draggable(:list='$store.getters.tasksFiltered', handle='.handle')
		task(
			v-for='task in $store.getters.tasksFiltered',
			:key='task.id',
			:task='task'
		)
</template>

<script>
import draggable from 'vuedraggable'
export default {
	components: {
		draggable,
		Task: require('@/components/todo/Task').default,
	},
}
</script>