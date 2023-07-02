<template>
	<div class="artwork">
		
	</div>
</template>

<style>
	#body{
		background-color: #8688b0;
	}
</style>

<script>
export default {
	name: "Artwork",
	props: {
		artwork: Object
	}
}
</script>

<style scoped>
.card > img {
	height: 200px;
	object-fit: cover;
}
</style>