<template>
    <div class="portfolio">
        <app-stock :key="stock.id" v-for="stock in stocks" :stock="stock"></app-stock>

    </div>
</template>

<script>

import {mapGetters} from 'Vuex';
import Stock from './Stock.vue'

export default {
        components:{
            appStock: Stock
        },
        computed: {
            ...mapGetters({
            stocks: 'portfolio/stockPortfolio',
            }),
        }
}
</script>

<style>

</style>


