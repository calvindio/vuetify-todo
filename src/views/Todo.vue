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
	v-list.pt-0(flat)
		div(v-for='task in tasks', :key='task.id')
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
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			newTaskTitle: '',
			tasks: [
				// { id: 1, title: 'Wake up', done: false },
				// { id: 2, title: 'Get bananas', done: false },
				// { id: 3, title: 'Eat bananas', done: false },
			],
		}
	},
	methods: {
		addTask() {
			let newTask = {
				id: Date.now(),
				title: this.newTaskTitle,
				done: false,
			}
			this.tasks.push(newTask)
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
