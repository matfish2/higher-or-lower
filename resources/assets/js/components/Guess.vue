<template>
    <div class="Guess">
        <button class="btn btn-success" @click="bid(1)">Higher</button>
        <button class="btn btn-danger" @click="bid(-1)">Lower</button>
    </div>
</template>

<script>
export default {
    methods:{
        bid(dir) {
            this.$store.commit('GUESS', dir)
        }
    }
}
</script>

<style lang="scss">
    .Guess {
        margin-top:10px;
        display: flex;
        button {
            flex:1;
        }
    }
</style>
