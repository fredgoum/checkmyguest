<template>
  <div>
    <v-app-bar v-if="homePage" app flat height="54" style="border-bottom: 4px solid #0169aa !important;">
      <img class="mx-auto my-2" src="@/assets/logo.png" alt="checkmyguest logo" width="40">
    </v-app-bar>
    <v-app-bar v-else app flat height="50">
      <div @click="goToHome()">Prev</div>
      <div style="margin-left: 100px; margin-right: 100px;">Contacts</div>
      <div>FR</div>
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
      goToHome() {
        this.$router.push({ path: '/' });
      },
    },
  }
</script>
