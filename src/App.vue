<template lang="pug">
v-app#inspire 
	v-navigation-drawer(v-model='drawer', :mobile-breakpoint='768', app) 
		v-img.pa-4(
			src='mountains.jpg',
			height='170',
			gradient='to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
		)
			v-avatar.mb-2.pt-7(size='70')
				img(src='calvin.jpg', alt='profile picture')
			.white--text.text-subtitle-1.font-weight-bold Danny Connell
			.white--text.text-subtitle-2 danny__connell
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
		height='220'
	) 
		template(v-slot:img='{ props }') 
			v-img(
				v-bind='props',
				gradient='to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)'
			) 
		v-container.header-container.pa-0
			v-row
				v-app-bar-nav-icon(@click='drawer = !drawer') 
				v-spacer 
				search
			v-row
				v-toolbar-title.text-h4.ml-4 {{ $store.state.appTitle }}
			v-row
				live-date-time
			v-row
				field-add-task
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
		FieldAddTask: require('@/components/todo/FieldAddTask').default,
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
	mounted() {
		this.$store.dispatch('getTasks')
	},
}
</script>

<style lang="sass">
.header-container
	max-width: none !important
</style>