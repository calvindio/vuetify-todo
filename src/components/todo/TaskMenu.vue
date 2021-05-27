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
	dialog-edit(v-if='dialogs.edit', @close='dialogs.edit = false', :task='task')
	dialog-due-date(
		v-if='dialogs.dueDate',
		@close='dialogs.dueDate = false',
		:task='task'
	)
	dialog-delete(
		v-if='dialogs.delete',
		@close='dialogs.delete = false',
		:task='task'
	)
</template>

<script>
export default {
	components: {
		DialogEdit: require('@/components/todo/dialogs/DialogEdit').default,
		DialogDueDate: require('@/components/todo/dialogs/DialogDueDate').default,
		DialogDelete: require('@/components/todo/dialogs/DialogDelete').default,
	},
	props: ['task'],
	data: () => ({
		dialogs: { edit: false, dueDate: true, delete: false },
		items: [
			{
				title: 'Edit',
				icon: 'mdi-pencil',
				click() {
					this.dialogs.edit = true
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