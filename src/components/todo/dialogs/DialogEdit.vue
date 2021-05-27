<template lang="pug">
v-dialog(:value='true', persistent, max-width='290') 
	v-card 
		v-card-title.headline Edit task?
		v-card-text 
			p Edit the title of this task:
			v-text-field
		v-card-actions 
			v-spacer 
			v-btn(@click='$emit("close")', text) Cancel
			v-btn(@click='$store.dispatch("editTask", task.id)', color='red', text) Save
</template>

<script>
export default {
	props: ['task'],
}
</script>