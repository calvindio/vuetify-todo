<template lang="pug">
v-dialog(:value='true', persistent, max-width='290') 
	v-card 
		v-card-title.headline Edit task?
		v-card-text 
			p Edit the title of this task:
			v-text-field(v-model='taskTitle', @keyup.enter='saveTask')
		v-card-actions 
			v-spacer 
			v-btn(@click='$emit("close")', text) Cancel
			v-btn(@click='saveTask', :disabled='taskTitleInvalid', color='red', text) Save
</template>

<script>
export default {
	props: ['task'],
	data() {
		return { taskTitle: null }
	},
	computed: {
		taskTitleInvalid() {
			return !this.taskTitle || this.taskTitle === this.task.title
		},
	},
	methods: {
		saveTask() {
			if (this.taskTitleInvalid) return
			const payload = {
				id: this.task.id,
				title: this.taskTitle,
			}
			this.$store.dispatch('updateTaskTitle', payload)
			this.$emit('close')
		},
	},
	mounted() {
		this.taskTitle = this.task.title
	},
}
</script>