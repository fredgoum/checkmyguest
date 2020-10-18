<template>
  <div style="display: flex;">
    <!-- Navigation -->
    <navigation></navigation>
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
