<template lang="pug">
v-snackbar(v-model='$store.state.snackbar.show') {{ $store.state.snackbar.text }}
	template(v-slot:action='{ attrs }')
		v-btn(@click='$store.commit("hideSnackbar")', text, v-bind='attrs') Close
</template>

<script>
export default {}
</script>