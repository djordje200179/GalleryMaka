<template>
  <div class="row mb-3">
    <!-- <div class="card mb-3" style="max-width: 540px;"> -->
  <!-- <div class="row g-0"> -->
    <div class=" card col-md-4">
      <img :src="artist.thumbnail" class="img-fluid rounded-start mt-3 mb-1" alt="...">
    </div>
    <div class="col-md-8 ">
      <div class="card-body">
        <h5 class="card-title">{{ artist.name }}</h5>
        <p class="card-text">{{artist.biography}}</p>
        <div class="card-footer">
          <a class="card-text" href="#">Pregled dela</a>
        </div>
        
      </div>
    </div>
  </div>
<!-- </div> -->
  <!-- </div> -->
  
      
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
.card > img {
	height: 200px;
	object-fit: scale-down;
  object-position: 50% 50%;
}
</style>