<template>
  <div>
    <!-- Home Navigation -->
    <v-app-bar v-if="homePage" app flat height="50" style="background: #ffffff; border-bottom: 4px solid #d4d1cc !important;">
      <img class="mx-auto my-2" src="@/assets/logo-checkmyguest.png" alt="checkmyguest logo" width="40">
    </v-app-bar>
    <!-- Contacts Navigation -->
    <v-app-bar v-else app flat height="50" style="background: #ffffff; border-bottom: 4px solid #003a83 !important;">
      <img src="@/assets/logo-checkmyguest.png" alt="logo app" style="height: 36px;"
           @click="goToHome()">
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <div class="mt-2">Contats</div>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <div class="mt-2 mr-8">FR</div>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',

    computed: {
      homePage() {
        return this.$route.path == "/" ? true : false;
      }
    },
    methods: {
      // Go to home page
      goToHome() {
        this.$router.push({ path: '/' });
      },
    },
  }
</script>
