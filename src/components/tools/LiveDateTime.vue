<template lang="pug">
.text-subtitle-1.ml-4 {{ date }}
</template>

<script>
import { format } from 'date-fns'
export default {
	data() {
		return { date: '' }
	},
	methods: {
		getDate() {
			this.date = format(new Date(), 'MMM d')
		},
	},
	mounted() {
		this.getDate()
	},
}
</script>