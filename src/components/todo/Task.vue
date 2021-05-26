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
				v-btn(@click.stop='dialogs.delete = true', icon) 
					v-icon(color='primary lighten-1') mdi-delete
	v-divider
	dialog-delete(v-if='dialogs.delete')
</template>

<script>
export default {
	components: {
		DialogDelete: require('@/components/todo/dialogs/DialogDelete').default,
	},
	props: ['task'],
	data() {
		return { dialogs: { delete: false } }
	},
}
</script>