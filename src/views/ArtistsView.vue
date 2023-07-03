<template>

	<div class="d-flex">
		<div class="dropdown ms-auto mt-1 mb-3 me-3 ">
			<button class="btn btn-light dropdown-toggle mt-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    			Сортирање
  				</button>
		<ul class="dropdown-menu">
			<li><button class="dropdown-item" type="button" @click="currentArtists = artistsByNameUp">Називу растуће</button></li>
			<li><button class="dropdown-item" type="button" @click="currentArtists = artistsByNameDown">Називу опадајуће</button></li>
		</ul>
		</div>
	</div>
	

	<div class="container">
			<Artist class="pb-3" v-for="artist in currentArtists" :key="artist.name" :artist="artist" />
	</div>
</template>



<script>
import artists from "../artists.json";
import Artist from "../components/Artist.vue";

export default {
	name: "ArtistsView",
	components: {
		Artist
	},
	created(){
		this.currentArtists = this.categoryArtists;
	},
	data() {
		return{
			currentArtists:this.categoryArtists
		}
	}, 
	computed: {
		allArtists() {
			return artists;
		},
		categoryArtists() {
			return artists.filter(artists => artists.category === this.$route.params.category);
		},
		artistsByNameUp() {
			return artists.sort(cmpFunctionByAristsUp).filter(artists => artists.category === this.$route.params.category);
		},
		artistsByNameDown() {
			return artists.sort(cmpFunctionByAristsDown).filter(artists => artists.category === this.$route.params.category);
		}
	}
}

function cmpFunctionByAristsUp(first, second){
		return first.name <= second.name ? -1 : 1;
}
function cmpFunctionByAristsDown(first, second){
		return first.name >= second.name ? -1 : 1;
}

</script>