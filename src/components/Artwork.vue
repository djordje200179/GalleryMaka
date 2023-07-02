<template>
	<div class="col">
		<div class="card">
			<img :src="artwork.thumbnail" class="card-img-top" :alt="artwork.title">

			<div class="card-body">
				<h5 class="card-title">{{ artwork.title }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ artwork.artist }}</h6>

				<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
			</div>

			<div class="card-footer">
				<small class="text-muted">Last updated 3 mins ago</small>
			</div>
		</div>
	</div>
</template>

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