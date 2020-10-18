<template>
  <div>
    <!-- Home Navigation -->
    <v-app-bar id="home-nav" v-if="homePage" app flat height="54" style="background: #ffffff; border-bottom: 4px solid #d4d1cc !important;">
      <img class="mx-auto my-2" src="@/assets/images/favicon.svg" alt="checkmyguest logo" width="40">
    </v-app-bar>
    <!-- Contacts Navigation -->
    <v-app-bar id="contact-nav" v-else app flat height="54" style="background: #ffffff;">
      <div style="font-size: 5px; cursor: pointer;" @click="goToHome()">
        <v-icon class="fas fa-arrow-left"></v-icon>
      </div>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <div class="mt-3">Contats</div>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <div class="mt-3 mr-1">
          FR
          <i class="fas fa-chevron-down"></i>
      </div>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<style>
  #contact-nav::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 65%;
    border-bottom: 4px solid #003a83 !important;
  }
</style>

<script>
  export default {
    name: 'Navigation',

    computed: {
      homePage() {
        return this.$route.path == "/" ? true : false;
      }
    },
    methods: {
      /**
       * Go to home page
       */
      goToHome() {
        this.$router.push({ path: '/' });
      },
    },
  }
</script>
