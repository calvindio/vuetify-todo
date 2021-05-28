<template lang="pug">
v-text-field.expanding-search.mt-1(
	placeholder='Search',
	prepend-inner-icon='mdi-magnify',
	filled,
	dense,
	clearable
)
</template>

<style lang="sass">
.expanding-search
	.v-input__slot
		&:before, &:after
			border-color: transparent !important
</style>