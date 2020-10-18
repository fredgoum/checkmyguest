<template>
  <div class="text-center" style="background: #ffffff;">
    <!-- Data loading -->
    <div v-if="! dataIsReady">
      <v-progress-circular :size="80" :width="7" indeterminate color="#003a83" style="margin-top: 150px;">
      </v-progress-circular>
    </div>
    <div v-else>
      <!-- Room -->
      <div class="pa-0 mb-5" cols="12">
        <v-img :src="require('@/assets/images/room.jpg')"/>
        <div class="px-5" style="display: flex; justify-content: space-between; background: #2b2b2b; color: white;">
          <img class="my-2" src="@/assets/images/airbnb.png" alt="rbb logo" width="40">
          <div class="text-capitalize text-start mt-2" style="display: flex;">
            <div>
              <div style="margin-bottom: -5px;">{{ startDate.day }}.</div>
              <div>{{ startDate.month }}.</div>
            </div>
            <v-icon class="mt-3 mx-3" small color="#ffffff">fas fa-chevron-right</v-icon>
            <div>
              <div style="margin-bottom: -5px;">{{ endDate.day }}.</div>
              <div>{{ endDate.month }}.</div>
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
        <span class="hr my-3">
          <span class="mx-3">
            {{ room.nights }}
            <span v-if="room.nights == 0 || room.nights == 1">nuit</span>
            <span v-else>nuits</span>
          </span>
        </span>
        <div>
          <span>Réservation </span>
          <span class="text-uppercase">{{ room.reservationCode }}</span>
        </div>
        <span>{{ room.guestNb }} personnes</span>
      </div>

      <!-- Btn commencer -->
      <div class="mb-0" cols="12" style="background: #fef4ec; padding-top: 70px; padding-bottom: 120px;">
        <v-btn class="text-capitalize" rounded color="#003a83" style="color: white;"
               @click="goToContacts()">
          Commencer
        </v-btn>
        <div class="mt-5">
          <a class="subheading mx-3" target="_blank" style="color: #003a83;">
            Choisir une langue
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hr {
    align-items: center;
    display: flex;
  }
  .hr::before, .hr::after {
    border-top: 2px dashed grey;
    content: "";
    flex: 1;
  }
</style>

<script>
  import ApiSrv from '@/js/services/ApiSrv';
  import moment from 'moment';

  export default {
    name: 'HomeContent',
    
    data() {
      return {
        room: null,
        dataIsReady: false,
      };
    },
    computed: {
      startDate() {
        return this.getRoomDate(this.room.start);
      },
      endDate() {
        return this.getRoomDate(this.room.end);
      },
    },
    created() {
      /**
       * Get Room data from API datas
       */
      ApiSrv.getRoom().then((response) => {
        this.room = response;
        this.dataIsReady = true;
      }).catch((message) => {
        console.log(message);
      });
    },
    methods: {
      /**
       * Get room start and end date
       */
      getRoomDate(date) {
        const dateMoment = moment(date).locale('fr').format('ddd ll');
        const splitedMoment = dateMoment.split('.');
        const roomDate = { day: splitedMoment[0], month: splitedMoment[1] };
        return roomDate;
      },
      /**
       * Go to Contacts page
       */
      goToContacts() {
        this.$router.push({ path: '/contacts' });
      },
    },
  };
</script>
