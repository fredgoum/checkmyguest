<template>
  <div>
    <div class="mx-10" style="margin-top: 85px;">
      <!-- Email -->
      <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="Email"></v-text-field>
      <!-- Phone -->
      <div id="phone-container">
        <v-text-field v-model="phone" :rules="[rules.required]" label="Téléphone" type="number" hide-details>
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

    <div id="lorem-ipsum-container">
      <div class="mx-10">
        <p id="lorem-ipsum" align="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <!-- Btn validate -->
        <div class="text-center" style="margin-top: 60px;">
          <v-btn id="btn-validate" class="text-capitalize" large rounded color="#003a83"
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
  #phone-container {
    margin-bottom: 60px;
  }
  .v-input__control {
    margin-top: 8px;
  }
  #btn-validate {
    width: 150px;
    color: white;
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
        user: {},
        countryCode: null,
        snackbar: { value: false },
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      };
    },
    methods: {
      /**
       * Get the code of selected country
       * @param {Object} val courtry code value
       */
      countrySelected(val) {
        this.countryCode = val.dialCode;
      },
      /**
       * Validate the contact form
       */
      ValidateForm() {
        this.user.mail = this.email;
        this.user.phone = `+${this.countryCode}${this.phone}`;

        // Call api to send user data
        ApiSrv.updateRoom(this.user).then((response) => {
          if (response.ok) {
            this.snackbar.value = true;
          }
        }).catch((message) => {
          console.log(message);
        });
      },
    },
  };
</script>
