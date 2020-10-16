<template>
  <div>
    <!-- Navigation -->
    <navigation></navigation>GG
    <v-progress-linear style="margin-top:25px; position: absolute" height="5" value="70" color="#0169aa"></v-progress-linear>

    <div class="mx-10" style="margin-top: 40px;">
      <!-- Email -->
      <v-text-field v-model="email" label="Email"></v-text-field>
      <!-- Phone -->
      <div class="mt-5" style="display: flex;">
        <!-- <v-select :items="items" label="Outlined style" outlined></v-select> -->
        <v-select label="+33" outlined style="width: 100px;"></v-select>
        <v-text-field v-model="phone" class="ml-2" type="number" label="Téléphone"></v-text-field>
      </div>
    </div>
    <div class="py-10" style="background: #fef4ec;">
      <div class="mx-10">
        <p style="font-size: 10px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <!-- Btn validate -->
        <div class="text-center mt-10" style="margin-bottom: 100px;">
          <v-btn class="text-capitalize" large rounded color="#003a83" style="width: 150px; color: white;"
               @click="ValidateForm()">
            Valider
          </v-btn>
        </div>
      </div>
    </div>

    <saving-bar :snackbar="snackbar"></saving-bar>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import SavingBar from '@/components/Reusables/SavingBar';


  export default {
    name: "Contacts",

    components: {
      Navigation,
      SavingBar
    },

    data() {
      return {
        email: '',
        phone: null,
        snackbar: { value: false },
      };
    },
    methods: {
      ValidateForm() {
        // console.log('validate form');
        // console.log(this.email);
        // console.log(this.phone);
        this.snackbar.value = true;
      },
    },
  };
</script>
