<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel-box">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{stock.name}}
            <small>
              (
              price: {{stock.price}}
              
              )
            </small>
          </h3>
        </div>
        <div class="panel-body clearfix">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantities" v-model="quantity">
          </div>
          <div class="pull-right">
            <button :disabled="quantity<=0" @click="buyStockHandler" class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';


export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods:{
     ...mapActions({
        buyStock: 'stocks/buyStock',
      }),
      buyStockHandler(){
          const order = {
              stockId:this.stock.id,
              stockPrice:this.stock.price,
              name:this.stock.name,
              quantity:this.quantity
            }
            // this.$store.dispatch('buyStock', order); // another way to call action // namespaced : false ;
            this.buyStock(order); // this action is in stocks.js  module // 
            this.quantity=0;
        }
       
    }
};
</script>

<style scoped>
.clearfix:after {
   content: " "; /* Older browser do not support empty content */
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
}
.panel-heading {
  background-color: #e5f6ff;
  padding: 10px;
  /* border:1px solid #c1c1c1;
    border-bottom: 0px ; */
}
.pull-left {
  width: 60%;
  float: left;
}
.pull-right {
  float: right;
}
.panel-box {
  border: 1px solid #d6d6d6;
  margin-bottom: 20px;;
}
.panel-body{
    padding:10px;
}

</style>
