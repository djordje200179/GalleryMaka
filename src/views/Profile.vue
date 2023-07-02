<template>
    <div class="d-flex ms-auto justify-content-center pt-1">
        <form>
        <div class="">
            <label for="email" class="form-label label">Korisničko ime</label>
            <input type="email" class="form-control" id="email" aria-describedby="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label label">Lozinka</label>
            <input type="password" class="form-control" id="password">
        </div>
        <button class="btn btn-light mb-3">Prijavi se</button>
    </form>
    </div>
    
</template>

<style>
    .label{
        color: white;
    }
</style>

<script>
export default {
    name: 'Profile',
    components: {
  
    }
}
</script>