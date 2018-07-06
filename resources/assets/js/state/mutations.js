import isCorrectGuess from './logic/is-correct-guess';
import cards from './cards';

export default {
    ['START_GAME'](state) {
        state.cards = cards();
        state.correctGuesses = 0;
        state.index = 0;
        state.status = 'playing';
    },
    ['GUESS'](state, dir) {

        var prevValue = state.cards[state.index].value;

        state.index++;

        var currentValue = state.cards[state.index].value;
        
        if (isCorrectGuess(prevValue, currentValue, dir)) {
            state.correctGuesses++;
        } else {
            state.status = 'game-over';            
        }
    }
}