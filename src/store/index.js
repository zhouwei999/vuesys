import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token:'1'
    },
    mutations: {
        loginSuccess(){
            //
            state.token = '2'
        }
    }
})

export default store
