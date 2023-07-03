<template>
	<Header />

	<main class="px-1 flex-grow-1">
		<router-view :key="$route.fullPath" />
	</main>

	<Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: 'App',
	components: {
		Footer,
		Header,
	}
}
</script>

<style scoped>
main {
	background-color: #272947;
}
</style>