<template>
	<div class="col">
		<div class="card">
			<img :src="artwork.thumbnail" class="card-img-top" :alt="artwork.title">

			<div class="card-body" id="body">
				<h5 class="card-title">{{ artwork.title }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ artwork.artist }}</h6>
			</div>

			<div class="card-footer">
				<small class="text-muted">Procenjena vrednost: {{ artwork.price }}</small>
			</div>
		</div>
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