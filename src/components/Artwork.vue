<template>
    <li>
        {{ artwork.title }}
    </li>
</template>

<script>
export default {
    name: "Artwork",
    props: {
        artwork: Object
    }
}
</script>