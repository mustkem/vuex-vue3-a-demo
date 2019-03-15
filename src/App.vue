<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div class="row">
        <div class="col-xs-12">
          <transition name="slide" mode="out-in">
          <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    appHeader: Header
  },
  // computed: {
  //   ...mapGetters({
  //     stocks: 'stocks/stocks',
  //   }),
  // },
  methods: {
    ...mapActions({
      initStocks: 'stocks/initStocks',
    }),
  },
  created(){
     //this.$store.dispatch('initStocks');

    this.initStocks();
  }
};
</script>

<style>
.slide-enter-active{
  animation: slide-in 200ms ease-out forward;
}
.slide-leave-active{
  animation: slide-out 200ms ease-out forward;
}
@keyframes slide-in{
  from {
    transform: translateY(-30px);
    opacity:0;
  }
  to {
    transform: translateY(0px);
    opacity:1;
  }
}

@keyframes slide-out{
  from{
    transform: translateY(0);
    opacity:1
  } to{
     transform: translateY(-30);
    opacity:0
  }
}


.col-xs-12{
  width:100%;
}
</style>
