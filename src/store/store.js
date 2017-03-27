import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  // defaultList:[]
};

const mutations = {
  ADD_ITEM(state,item){
    state.defaultList.push(item)
  }
};

export default new Vuex.Store({
  state,
  mutations
})
