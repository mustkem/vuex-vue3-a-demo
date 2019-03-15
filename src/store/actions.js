import axios from 'axios';

export const loadData = ({commit}) => {
    // Make a request for a user with a given ID
        axios.get('https://vuejs-stock-trader-vuex.firebaseio.com/data.json')
            .then(function (response) {
                if (response.data.stocks){
                    const stocks = response.data.stocks;
                    commit('stocks/SET_STOCKS', stocks, { root: true })
                }
        })
} 