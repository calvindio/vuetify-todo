<template lang="pug">
v-list.pt-0(flat)
	div(v-for='task in $store.state.tasks', :key='task.id')
		v-list-item(
			@click='$store.commit("doneTask", task.id)',
			:class='{ "blue darken-4": task.done }'
		)
			template(v-slot:default) 
				v-list-item-action 
					v-checkbox(:input-value='task.done') 
				v-list-item-content 
					v-list-item-title(:class='{ "text-decoration-line-through": task.done }') {{ task.title }}
				v-list-item-action 
					v-btn(@click.stop='$store.commit("deleteTask", task.id)', icon) 
						v-icon(color='primary lighten-1') mdi-delete
		v-divider
</template>