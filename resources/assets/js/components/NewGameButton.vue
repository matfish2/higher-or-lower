<template>
    <button class="btn btn-primary btn-xl start-game" @click="startGame">Start New Game</button>
</template>

<script>
export default {
    methods:{
        startGame() {
            this.$store.commit('START_GAME');
        }
    }
}
</script>

<style>
    .start-game {
        margin:10px auto;
        width:200px;
    }
</style>

