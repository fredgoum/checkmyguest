<template>
  <div class="text-center">
    <!-- Room -->
    <div class="pa-0 mb-5" cols="12">
      <v-img :src="require('../assets/room-img.jpg')"/>
      <!-- <img src="@/assets/room-img.jpg" alt="checkmyguest logo"> -->
      <div class="px-5" style="display: flex; justify-content: space-between; background: #000000; color: white;">
        <img class="my-2" src="@/assets/logo.png" alt="rbb logo" width="40">
        <div style="display: flex;">
          <div>
            <div>Sam.</div>
            <div>11 Jan.</div>
          </div>
          <span> > </span>
          <div>
            <div>Dim.</div>
            <div>12 Jan.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Room Details -->
    <div class="mb-2" cols="12">
      <div>
        6 rue de vannes <br> 75008 Paris
      </div>
      <div class="my-3">
        ----------- 1 nuit --------------
      </div>
      <div>
        Réservation HJKDLSDFJSLJFDKLD
      </div>
      <span>2 personnes</span>
    </div>

    <!-- Btn commencer -->
    <div class="mb-0" cols="12" style="background: yellow; padding-top: 70px; padding-bottom: 120px;">
      <v-btn class="text-capitalize" rounded color="primary" style="">
        Commencer
      </v-btn>
      <div class="mt-5">
        <a class="subheading mx-3" target="_blank">
          Choisir une langue
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeContent',
  }
</script>
