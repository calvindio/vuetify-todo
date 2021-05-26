<template lang="pug">
v-dialog(:value='true', persistent, max-width='290') 
	v-card 
		v-card-title.headline Delete task?
		v-card-text Are you sure you wanna delete this task?
		v-card-actions 
			v-spacer 
			v-btn(text, @click='dialog = false') No
			v-btn(color='red', text, @click='dialog = false') Yes
</template>