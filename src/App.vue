<template lang="pug">
v-app#inspire 
	v-navigation-drawer(v-model='drawer', app) 
		v-list-item
			v-list-item-content
				v-list-item-title.title Vuetify Todo
				v-list-item-subtitle Best Todo Ever
		v-divider
		v-list(dense, nav) 
			v-list-item(v-for='item in items', :key='item.title', link) 
				v-list-item-icon
					v-icon {{ item.icon }}
				v-list-item-content
					v-list-item-title {{ item.title }}
	v-app-bar(app) 
		v-app-bar-nav-icon(@click='drawer = !drawer') 
		v-toolbar-title Vuetify Todo
	v-main 
</template>

<script>
export default {
	data() {
		return {
			drawer: null,
			items: [
				{ title: 'Todo', icon: 'mdi-view-dashboard' },
				{ title: 'About', icon: 'mdi-help-box' },
			],
		}
	},
}
</script>