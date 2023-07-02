<template>
	<nav class="navbar navbar-expand-lg navbar-light" id="header">
		<div class="container-fluid">
			<router-link class="navbar-brand" :to="{ name: 'index' }">
				<img src="icon.png" height="30" class="d-inline-block align-text-top">
				{{ $t("title") }}
			</router-link>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapsable">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarCollapsable">
				<ul class="navbar-nav me-auto">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
							Уметнине
						</a>

						<ul class="dropdown-menu" >
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artworks', params: { category: 'paintings'} }">
									Слике
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artworks', params: { category: 'sculptures'} }">
									Скулптуре
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artworks', params: { category: 'other'} }">
									Остале уметнине
								</router-link>
							</li>
						</ul>
					</li>

					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
							Уметници
						</a>

						<ul class="dropdown-menu" >
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artists', params: { category: 'human'} }">
									Људи
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artists', params: { category: 'animal'} }">
									Животиње
								</router-link>
							</li>
						</ul>
					</li>

					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'profile' }">Мој профил</router-link>
					</li>

					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'about' }">О нама</router-link>
					</li>
				</ul>

				<form class="d-flex mx-lg-0 mx-4" role="search" @submit="search">
					<div class="input-group">
						<input type="search" class="form-control" placeholder="Претрага" name="searchText" required>
						<button class="btn btn-light" type="submit">Претражи</button>
					</div>
				</form>
			</div>
		</div>
	</nav>
</template>

<style>
	#header{
		background-color: #8688b0;
	}
</style>

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
