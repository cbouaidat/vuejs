<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        :to="{name: 'movie-view'}"
        text
      >
        <span class="mr-2">Liste des films</span>
      </v-btn>
      
      <v-btn
        :to="{name: 'add'}"
        text
      >
        <span class="mr-2">Ajouter un film</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      interval: null,
    }
  },
  methods : {
    ...mapActions(["refreshMovies"])
  },
  created() {
    this.interval = setInterval(() => {
      this.refreshMovies();
    }, 3000); 
  },
  destroyed() {
    if(this.interval != null) {
      clearInterval(this.interval);
    }
  }
};
</script>