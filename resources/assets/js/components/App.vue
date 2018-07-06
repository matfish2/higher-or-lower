<template>
<div class="App">
    <NewGameButton v-if="status!=='playing'"></NewGameButton>
    <div class="game-wrapper">
    <Game v-if="status!='pending'"></Game>
    <GameOver v-if="status==='game-over'"></GameOver>    
    </div>
</div>
</template>

<script>

import NewGameButton from './NewGameButton';
import Game from './Game';
import GameOver from './GameOver';


export default {
    components:{
        NewGameButton,
        Game,
        GameOver
    },
    computed:{
        status() {
            return this.$store.state.status;
        }
    }
    
}
</script>

<style lang="scss">
.App {
    display: flex;
    flex-direction: column;

    .game-wrapper {
        display:flex;
        flex-direction:row;
    }
}
</style>

