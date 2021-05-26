<template lang="pug">
v-dialog(:value='true', persistent, max-width='290') 
	v-card 
		v-card-title.headline Delete task?
		v-card-text Are you sure you wanna delete this task?
		v-card-actions 
			v-spacer 
			v-btn(@click='$emit("close")', text) No
			v-btn(@click='$store.dispatch("deleteTask", task.id)', color='red', text) Yes
</template>

<script>
export default {
	props: ['task'],
}
</script>