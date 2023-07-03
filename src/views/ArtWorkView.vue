<template>
	<div class="text-center p-1">
		<h1 class="display-5 font-weight-bold" id="artwork_title">{{artwork.title}}</h1>
	</div>
	
	<div class="container">
		<div class="row my-2 rounded p-4">
			<div class="col-md-4">
				<img class="mx-auto d-block rounded" :src="artwork.thumbnail" :alt="artwork.name">
			</div>
			
			<div class="col-md-8">
				<h4>О аутору {{ artist.name }}</h4>
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

	<div class="text-center p-1">
		<h1 class="display-6" id="artwork_title">Galerija</h1>
	</div>

	<div class="d-flex">
		<div id="carouselExampleRide" class="carousel slide ms-auto me-auto" data-bs-ride="true">
			<div class="carousel-inner">
				<div v-for="(art,index) in artwork.gallery" :key="art.id" :class="'carousel-item ' + (index==0? 'active':'')">
					<img :src="art.link" class="d-block w-100" alt="art.link">
				</div>
				
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
	
	<div class="text-center p-1">
		<h1 class="display-6 mt-3 mb-5" id="artwork_title">Prispele ponude:</h1>
	</div>

	<div class="d-flex">
		<table class="table table-dark ms-auto me-auto text-center">
			<thead>
				<tr>
				<th scope="col">Rb</th>
				<th scope="col">Korisnik</th>
				<th scope="col">Iznos</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(bid, index) in offersSortedByAmount" :key="bid.id">
				<th scope="row">{{ index + 1 }}</th>
				<td>{{ bid.bidder }}</td>
				<td>{{ bid.amount }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	
	<div class="text-center p-1">
		<h1 class="display-6 mt-3 mb-3" id="artwork_title">Postavite svoju ponudu:</h1>
	</div>

	<div class="d-flex justify-content-center">
		<div class="form-floating mb-3 me-3">
			<input type="text" class="form-control bg-secondary" id="floatingInput" placeholder="jeca123" v-model="username">
			<label for="floatingInput">Korisničko ime</label>
		</div>
		<div class="form-floating ms-3">
			<input type="text" class="form-control bg-secondary" id="floatingPassword" placeholder="17000" v-model="amount">
			<label for="floatingPassword">Iznos</label>
		</div>
	</div>

	<div class="d-flex justify-content-center">
		<button type="button" class="btn btn-secondary mb-3" @click="add_bid()">Postavi ponudu</button>
	</div>

	<div class="text-center p-1">
		<h1 class="display-6 mt-3 mb-3" id="artwork_title">Komentari:</h1>
	</div>

	<div class="d-flex">
		<table class="table table-dark ms-auto me-auto text-center">
			<thead>
				<tr>
				<th scope="col">Rb</th>
				<th scope="col">Korisnik</th>
				<th scope="col">Komentar</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(comment, index) in comments" :key="comment.id">
				<th scope="row">{{ index + 1 }}</th>
				<td>{{ comment.username }}</td>
				<td>{{ comment.comment }}</td>
				</tr>
			</tbody>
		</table>

	</div>

	<div class="d-flex justify-content-center">
		<div class="form-floating mb-3 me-3 flex-grow-2">
			<input type="text" class="form-control bg-secondary" id="floatingInput" placeholder="jeca123" v-model="username_comment">
			<label for="floatingInput">Korisničko ime</label>
		</div>
		<div class="form-floating ms-3">
			<input type="text" class="form-control bg-secondary" id="floatingPassword" placeholder="17000" v-model="new_comment">
			<label for="floatingPassword">Tekst komentara</label>
		</div>
	</div>
	<div class="d-flex justify-content-center">
		<button type="button" class="btn btn-secondary mb-3" @click="add_comment()">Dodaj komentar</button>
	</div>
	
	

</template>

<script>
import artworks from "../artworks.json";
import artists from "../artists.json";

export default {
	name: "ArtworkView",
	props: {
		artwork: Object
	},
	data(){
		return {
			artwork:"", artist:"", bids:"", username:"", amount:"",//bids ima polja: amount, bidder, id (zbog key)
			comments:[], username_comment:""
		}
	},
	created(){
		console.log()
		this.artwork = artworks.find(element => element.title == this.$route.params.name);
		this.artist = artists.find(element => element.artworks.find(art => art == this.$route.params.name));

		if(localStorage.getItem("bids_" + this.artwork.title)){
			this.bids = JSON.parse(localStorage.getItem("bids_" + this.artwork.title));
		}else{
			this.bids = [{
				id:1, bidder:"Petar_Petrovic", amount:15000
			}, {
				id:2, bidder:"Janko_Jankovic", amount:16000
			}];

			localStorage.setItem("bids_" + this.artwork.title + "_id", 3);
		}

		if(localStorage.getItem("comments_" + this.artwork.title)){
			this.bids = JSON.parse(localStorage.getItem("comments_" + this.artwork.title));
		}else{
			this.comments = [{
				id:1, username:"Petar_Petrovic", comment:"Veoma lepo delo."
			}, {
				id:2, username:"Janko_Jankovic", comment:"Savršeno."
			}];

			localStorage.setItem("comments_" + this.artwork.title + "_id", 3);
		}

	},
	computed :{
		offersSortedByAmount(){
			return this.bids.sort(cmpFunctionByAmount);
		}
	},
	methods:{
		add_bid(){
			if(!this.username || !this.amount)
				return;
			let next_id = localStorage.getItem("bids_" + this.artwork.title + "_id");
			localStorage.setItem("bids_" + this.artwork.title + "_id", parseInt(next_id) + 1);

			let new_offer = {id:next_id, bidder:this.username, amount:this.amount};
			this.bids.push(new_offer);
			localStorage.setItem("bids_" + this.artwork.title, JSON.stringify(this.bids));
		},
		add_comment(){
			if(!this.username_comment || !this.new_comment)
				return;
			let next_id = localStorage.getItem("comments_" + this.artwork.title + "_id");
			localStorage.setItem("comments_" + this.artwork.title + "_id", parseInt(next_id) + 1);

			let new_offer = {id:next_id, username:this.username_comment, comment:this.new_comment};
			this.comments.push(new_offer);
			localStorage.setItem("comments_" + this.artwork.title, JSON.stringify(this.comments));
		}
	}
}

function cmpFunctionByAmount(first, second){
	return first.amount <= second.amount ? 1 : -1;
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





#body{
	background-color: #8688b0;
}

#artwork_title{
	color:white
}

#carouselExampleRide{
	max-height: 500px;
	max-width: 500px;
}

.table{
	max-width: 70%;
}
#comment{
	max-width: 70%;
}
img{
	max-width: 500px;
	max-height: 500px;
}

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