<template>
  <div>
    <v-row align="center" justify="center">
      <v-form ref="search">
       <v-text-field v-model="search" label="Recherche" placeholder="ex: Titanic">></v-text-field>
      </v-form>
    </v-row>
    <v-row align="center" justify="center">
      <v-card v-if="getMovies">
        <v-list-item v-for="(movie, index) in moviesearch" v-bind:key="index" v-bind:movie="movie">
          <v-list-item-content>
          <v-list-item-subtitle>
            <router-link :to="{ name: 'movie', params: { id : index }}">
            {{ movie.title }} 
            </router-link>
          </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
      movies: ""
    };
  },
  methods: {
    ...mapActions(["deleteMovie", "refreshMovies"]),
    remove: function(index) {
      this.deleteMovie(index);
      this.refreshMovies();
    },
  },
  computed: {
    ...mapGetters(["getMovies"]),
    moviesearch() {
      return this.getMovies.filter(movie => {
        return (
          movie.title.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.synopsys.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.realisateur.firstname
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          movie.realisateur.lastname
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          movie.date.toString().includes(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>