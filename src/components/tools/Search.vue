<template lang="pug">
v-text-field.expanding-search.mt-1(
	v-model='search',
	@focus='searchClosed = false',
	@blur='searchClosed = true',
	:class='{ closed: searchClosed && !search }',
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
		return { search: null, searchClosed: true }
	},
}
</script>

<style lang="sass">
.expanding-search
	transition: max-width .3s
	.v-input__slot
		cursor: pointer !important
		&:before, &:after
			border-color: transparent !important
	&.closed
		max-width: 45px
		.v-input__slot
			background: transparent !important
</style>