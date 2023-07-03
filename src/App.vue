<template>
	<Header />
	
	<main class="px-1" id="main">
		<router-view :key="$route.fullPath"/>
	</main>

	<Footer />
</template>

<style>
	#main{
		background-color: #272947;
		min-height: 100vh;
	}
</style>

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

</style>
