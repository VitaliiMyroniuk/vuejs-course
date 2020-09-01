<template>
  <footer class="relative-bottom row justify-content-md-center">
    <div class="footer col-md-8 justify-content-md-center">
      <div class="col col-md-auto text-center">
        <base-logo/>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseLogo from './BaseLogo.vue'

export default {
  name: 'Footer',
  components: {
    BaseLogo
  }
}
</script>

<style scoped>
.row {
  display: flex;
}

.footer {
  background-color: #555555;
  max-width: 1140px;
}

.footer .logo {
  height: 20px;
  margin: 20px;
}
</style>
