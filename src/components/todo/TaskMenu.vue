<template lang="pug">
div
	v-menu(bottom, left) 
		template(v-slot:activator='{ on, attrs }') 
			v-btn(color='primary', icon, v-bind='attrs', v-on='on') 
				v-icon mdi-dots-vertical
		v-list 
			v-list-item(v-for='(item, i) in items', :key='i', @click='handleClick(i)') 
				v-list-item-icon
					v-icon(v-text='item.icon')
				v-list-item-title {{ item.title }}
	dialog-delete(
		v-if='dialogs.delete',
		:task='task',
		@close='dialogs.delete = false'
	)
</template>

<script>
export default {
	components: {
		DialogDelete: require('@/components/todo/dialogs/DialogDelete').default,
	},
	props: ['task'],
	data: () => ({
		dialogs: { delete: false },
		items: [
			{
				title: 'Edit',
				icon: 'mdi-pencil',
				click() {
					console.log('edit')
				},
			},
			{
				title: 'Due Date',
				icon: 'mdi-calendar',
				click() {
					console.log('due date')
				},
			},
			{
				title: 'Delete',
				icon: 'mdi-delete',
				click() {
					this.dialogs.delete = true
				},
			},
		],
	}),
	methods: {
		handleClick(index) {
			this.items[index].click.call(this)
		},
	},
}
</script>