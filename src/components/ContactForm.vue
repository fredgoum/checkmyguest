<template>
  <div style="display: flex;">
    <!-- Navigation -->
    <navigation></navigation>
    <!-- <v-progress-linear style="margin-top:25px; position: absolute" height="5" value="70" color="#0169aa">
    </v-progress-linear> -->
    <!-- Contact Form Content -->
    <contact-form-content></contact-form-content>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import ContactFormContent from '@/components/ContactFormContent';

  export default {
    name: "ContactForm",

    components: {
      Navigation,
      ContactFormContent
    },
  };
</script>
