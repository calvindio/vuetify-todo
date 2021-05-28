import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		appTitle: process.env.VUE_APP_TITLE,
		search: null,
		tasks: [
			{ id: 1, title: 'Wake up', done: false, dueDate: '2021-10-16' },
			{ id: 2, title: 'Get bananas', done: false, dueDate: '2021-10-17' },
			{ id: 3, title: 'Eat bananas', done: false, dueDate: null },
		],
		snackbar: {
			show: false,
			text: 'Hey mother flipper!',
		},
	},
	mutations: {
		setSearch(state, value) {
			state.search = value
		},
		addTask(state, newTaskTitle) {
			let newTask = {
				id: Date.now(),
				title: newTaskTitle,
				done: false,
				dueDate: null,
			}
			state.tasks.push(newTask)
		},
		doneTask(state, id) {
			let task = state.tasks.filter(task => task.id === id)[0]
			task.done = !task.done
		},
		deleteTask(state, id) {
			state.tasks = state.tasks.filter(task => task.id !== id)
		},
		updateTaskTitle(state, { id, title }) {
			let task = state.tasks.filter(task => task.id === id)[0]
			task.title = title
		},
		updateTaskDueDate(state, { id, dueDate }) {
			let task = state.tasks.filter(task => task.id === id)[0]
			task.dueDate = dueDate
		},
		showSnackbar(state, text) {
			let timeout = 0
			if (state.snackbar.show) {
				state.snackbar.show = false
				timeout = 300
			}
			setTimeout(() => {
				state.snackbar.show = true
				state.snackbar.text = text
			}, timeout)
		},
		hideSnackbar(state) {
			state.snackbar.show = false
		},
	},
	actions: {
		addTask({ commit }, newTaskTitle) {
			commit('addTask', newTaskTitle)
			commit('showSnackbar', 'Task added!')
		},
		deleteTask({ commit }, id) {
			commit('deleteTask', id)
			commit('showSnackbar', 'Task deleted!')
		},
		updateTaskTitle({ commit }, payload) {
			commit('updateTaskTitle', payload)
			commit('showSnackbar', 'Task updated!')
		},
		updateTaskDueDate({ commit }, payload) {
			commit('updateTaskDueDate', payload)
			commit('showSnackbar', 'Due Date updated!')
		},
	},
	getters: {
		tasksFiltered(state) {
			if (!state.search) return state.tasks
			return state.tasks.filter(task =>
				task.title.toLowerCase().includes(state.search.toLowerCase()),
			)
		},
	},
})
