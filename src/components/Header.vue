<template>
<div class="header-container">
    <div class="navbar-header text-center">
        <router-link to='/' class="navbar-brand">Stock Trader</router-link>
    </div>


  <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
    <ul class="nav navbar-nav left">
        <router-link to='/portfolio' activeClass="active" tag='li'>
            <a>Portfolio</a>
        </router-link>
         <router-link to='/stocks' activeClass="active" tag='li'>
            <a>Stocks</a>
        </router-link>
    </ul>
    <ul class="nav navbar-nav navbar-right right">
        <li><a href="#">End Day</a></li>
        <li class="dropdown">
            <a 
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expendec="false"
            >
            Save and load <span class="caret"></span>
            </a>
            <ul class="dropdwn">
                <li>
                    <a href="#" @click="saveData">Save Data</a>
                    <a href="#" @click="loadDataHandler">Load Data</a>
                </li>
            </ul>
        </li>

    </ul>
   
  </div>
</div>
 
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import axios from 'axios';

export default {
    methods:{
        ...mapGetters({
            stockPortfolio: 'portfolio/stockPortfolio',
            stocks: 'stocks/stocks'
        }),
        ...mapActions({
            loadData:'stocks/loadData'
        }),
        saveData(){
            const dataPortfolio = {
                 funds:5000,
                 stockPortfolio:this.stockPortfolio(),
                 stocks: this.stocks()
            }
            axios.put(
                'https://vuejs-stock-trader-vuex.firebaseio.com/data.json',
                dataPortfolio
            );
        },
        loadDataHandler(){
            this.loadData()
        }
    }
}
</script>


<style scoped>
.header-container{
    margin-bottom: 30px;
}
.dropdwn{
    margin-top: 20px;;
}
.navbar-header{
    background: #ececec;
    margin-bottom: 20px;
}

ul {
    flex-direction: row;
}
ul li {
    margin: 5px;
}

ul li a{
    padding: 5px;
    background:#6dc1ff;
    color:black;
}
#navbarSupportedContent{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

</style>
