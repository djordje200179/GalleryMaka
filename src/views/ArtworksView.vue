<template>

	<div class="d-flex">
		<div class="dropdown ms-auto mt-1 mb-3 me-3">
			<button class="btn btn-light dropdown-toggle mt-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    			Сортирање
  				</button>
		<ul class="dropdown-menu">
			<li><button class="dropdown-item" type="button" @click="sortArtworksByNameAscending">Назив уметнине растуће</button></li>
			<li><button class="dropdown-item" type="button" @click="sortArtworksByNameDescending">Назив уметнине опадајуће</button></li>
			<li><button class="dropdown-item" type="button" @click="sortArtworksByArtistAscending">Назив уметника растуће</button></li>
			<li><button class="dropdown-item" type="button" @click="sortArtworksByArtistDescending">Назив уметника опадајуће</button></li>
		</ul>
		</div>
	</div>
	
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
		<router-link v-for="artwork in artworks" :key="artwork.title" 
					 class="artwork-link mb-2 px-1 px-2" 
					 :to=" { name: 'artwork', params: { name: artwork.title} }">
			<Artwork :artwork="artwork" />
		</router-link>
	</div>
</template>

<script>
import artworks from "../artworks.json";
import Artwork from "../components/Artwork.vue";

export default {
	name: "ArtworksView",
	components: {
		Artwork
	},
	data() {
		return {
			artworks: artworks.filter(artwork => artwork.category === this.$route.params.category)
		}
	}, 
	methods: {
		sortArtworksByNameAscending() {
			this.artworks.sort((first, second) => first.title <= second.title ? -1 : 1);
		},
		sortArtworksByNameDescending() {
			this.artworks.sort((first, second) => first.title >= second.title ? -1 : 1);
		},
		sortArtworksByArtistAscending() {
			this.artworks.sort((first, second) => first.artist <= second.artist ? -1 : 1);
		},
		sortArtworksByArtistDescending() {
			this.artworks.sort((first, second) => first.artist >= second.artist ? -1 : 1);
		}
	}
}
</script>

<style scoped>
.artwork-link {
	text-decoration: none;
	color: inherit;
}
</style>