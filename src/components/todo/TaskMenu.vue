<template lang="pug">
v-menu(bottom, left) 
	<template lang="pug">(v-slot:activator="{ on, attrs }") 
		v-btn(dark, icon, v-bind='attrs', v-on='on') 
			v-icon mdi-dots-vertical
	v-list 
		v-list-item(v-for='(item, i) in items', :key='i') 
			v-list-item-title {{ item.title }}
</template>