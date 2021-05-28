<template lang="pug">
v-app#inspire 
	v-navigation-drawer(v-model='drawer', app) 
		v-list-item
			v-list-item-content
				v-list-item-title.title Vuetify Todo
				v-list-item-subtitle Best Todo Ever
		v-divider
		v-list(dense, nav) 
			v-list-item(v-for='item in items', :key='item.title', :to='item.to', link) 
				v-list-item-icon
					v-icon {{ item.icon }}
				v-list-item-content
					v-list-item-title {{ item.title }}
	v-app-bar(
		app,
		color='primary',
		dark,
		src='mountains.jpg',
		prominent,
		height='170'
	) 
		template(v-slot:img='{ props }') 
			v-img(
				v-bind='props',
				gradient='to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
			) 
		v-container.pa-0
			v-row
				v-app-bar-nav-icon(@click='drawer = !drawer') 
				v-spacer 
				search
			v-row
				v-toolbar-title.text-h4.ml-4 Vuetify Todo
			v-row
				live-date-time
	v-main 
		router-view
		snackbar
</template>

<script>
export default {
	components: {
		Search: require('@/components/tools/Search').default,
		LiveDateTime: require('@/components/tools/LiveDateTime').default,
		Snackbar: require('@/components/shared/Snackbar').default,
	},
	data() {
		return {
			drawer: null,
			items: [
				{ title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
				{ title: 'About', icon: 'mdi-help-box', to: '/about' },
			],
		}
	},
}
</script>