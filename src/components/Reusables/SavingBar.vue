<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar.value" rounded="pill">
      <span>Les données sont bien enregistrées</span>

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs"
               @click="snackbar.value = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    name: "SavingBar",
    
    props: {
      snackbar: { type: Object, default: null },
    }
  };
</script>
