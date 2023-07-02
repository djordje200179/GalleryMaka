<template>
	<div class="text-center p-1">
		<h1 class="display-5 font-weight-bold" id="artwork_title">{{artwork.title}}</h1>
	</div>
	
	<div class="container p-3">
		<div class="row ">

			<div class=" card col-md-4 art">
				<img :src="artwork.thumbnail" class="img-fluid rounded-start mt-3 mb-1" alt="...">
			</div>
			<div class="col-md-8 card art">
				<div class="card-body art">
					<h5 class="card-title">O autoru: {{ artist.name }}</h5>
					<p class="card-text">{{artist.biography}}</p>
				
				</div>
			</div>
		</div>
	</div>
	
	<div class="text-center p-1">
		<h1 class="display-6" id="artwork_title">Galerija</h1>
	</div>

	<div id="gallery" class="d-flex">
		<div id="carouselExample" class="carousel slide ms-auto me-auto">
			<div class="carousel-inner">
				<div v-for="pic in artwork.gallery" :key="pic.id" class="carousel-item active">
					<img :src="pic.link" class="d-block w-100 pic" alt="...">
				</div>

				<div class="carousel-item active">
					<video class="img-fluid" autoplay loop muted>
						<source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
					</video>
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>
						Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>

	

</template>

<style>
	#body{
		background-color: #8688b0;
	}
	#artwork_title{
		color:white
	}
	/* #gallery{
		max-height: 500;
		max-width: 700px;
	} */
	
	.pic, video{
		max-width: 500px;
		max-height: 500px;
		object-fit: contain;
	}
</style>

<script>
import artworks from "../artworks.json";
import artists from "../artists.json";
export default {
	name: "Artwork",
	props: {
		artwork: Object
	},
	data(){
		return {
			artwork:"", artist:""
		}
	},
	created(){
		console.log()
		this.artwork = artworks.find(element => element.title == this.$route.params.name);
		this.artist = artists.find(element => element.artworks.find(art => art == this.$route.params.name));


	}
}
</script>

<style scoped>
.card > img {
	height: 200px;
	object-fit: contain;
}

.artimage{
	max-height: 200px;
	min-height: 200px;
	min-width: 200px;
	max-width: 200px;
}
</style>