<template>
  <v-form class="pa-12" v-on:submit.prevent="addmovie">
    <v-container>
      <v-row justify="center">
        <v-col cols="7">
          <h1> Ajout d'un nouveau film </h1>
          <v-text-field v-model="title" placeholder="Titre du film" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="7">
          <v-text-field type="text" v-model="synopsys" placeholder="Synopsys" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="7">
          <v-text-field type="text" v-model="genre" placeholder="Genre" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-date-picker v-model="date"></v-date-picker>
      </v-row>
      <v-row justify="center">
        <v-col cols="7">
          <v-text-field v-model="image" placeholder="Image de couverture du film" />
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-5">
        <v-rating v-model="rating"></v-rating>
      </v-row>
      <v-row  justify="center" >
      <v-col cols="7">
        <h3> Ajout d'un realisateur </h3>
        </v-col>
        </v-row>
      <v-row justify="center" >
          <v-col cols="7">
            <v-text-field v-model="realisateur.firstname" placeholder="Prénom du réalisateur" />
            <v-text-field v-model="realisateur.lastname" placeholder="Nom du réalisateur" />
          </v-col>
      </v-row>
      <v-row justify="center">
          <v-date-picker v-model="realisateur.date"></v-date-picker>
      </v-row>
      <v-row  justify="center" class="mt-5">
        <v-btn class="blue white--text" @click="add">Add</v-btn>
      </v-row>
      
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      title: "",
      synopsys: "",
      image: "",
      genre: "",
      date: new Date().toISOString().substr(0, 10),
      rating : 0,
      realisateur: {
        firstname : "",
        lastname : "",
        birthday: new Date().toISOString().substr(0, 10)
      }
    };
  },
  methods: {
    ...mapActions([
      "addMovie", "refreshMovies"]),
    add() {
      this.addMovie({
        title: this.title,
        synopsys: this.synopsys,
        image: this.image,
        genre: this.genre,
        date: this.date,
        rating : this.rating,
        realisateur: this.realisateur
      });
      this.refreshMovies();
    }
  }
};
</script>

<style>
</style>