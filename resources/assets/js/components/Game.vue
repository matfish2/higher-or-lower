<template>
  <div class="game">
      <Card :card="card"></Card>
      <Guess v-if="status==='playing'"></Guess>
  </div>
</template>

<script>

import Card from './Card';
import Guess from './Guess';

export default {
    components:{
        Card,
        Guess
    },
    computed:{
        status() {
            return this.$store.state.status;
        },
        card() {
            return this.$store.state.cards[this.currentIndex];
        },
        currentIndex() {
            return this.$store.state.index;            
        }
    }
}
</script>

<style>
    .game {
        color:white;
    }
</style>

