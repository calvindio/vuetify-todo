<template lang="pug">
v-text-field.expanding-search.mt-1(
	@focus='searchClosed = false',
	@blur='searchClosed = true',
	:class='{ closed: searchClosed }',
	placeholder='Search',
	prepend-inner-icon='mdi-magnify',
	filled,
	dense,
	clearable
)
</template>

<script>
export default {
	data() {
		return { searchClosed: true }
	},
}
</script>

<style lang="sass">
.expanding-search
	.v-input__slot
		&:before, &:after
			border-color: transparent !important
	&.closed
		max-width: 45px
</style>