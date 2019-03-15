import stocks from '../../data/stocks';
import * as remoteActions from '../actions';



const state= {
    stocks:[]
}

const mutations = {
    'SET_STOCKS' (state, stocks) {
        console.log("added")
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
    }
}

const actions = {
    ...remoteActions,
    buyStock: ({commit}, order) => {
        commit('portfolio/BUY_STOCKS', order,{ root: true }) // called a mutation from another module // passeeed some data //
    }, 
    initStocks: ({commit}) =>{ /// called in app.vue //
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({commit}) =>{
        commit('RND_STOCKS');
    }
} 

const getters = { // called in stocks.vue file to show all available stocks // stocks.vue
    stocks: state=>{
        return state.stocks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}