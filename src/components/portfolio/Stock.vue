<template>
<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="panel-box">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{stock.name}}
            <small>
              (
              price: {{stock.price}} | Quantity: {{ stock.quantity }}
              
              )
            </small>
          </h3>
        </div>
        <div class="panel-body clearfix">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantities" v-model="quantity">
          </div>
          <div class="pull-right">
            <button :disabled="quantity<=0" @click="sellStockHandler" class="btn btn-success">Sell</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods:{
      ...mapActions({
          placeSellsOrder : "portfolio/sellStock"
      }),
      sellStockHandler(){
          const order = {
              stockId: this.stock.id,
              stockPrice:this.stock.price,
              quantity:this.quantity
          }
          this.placeSellsOrder(order);
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
