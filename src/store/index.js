import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies : [],
  },
  mutations: {
    ADD_MOVIES : (state, movies) => {
      state.movies = movies;
    }
  },
  actions: {
    refreshMovies(context) {
      Vue.axios
      .get("http://localhost:3000/api/movies/all")
      .then(result => {
        context.commit("ADD_MOVIES", result.data);
      });
    },
    addMovie(_, movie) {
      Vue.axios({
        method: 'post',
        url : "http://localhost:3000/api/movies",
        data : movie
      });
    },
    modifyMovie(_, {index , movie}) {
      Vue.axios({
        method: 'post',
        url : "http://localhost:3000/api/movies/" + index,
        data : movie
      });
    },
    deleteMovie(_, index) {
      Vue.axios.delete("http://localhost:3000/api/movies/" + index);
    }
  },
  getters : {
    getMovies(state) {
      return state.movies;
    }
  },
  modules: {
  }
})
