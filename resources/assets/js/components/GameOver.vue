<template>
    <div class="GameOver">
        <h4>Game Over!</h4>
        <p>You correctly guessed {{correctGuesses}} times</p>
    </div>
</template>


<script>
export default {
    computed:{
        correctGuesses() {
            return this.$store.state.correctGuesses;
        }
    }
}
</script>

<style>
    .GameOver {
        margin:0 10px;
        background:orange;
        padding:20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

