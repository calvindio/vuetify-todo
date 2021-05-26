<template lang="pug">
.home
	v-text-field.pa-3(
		v-model='newTaskTitle',
		@click:append='addTask',
		@keyup.enter='addTask',
		outlined,
		label='Add Task',
		append-icon='mdi-plus',
		hide-details,
		clearable
	)
	v-list.pt-0(v-if='$store.state.tasks.length', flat)
		div(v-for='task in $store.state.tasks', :key='task.id')
			v-list-item(
				@click='doneTask(task.id)',
				:class='{ "blue darken-4": task.done }'
			)
				template(v-slot:default) 
					v-list-item-action 
						v-checkbox(:input-value='task.done') 
					v-list-item-content 
						v-list-item-title(:class='{ "text-decoration-line-through": task.done }') {{ task.title }}
					v-list-item-action 
						v-btn(@click.stop='deleteTask(task.id)', icon) 
							v-icon(color='primary lighten-1') mdi-delete
			v-divider
	.no-tasks(v-else)
		v-icon(size='100', color='primary') mdi-check
		.text-h5.primary--text No tasks
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			newTaskTitle: '',
		}
	},
	methods: {
		addTask() {
			this.$store.commit('addTask', this.newTaskTitle)
			this.newTaskTitle = ''
		},
		doneTask(id) {
			let task = this.tasks.filter((task) => task.id === id)[0]
			task.done = !task.done
		},
		deleteTask(id) {
			this.tasks = this.tasks.filter((task) => task.id !== id)
		},
	},
}
</script>

<style lang="sass">
.no-tasks
	position: absolute
	left: 50%
	top: 50%
	transform: translate(-50%, -50%)
	opacity: .5
</style>