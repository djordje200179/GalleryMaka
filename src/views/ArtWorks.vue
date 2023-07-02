<template>
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
		<Artwork v-for="artwork in categoryArtworks" :key="artwork.title" :artwork="artwork" />
	</div>
</template>

<script>
import artworks from "../artworks.json";
import Artwork from "../components/Artwork.vue";

export default {
	name: "Artworks",
	components: {
		Artwork
	},
	computed: {
		allArtworks() {
			return artworks;
		},
		categoryArtworks() {
			return artworks.filter(artwork => artwork.category === this.$route.params.category);
		},
	}
}
</script>