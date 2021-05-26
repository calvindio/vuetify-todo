<template lang="pug">
v-card.mx-auto(height='400', width='256') 
	v-navigation-drawer(permanent) 
		v-list-item
			v-list-item-content
				v-list-item-title.title Application
				v-list-item-subtitle subtext
		v-divider
		v-list(dense, nav) 
			v-list-item(v-for='item in items', :key='item.title', link) 
				v-list-item-icon
					v-icon {{ item.icon }}
				v-list-item-content
					v-list-item-title {{ item.title }}
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard' },
				{ title: 'Photos', icon: 'mdi-image' },
				{ title: 'About', icon: 'mdi-help-box' },
			],
			right: null,
		}
	},
}
</script>