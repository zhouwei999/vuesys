import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token:''
    },
    mutations: {
        loginSuccess(){
            //
            state.token = '2'
        }
    }
})

export default store
