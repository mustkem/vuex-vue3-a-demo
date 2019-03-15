const state = {
    funds: 10000, 
    stocks : [{
        id: 4,
        quantity: 15,
        name: "test",
        price: 562
    }]
}

const mutations = {
     'BUY_STOCKS'(state, {stockId, quantity, stockPrice}){
         const record = state.stocks.find(element=>element.id==stockId); // check if the stock with this id already exists// if so
                                                                         // add quantity else add this stock to stocks as new stock
         if(record){
             record.quantity += quantity 
         } else {
             state.stocks.push({
                 id: stockId,
                 quantity: quantity
             })
         }
         state.funds -= stockPrice * quantity; 
     },
     'SELL_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element=>element.id==stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity; 
     }
        
}
const actions = {
    sellStock({commit}, order){
        commit('SELL_STOCK', order);
    }
}

const getters = {
    stockPortfolio (state, getters, rootState, rootGetters){
        return state.stocks.map(stock=>{
             const record = rootGetters['stocks/stocks'].find(element => element.id == stock.id);
            return{
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state){
        return state.funds
    }
}

export default {
    namespaced: true,
    state, 
    mutations,
    actions,
    getters 
}