<template>
  <div class="row ">
    <!-- <div class="card mb-3" style="max-width: 540px;"> -->
  <!-- <div class="row g-0"> -->
    <div class=" card col-md-4 art">
      <img :src="artist.thumbnail" class="img-fluid rounded-start mt-3 mb-1" alt="...">
    </div>
    <div class="col-md-8 card art">
      <div class="card-body art">
        <h5 class="card-title">{{ artist.name }}</h5>
        <p class="card-text">{{artist.biography}}</p>
        <div class="card-footer d-flex">
          <button type="button" class="btn btn-light ms-auto">Pregled dela</button>
        </div>
        
      </div>
    </div>
  </div>
<!-- </div> -->
  <!-- </div> -->
  
      
</template>

<style>
  .art{
    background-color: #8688b0;
  }
</style>


<script>
export default {
	name: "Artist",
	props: {
		artist: Object
	}
}
</script>

<style scoped>
.card > img {
	height: 200px;
	object-fit: scale-down;
  object-position: 50% 50%;
}
</style>