<template>
    <ul>
        <Artwork v-for="artwork in categoryArtworks" :key="artwork.title" :artwork="artwork" />
    </ul>
</template>

<script>
import artworks from "../artworks.json";
import Artwork from "../components/Artwork.vue";

export default {
    name: "Artworks",
    components: {
        Artwork
    },
    computed: {
        allArtworks() {
            return artworks;
        },
        categoryArtworks() {
            return artworks.filter(artwork => artwork.category === this.$route.params.category);
        },
    }
}
</script>