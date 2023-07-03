<template>
	<h1 class="text-center text-white pt-2">{{artwork.title}}</h1>

	<div class="container">
		<div class="row my-2 rounded p-4">
			<div class="col-lg-4">
				<img class="mx-auto d-block rounded" :src="artwork.thumbnail" :alt="artwork.name">
			</div>
			
			<div class="col-lg-8 mt-2 mt-lg-0">
				<h4 class="text-center">О аутору {{ artist.name }}</h4>
				<p>{{artist.biography}}</p>
			
				<hr />

				<div class="d-flex bd-highlight">
					<div class="flex-grow-1">
						<small class="text-muted">Процењена вредност: {{ artwork.price }}</small>
						<br/>
						<small class="text-muted">Година настанка: {{ artwork.year }}</small>
					</div>
					
					<button type="button" class="btn btn-light ms-auto">Преглед дела</button>
				</div>		
			</div>
		</div>
	</div>

	<h1 class="display-6 my-2 text-white text-center">Галерија</h1>
	<div id="image-gallery" class="carousel slide mx-auto" data-bs-ride="true">
		<div class="carousel-inner">
			<div v-for="(image, index) in artwork.gallery" :key="image.id" 
				 class="carousel-item" :class="{active: index == 0}">
				<img :src="image.link" class="d-block w-100">
			</div>
		</div>

		<button class="carousel-control-prev" type="button" data-bs-target="#image-gallery" data-bs-slide="prev">
			<span class="carousel-control-prev-icon"></span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#image-gallery" data-bs-slide="next">
			<span class="carousel-control-next-icon"></span>
		</button>
	</div>
	
	<h1 class="display-6 my-2 text-white text-center">Приспеле понуде</h1>
	<table class="table table-dark mx-auto my-0 text-center shrinked-element">
		<thead>
			<tr>
				<th scope="col">Корисник</th>
				<th scope="col">Износ</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="bid in bids" :key="bid.id">
				<td>{{ bid.bidder }}</td>
				<td>{{ bid.amount }}</td>
			</tr>
		</tbody>
	</table>
	<form class="input-group shrinked-element mx-auto" @submit="addBid">
		<input type="text" class="form-control" placeholder="Дајте вашу понуду"
			   name="offerAmount" required>
		<button class="btn btn-light">Постави понуду</button>
	</form>
	
	<h1 class="display-6 my-2 text-white text-center">Коментари</h1>
	<table class="table table-dark mx-auto my-0 text-center shrinked-element">
		<thead>
			<tr>
				<th scope="col">Корисник</th>
				<th scope="col">Коментар</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="comment in artwork.comments" :key="comment.id">
				<td>{{ comment.commenter }}</td>
				<td>{{ comment.comment }}</td>
			</tr>
		</tbody>
	</table>
	<form class="input-group shrinked-element mx-auto mb-2" @submit="addComment">
		<input type="text" class="form-control" placeholder="Унесите ваш коментар"
			   name="commentText" required>
		<button class="btn btn-light">Постави коментар</button>
	</form>
</template>

<script>
import artworks from "../artworks.json";
import artists from "../artists.json";

export default {
	name: "ArtworkView",
	computed: {
		artwork() {
			return artworks.find(artwork => artwork.title == this.$route.params.name);
		},
		artist() {
			return artists.find(artist => artist.artworks.find(artwork => artwork == this.$route.params.name));
		}, 
		bids() {
			const artwork = artworks.find(artwork => artwork.title == this.$route.params.name);
			return artwork.bids.slice().sort((first, second) => first.amount <= second.amount ? 1 : -1);
		}
	},
	methods:{
		addBid(event) {
			event.preventDefault();

			const formData = new FormData(event.target);
			const offerAmount = formData.get("offerAmount");

			const newBid = {
				offer: offerAmount,
				artwork: this.artwork.title
			};

			const currentBids = JSON.parse(localStorage.getItem("bids") || "[]");
			currentBids.push(newBid);
			localStorage.setItem("bids", JSON.stringify(currentBids));
		},
		addComment(event) {
			event.preventDefault();

			const formData = new FormData(event.target);
			const commentText = formData.get("commentText");

			const newComment = {
				comment: commentText,
				artwork: this.artwork.title
			};

			const currentComments = JSON.parse(localStorage.getItem("comments") || "[]");
			currentComments.push(newComment);
			localStorage.setItem("comments", JSON.stringify(currentComments));
		}
	}
}
</script>

<style scoped>
.row {
	background-color: #8688b0;
}

.row img {
	max-width: 100%;
	object-fit: contain;
}

#image-gallery {
	max-height: 600px;
	max-width: 600px;
}

.shrinked-element {
	min-width: 400px;
	max-width: 60%;
}
</style>