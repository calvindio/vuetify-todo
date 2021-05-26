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
		src='https://picsum.photos/1920/1080?random',
		prominent
	) 
		template(v-slot:img='{ props }') 
			v-img(
				v-bind='props',
				gradient='to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
			) 
		v-app-bar-nav-icon(@click='drawer = !drawer') 
		v-app-bar-title Title
		v-spacer 
		v-btn(icon) 
			v-icon mdi-magnify
		v-btn(icon) 
			v-icon mdi-heart
		v-btn(icon) 
			v-icon mdi-dots-vertical
		//- v-app-bar-nav-icon(@click='drawer = !drawer') 
		//- v-toolbar-title Vuetify Todo
	v-main 
		router-view
</template>

<script>
export default {
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