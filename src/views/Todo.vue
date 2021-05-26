<template lang="pug">
.home
	v-list.pt-0(flat)
		div(v-for='task in tasks', :key='task.id')
			v-list-item
				template(v-slot:default='{ active }') 
					v-list-item-action 
						v-checkbox(:input-value='active') 
					v-list-item-content 
						v-list-item-title {{ task.title }}
			v-divider
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			tasks: [
				{ id: 1, title: 'Wake up' },
				{ id: 2, title: 'Get bananas' },
				{ id: 3, title: 'Eat bananas' },
			],
		}
	},
}
</script>
