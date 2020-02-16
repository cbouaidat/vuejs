<template>
  <div v-if="movie">
    <v-card class="mt-12 pl-10 pr-10 pt-5 pb-5 mx-auto" elevation="12" max-width="400">
      <div class="d-flex flex-direction-inline">
        <v-card-title class="headline mb-1 p-3">{{movie.title}}</v-card-title>
        <v-rating class="mx-auto" v-model="movie.rating"></v-rating>
      </div>
      <v-img height="50%" :src="movie.img" />
      <v-card-subtitle class="mx-auto">{{movie.date}}</v-card-subtitle>
      <v-card-subtitle class="mx-auto">{{movie.genre}}</v-card-subtitle>
      <v-card class="d-flex flex-direction-inline">
        <v-card-subtitle class="mx-auto">{{movie.realisateur.firstname}}</v-card-subtitle>
        <v-card-subtitle class="mx-auto">{{movie.realisateur.surname}}</v-card-subtitle>
        <v-card-subtitle class="mx-auto">{{movie.realisateur.birthday}}</v-card-subtitle>
      </v-card>
      <v-card-text class="mx-auto">{{movie.synopsys}}</v-card-text>
      <div class="text-center">
        <router-link :to="{ name: 'edit', params: { id : $route.params.id }}">
          <v-btn color="blue white--text">Modifier film</v-btn>
        </router-link>
        <v-btn  color="blue white--text" @click="del"> Supprimer film </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["deleteMovie", "refreshMovies"]),
    ...mapGetters(["getMovies"]),
    del() {
      this.deleteMovie(this.$route.params.id);
      this.$router.push({ name: "movie-view"});
    }
  },
  computed: {
    movie() {
      return this.getMovies()[this.$route.params.id];
    }
  },
};
</script>

<style>
</style>