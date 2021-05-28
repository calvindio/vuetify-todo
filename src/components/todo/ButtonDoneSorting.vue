<template lang="pug">
v-btn.button-done-sorting(
	@click='$store.commit("toggleSorting")',
	color='primary'
) Done Sorting
</template>

<style lang="sass">
.button-done-sorting
	position: fixed
	bottom: 20px
	left: 50%
	transform: translateX(-50%)
</style>