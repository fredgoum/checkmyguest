<template>
  <div>
    <div class="mx-10" style="margin-top: 60px;">
      <!-- Email -->
      <v-text-field v-model="email" label="Email"></v-text-field>
      <!-- Phone -->
      <div style="margin-bottom: 60px;">
        <v-text-field v-model="phone" label="Téléphone" hide-details>
          <template v-slot:prepend>
            <vue-tel-input  @country-changed="countrySelected" style="width: 100px; height: 45px;">
              <template v-slot:arrow-icon>
                <strong>+{{countryCode}}</strong>
                <div class="ml-2">down</div>
              </template>
            </vue-tel-input>
          </template>
        </v-text-field>
      </div>
    </div>
    <div class="py-10" style="background: #fef4ec; height: 100%;">
      <div class="mx-10">
        <p style="font-size: 10px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <!-- Btn validate -->
        <div class="text-center mt-10">
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
    margin-top: 15px;
  }
</style>

<script>
  import SavingBar from '@/components/Reusables/SavingBar';

  export default {
    name: "ContactFormContent",

    components: {
      SavingBar
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
        // console.log('validate form');
        // console.log(this.email);
        // console.log(this.phone);
        this.snackbar.value = true;
      },
    },
  };
</script>
