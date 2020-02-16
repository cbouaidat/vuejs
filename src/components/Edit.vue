<template>
  <v-form class="pa-12" v-on:submit.prevent="addmovie">
    <v-container>
      <v-row justify="center">
        <v-col cols="7">
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
      <v-row justify="center">
        <v-col cols="7">
          <v-text-field v-model="realisateur.firstname" placeholder="Prénom du réalisateur" />
          <v-text-field v-model="realisateur.surname" placeholder="Nom du réalisateur" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-date-picker v-model="realisateur.date"></v-date-picker>
      </v-row>
      <v-row justify="center" class="mt-5">
        <v-btn class="blue white--text" @click="modify">Modifier</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      synopsys: "",
      image: "",
      genre: "",
      date: new Date().toISOString().substr(0, 10),
      rating: 0,
      realisateur: {
        firstname: "",
        surname: "",
        birthday: new Date().toISOString().substr(0, 10)
      }
    };
  },
  methods: {
    ...mapActions(["modifyMovie", "refreshMovies"]),
    modify() {
      this.modifyMovie({
        index: this.$route.params.id,
        movie: {
          title: this.title,
          synopsys: this.synopsys,
          image: this.image,
          genre: this.genre,
          date: this.date,
          rating: this.rating,
          realisateur: this.realisateur
        }
      });
      this.refreshMovies();
    },
    refresh(movie) {
      if(movie == undefined) {return;}
      this.title = movie.title;
      this.synopsys = movie.synopsys;
      this.image = movie.image;
      this.genre = movie.genre;
      this.date = movie.date;
      this.rating = movie.rating;
      this.realisateur = movie.realisateur;
    } 
  },
  computed: {
    ...mapGetters({
      movies: "getMovies"
    })
  },
  watch: {
    movies(movies) {
      this.refresh(movies[this.$route.params.id]);
    }
  },
  created() {
    this.refresh(this.movies[this.$route.params.id]);

    
  }
};
</script>