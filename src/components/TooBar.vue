<template>
	<div class="header">
	<router-link to="/news">News</router-link> | 
	<router-link to="/ask">Ask</router-link> | 
	<router-link to="/jobs">jobs</router-link>
	</div>
</template>



<style scoped>
.header {
	color: white;
	display: flex;
	background-color: #42b883;
	padding: 8px;
}
.header a:active, .header a:hover {
	color: #35495e;
}
.header a {
	color: white;
}
</style>