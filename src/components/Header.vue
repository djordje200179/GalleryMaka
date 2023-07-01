<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand" :to="{ name: 'index' }">
				<img src="icon.png" height="30" class="d-inline-block align-text-top">
				{{ $t("title") }}
			</router-link>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapsable">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarCollapsable">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'artworks' }">
							<button class="btn btn-outline-secondary me-1" type="button">Уметнине</button>
						</router-link>
					</li>
					<li class="nav-item dropdown">
						<router-link class="nav-link" :to="{ name: 'artists' }">
							<button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Уметници
							</button>
							<ul class="dropdown-menu" >
								<li><router-link class="dropdown-item" :to="{ name: 'profile' }">Сви</router-link></li>
								<li><router-link class="dropdown-item" :to="{ name: 'profile' }">Људи</router-link></li>
								<li><router-link class="dropdown-item" :to="{ name: 'profile' }">Животиње</router-link></li>
							</ul>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'profile' }">
							<button class="btn btn-outline-secondary me-1" type="button">Мој профил</button>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'about' }">
							<button class="btn btn-outline-secondary me-1" type="button">О нама</button>
						</router-link>
					</li>
				</ul>

				<form class="d-flex" role="search" @submit="search">
					<input class="form-control me-2" type="search" placeholder="Претрага" name="searchText" required>
					<button class="btn btn-outline-success" type="submit">Претражи</button>
				</form>

				<div class="btn-group ps-1">
					<button class="btn btn-outline-success active m-0">
						<img src="flag-serbia.png" height="20px" class="my-auto rounded">
					</button>
					<button class="btn btn-outline-success">
						<img src="flag-uk.png" height="20px" class="my-auto rounded">
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	methods: {
		search(event) {
			event.preventDefault();

			const formData = new FormData(event.target);
			const searchText = formData.get("searchText");
			
			this.$router.push({ name: "search", params: { query: searchText } });
		}
	}
}
</script>

<style scoped>

</style>
