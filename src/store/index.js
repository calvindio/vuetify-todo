import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		appTitle: process.env.VUE_APP_TITLE,
		search: null,
		tasks: [
			// { id: 1, title: 'Wake up', done: false, dueDate: '2021-10-16' },
			// { id: 2, title: 'Get bananas', done: false, dueDate: '2021-10-17' },
			// { id: 3, title: 'Eat bananas', done: false, dueDate: null },
		],
		snackbar: {
			show: false,
			text: 'Hey mother flipper!',
		},
		sorting: false,
	},
	mutations: {
		setSearch(state, value) {
			state.search = value
		},
		addTask(state, newTask) {
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
		setTasks(state, tasks) {
			state.tasks = tasks
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
		toggleSorting(state) {
			state.sorting = !state.sorting
		},
	},
	actions: {
		async addTask({ commit }, newTaskTitle) {
			let newTask = {
				id: Date.now(),
				title: newTaskTitle,
				done: false,
				dueDate: null,
			}
			await db.collection('tasks').add(newTask)
			commit('addTask', newTask)
			commit('showSnackbar', 'Task added!')
		},
		async doneTask({ state, commit }, id) {
			let task = state.tasks.filter(task => task.id === id)[0]
			await db
				.collection('tasks')
				.doc({ id: id })
				.update({ done: !task.done })
			commit('doneTask', id)
		},
		async deleteTask({ commit }, id) {
			await db
				.collection('tasks')
				.doc({ id })
				.delete()
			commit('deleteTask', id)
			commit('showSnackbar', 'Task deleted!')
		},
		async updateTaskTitle({ commit }, payload) {
			await db
				.collection('tasks')
				.doc({ id: payload.id })
				.update({ title: payload.title })
			commit('updateTaskTitle', payload)
			commit('showSnackbar', 'Task updated!')
		},
		async updateTaskDueDate({ commit }, payload) {
			await db
				.collection('tasks')
				.doc({ id: payload.id })
				.update({
					dueDate: payload.dueDate,
				})
			commit('updateTaskDueDate', payload)
			commit('showSnackbar', 'Due Date updated!')
		},
		async setTasks({ commit }, tasks) {
			commit('setTasks', tasks)
			db.collection('tasks').set(tasks)
		},
		async getTasks({ commit }) {
			const tasks = await db.collection('tasks').get()
			commit('setTasks', tasks)
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
