<template lang="pug">
v-snackbar(v-model='$store.state.snackbar.show') {{ text }}
	template(v-slot:action='{ attrs }')
		v-btn(color='pink', text, v-bind='attrs', @click='snackbar = false') Close
</template>

<script>
export default {
	data: () => ({
		text: `Task Added`,
	}),
}
</script>