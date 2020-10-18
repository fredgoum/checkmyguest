<template>
  <div>
    <div class="mx-10" style="margin-top: 60px;">
      <!-- Email -->
      <v-text-field v-model="email" label="Email"></v-text-field>
      <!-- Phone -->
      <div style="margin-bottom: 60px;">
        <v-text-field v-model="phone" label="Téléphone" type="number" hide-details>
          <template v-slot:prepend>
            <vue-tel-input @country-changed="countrySelected" style="width: 108px; height: 40px;">
              <template v-slot:arrow-icon>
                <span>+{{countryCode}}</span>
                <v-icon class="ml-2 mr-8" x-small>fas fa-chevron-down</v-icon>
              </template>
            </vue-tel-input>
          </template>
        </v-text-field>
      </div>
    </div>

    <div class="pt-10" style="background: #fef4ec; height: 100%; ">
      <div class="mx-10">
        <p style="font-size: 10px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <!-- Btn validate -->
        <div class="text-center" style="margin-top: 120px;">
          <v-btn class="text-capitalize" large rounded color="#003a83" style="width: 150px; color: white;"
               @click="ValidateForm()">
            Valider
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Validation message -->
    <saving-bar :snackbar="snackbar"></saving-bar>
  </div>
</template>

<style>
  .v-input__control {
    margin-top: 8px;
  }
</style>

<script>
  import ApiSrv from '@/js/services/ApiSrv';
  import SavingBar from '@/components/Reusables/SavingBar';

  export default {
    name: "ContactFormContent",

    components: {
      SavingBar,
    },

    data() {
      return {
        email: '',
        phone: null,
        countryCode: null,
        snackbar: { value: false },
      };
    },
    methods: {
      countrySelected(val) {
        this.countryCode = val.dialCode;
      },
      ValidateForm() {
        const user = {};
        user.email = this.email;
        user.phone = `+${this.countryCode}${this.phone}`;
        // roomData.user = user;
        this.$store.state.room.user = user;
        // console.log(this.$store.state.room);
        // console.log(roomData);

        // Call api to add user to room data
        ApiSrv.updateRoom(this.$store.state.room).then((response) => {
          console.log('rr');
          console.log(response);
          // if (response.ok) {
          //   this.snackbar.value = true;
          // }
        }).catch((message) => {
          console.log(message);
        });
      },
    },
  };
</script>
