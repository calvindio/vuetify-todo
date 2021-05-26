<template lang="pug">
div
	v-list-item(
		@click='$store.commit("doneTask", task.id)',
		:class='{ "blue darken-4": task.done }'
	)
		template(v-slot:default) 
			v-list-item-action 
				v-checkbox(:input-value='task.done') 
			v-list-item-content 
				v-list-item-title(:class='{ "text-decoration-line-through": task.done }') {{ task.title }}
			v-list-item-action 
				task-menu(:task='task')
	v-divider
</template>

<script>
export default {
	components: {
		TaskMenu: require('@/components/todo/TaskMenu').default,
	},
	props: ['task'],
}
</script>