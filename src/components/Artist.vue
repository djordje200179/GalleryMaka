<template>
	<div class="row my-2 rounded p-4">
		<div class="col-md-4">
			<img class="mx-auto d-block rounded" :src="artist.thumbnail" :alt="artist.name">
		</div>
		
		<div class="col-md-8">
			<h4>{{ artist.name }}</h4>
			<p>{{ artist.biography }}</p>

			<button type="button" class="btn btn-light ms-auto">
				{{ $t("artistsWorks") }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Artist",
	props: {
		artist: Object
	}
}
</script>

<style scoped>
.row {
	background-color: #8688b0;
}

.row img {
	max-width: 100%;
	max-height: 400px;
	object-fit: contain;
}
</style>