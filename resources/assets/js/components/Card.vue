}<template>
    <div class="Card" :style="{color}">
        <h4 class="Card__value" :class="`Card__suit--${this.card.suit}`">
            {{card.value}}
        </h4>
    </div>
</template>


<script>
export default {
    props:{
        card:{
            type:Object,
            required:true
        }
    },
    computed:{
        color() {
            return ['spades','clubs'].includes(this.card.suit)?'black':'red';
        },
        cardClasses() {
            return `Card--${this.color}`;
        }
    }
}
</script>

<style lang="scss">
    .Card {

        width:150px;
        height:250px;
        border-radius: 10px;
        background: white;
        display: flex;
        align-items:center;
        justify-content: center;
        position: relative;

       
        &__value {
            &:before {
                position: absolute;
                top:0;
                left:7px;
            }

             &:after {
                position: absolute;
                bottom:0;
                right:7px;
            }

            font-size:50px;
        }

    }

      .Card__suit--spades {
            &:before, &:after {
            content: "♣";
            }
        }
        
        .Card__suit--hearts {
            &:before, &:after {
            content: "♥";
            }
        }

        
        .Card__suit--clubs {
            &:before, &:after {
            content: "♠";
            }
        }

        .Card__suit--diamonds {
            &:before, &:after {
            content: "♦";
            }
        }
</style>
