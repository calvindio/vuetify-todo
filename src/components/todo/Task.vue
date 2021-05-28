<template lang="pug">
div
	v-list-item(
		@click='$store.dispatch("doneTask", task.id)',
		:class='{ "blue darken-4": task.done }',
		:ripple='false'
	)
		template(v-slot:default) 
			v-list-item-action 
				v-checkbox(:input-value='task.done') 
			v-list-item-content 
				v-list-item-title(:class='{ "text-decoration-line-through": task.done }') {{ task.title }}
			v-list-item-action(v-if='task.dueDate')
				v-list-item-action-text
					v-icon(small) mdi-calendar
					| &nbsp {{ task.dueDate | niceDate }}
			v-list-item-action 
				task-menu(:task='task')
			v-list-item-action(v-if='$store.state.sorting')
				v-btn.handle(color='primary', icon)
					v-icon mdi-drag-horizontal-variant
	v-divider
</template>

<script>
import { format } from 'date-fns'
export default {
	components: {
		TaskMenu: require('@/components/todo/TaskMenu').default,
	},
	props: ['task'],
	filters: {
		niceDate(value) {
			return format(new Date(value), 'MMM d')
		},
	},
}
</script>

<style lang="sass">
.sortable-ghost
	opacity: 0
.sortable-drag
	box-shadow: 0 0 10px rgba(0,0,0,.3)
</style>