<template>
	<nav class="navbar navbar-expand-lg">
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
							{{ $t("artworksView") }}
						</a>

						<ul class="dropdown-menu">
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artworks', params: { category: 'paintings' } }">
									{{  $t("paintings") }}
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artworks', params: { category: 'sculptures' } }">
									{{ $t("sculptures") }}
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artworks', params: { category: 'other' } }">
									{{ $t("otherArtworks") }}
								</router-link>
							</li>
						</ul>
					</li>

					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
							{{ $t("artistsView") }}
						</a>

						<ul class="dropdown-menu">
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artists', params: { category: 'human' } }">
									{{ $t("humans") }}
								</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" :to="{ name: 'artists', params: { category: 'animal' } }">
									{{ $t("animals") }}
								</router-link>
							</li>
						</ul>
					</li>

					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'profile' }">
							{{ $t("profileView") }}
						</router-link>
					</li>

					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'about' }">
							{{ $t("aboutView") }}
						</router-link>
					</li>
				</ul>

				<form class="d-flex mx-lg-0 mx-4" role="search" @submit="search">
					<div class="input-group">
						<input type="search" class="form-control" :placeholder="$t('searchArtworks')" 
							   name="searchText" required>
						<button class="btn btn-light" type="submit">
							{{ $t("search") }}
						</button>
					</div>
				</form>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Header",
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
nav {
	background-color: #8688b0;
}
</style>