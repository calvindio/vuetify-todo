<template lang="pug">
v-app#inspire 
	v-navigation-drawer(v-model='drawer', app) 
	v-app-bar(app) 
		v-app-bar-nav-icon(@click='drawer = !drawer') 
		v-toolbar-title Application
	v-main 
</template>

<script>
export default {
	data: () => ({ drawer: null }),
}
</script>