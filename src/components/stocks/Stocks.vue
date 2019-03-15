<template>
    <div class="row">
        <app-stock v-bind:key="stock.id" v-for="stock in stocks" :stock="stock" ></app-stock>
    </div>
</template>

<script>


    import {mapActions, mapGetters} from 'vuex';
    import Stock from './Stock.vue';


export default {
    data(){
        return{
            
        }
    },
    components: {
        appStock : Stock
    },
    computed: {
        ...mapGetters({ // mapGetters is vuex function which call the getter function. And this getter function return the data needed.
        stocks: 'stocks/stocks',
        }),
    },
    // computed:{ // this ia another way to call getters - if namespaced is false use this way or use the above one
    //     stocks(){
    //         return this.$store.getters.stocks;  
    //     }
    // }
}
</script>

