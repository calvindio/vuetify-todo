<template lang="pug">
.home.pa-6
	v-list(subheader, three-line) 
		v-subheader User Controls
		v-list-item 
			v-list-item-content 
				v-list-item-title Content filtering
				v-list-item-subtitle Set the content filtering level to restrict appts that can be downloaded
		v-list-item 
			v-list-item-content 
				v-list-item-title Password
				v-list-item-subtitle Require password for purchase or use password to restrict purchase
	v-divider 
	v-list(flat, subheader, three-line) 
		v-subheader General
		v-list-item-group(v-model='settings', multiple, active-class='') 
			v-list-item 
				template(v-slot:default='{ active }') 
					v-list-item-action 
						v-checkbox(:input-value='active') 
					v-list-item-content 
						v-list-item-title Notifications
						v-list-item-subtitle Notify me about updates to apps or games that I downloaded
			v-list-item 
				template(v-slot:default='{ active }') 
					v-list-item-action 
						v-checkbox(:input-value='active') 
					v-list-item-content 
						v-list-item-title Sound
						v-list-item-subtitle Auto-update apps at any time. Data charges may apply
			v-list-item 
				template(v-slot:default='{ active }') 
					v-list-item-action 
						v-checkbox(:input-value='active') 
					v-list-item-content 
						v-list-item-title Auto-add widgets
						v-list-item-subtitle Automatically add home screen widgets when downloads complete
</template>

<script>
export default {
	name: 'Home',
}
</script>
