<template>
  <div class="text-center">
    <!-- Data loading -->
    <div v-if="! dataIsReady">
      <v-progress-circular :size="80" :width="7" indeterminate color="#0169aa" style="margin-top: 150px;">
      </v-progress-circular>
    </div>
    <!-- Display content -->
    <div v-else>
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
          <div>{{ room.address }}</div>
          <div>
            <span>{{ room.zipCode }} </span>
            <span>{{ room.city }}</span>
          </div>
        </div>
        <div class="my-3">
          <span>-------------</span>
          <span> {{ room.nights }} nuit</span>
          <span>-------------</span>
        </div>
        <div>
          <span>Réservation</span>
          <span class="text-uppercase">{{ room.reservationCode }}</span>
        </div>
        <span>{{ room.guestNb }} personnes</span>
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
  </div>
</template>

<script>
  import ApiSrv from '@/js/services/ApiSrv';

  export default {
    name: 'HomeContent',
    
    data() {
      return {
        room: null,
        dataIsReady: false,
      };
    },
    created() {
      /**
       * Get Room data from API datas
       */
      const id = 20;
      const url = 'https://api.cmg.ovh:3000/testtech/alfred/';
      const apiUrl = `${url}${id}!`
      ApiSrv.getRoom(apiUrl).then((response) => {
        this.room = response;
        this.dataIsReady = true;
      }).catch((message) => {
        console.log(message);
      });
    }
  };
</script>
