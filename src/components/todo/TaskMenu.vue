<template lang="pug">
v-menu(bottom, left) 
	template(v-slot:activator='{ on, attrs }') 
		v-btn(color='primary', icon, v-bind='attrs', v-on='on') 
			v-icon mdi-dots-vertical
	v-list 
		v-list-item(v-for='(item, i) in items', :key='i') 
			v-list-item-icon
				v-icon(v-text='item.icon')
			v-list-item-title {{ item.title }}
</template>

<script>
export default {
	data: () => ({
		items: [
			{ title: 'Edit', icon: 'mdi-pencil' },
			{ title: 'Due Date', icon: 'mdi-calendar' },
			{ title: 'Delete', icon: 'mdi-delete' },
		],
	}),
}
</script>