<template>
  <div>
    <!-- Navigation -->
    <navigation></navigation>
    <!-- Home Content -->
    <home-content></home-content>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import HomeContent from '@/components/HomeContent'

  export default {
    name: 'Home',

    components: {
      Navigation,
      HomeContent
    },
  }
</script>
