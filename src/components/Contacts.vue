<template>
  <div>
    <!-- Navigation -->
    <navigation></navigation>GG
    <v-progress-linear style="margin-top:25px; position: absolute" height="5" value="70" color="#0169aa"></v-progress-linear>

    <div class="mx-10" style="margin-top: 40px;">
      <!-- Email -->
      <v-text-field label="Email"></v-text-field>
      <!-- Phone -->
      <div class="mt-5" style="display: flex;">
        <!-- <v-select :items="items" label="Outlined style" outlined></v-select> -->
        <v-select label="+33" outlined style="width: 100px;"></v-select>
        <v-text-field class="ml-2" label="Téléphone"></v-text-field>
      </div>
    </div>
    <div class="py-10" style="background: yellow;">
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
          <v-btn class="text-capitalize" large rounded color="primary" style="width: 150px;"
               @click="ValidateForm()">
            Valider
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';

  export default {
    name: "Contacts",

    components: {
      Navigation,
    },
    methods: {
      ValidateForm() {
        console.log('validate form');
      },
    },
  };
</script>
