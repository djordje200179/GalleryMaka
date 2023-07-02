<template>

	<div class="d-flex">
		<div class="dropdown ms-auto mt-1 mb-3 me-3">
			<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
								Сортирање
			</a>
		<ul class="dropdown-menu">
			<li><button class="dropdown-item" type="button" @click="currentArtwork = artworksByArtWorkNameUp">Назив уметнине растуће</button></li>
			<li><button class="dropdown-item" type="button" @click="currentArtwork = artworksByArtWorkNameDown">Назив уметнине опадајуће</button></li>
			<li><button class="dropdown-item" type="button" @click="currentArtwork = artworksByArtistsNameUp">Назив уметника растуће</button></li>
			<li><button class="dropdown-item" type="button" @click="currentArtwork = artworksByArtistsNameDown">Назив уметника опадајуће</button></li>
		</ul>
		</div>
	</div>
	

	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
		<Artwork v-for="artwork in currentArtwork" :key="artwork.title" :artwork="artwork" />
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
	created(){
		this.currentArtwork = this.categoryArtworks;
	},
	data() {
		return{
			currentArtwork:this.categoryArtworks
		}
	}, 
	computed: {
		allArtworks() {
			return artworks;
		},
		categoryArtworks() {
			return artworks.filter(artwork => artwork.category === this.$route.params.category);
		},
		artworksByArtistsNameUp() {
			return artworks.sort(cmpFunctionByAristsUp).filter(artwork => artwork.category === this.$route.params.category);
		},
		artworksByArtistsNameDown() {
			return artworks.sort(cmpFunctionByAristsDown).filter(artwork => artwork.category === this.$route.params.category);
		},
		artworksByArtWorkNameUp() {
			return artworks.sort(cmpFunctionByArtWorkUp).filter(artwork => artwork.category === this.$route.params.category);
		},
		artworksByArtWorkNameDown() {
			return artworks.sort(cmpFunctionByArtWorkDown).filter(artwork => artwork.category === this.$route.params.category);
		}
	}
}

function cmpFunctionByAristsUp(first, second){
		return first.artist <= second.artist ? -1 : 1;
}
function cmpFunctionByAristsDown(first, second){
		return first.artist >= second.artist ? -1 : 1;
}
function cmpFunctionByArtWorkUp(first, second){
		return first.title <= second.title ? -1 : 1;
}
function cmpFunctionByArtWorkDown(first, second){
		return first.title >= second.title ? -1 : 1;
}
</script>