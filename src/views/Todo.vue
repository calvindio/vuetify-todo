<template lang="pug">
.home
	v-list(flat) 
		v-list-item 
			template(v-slot:default='{ active }') 
				v-list-item-action 
					v-checkbox(:input-value='active') 
				v-list-item-content 
					v-list-item-title Wake up
</template>

<script>
export default {
	name: 'Home',
}
</script>
