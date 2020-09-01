<template>
  <div class="app-body">
    <div class="row">
      <div class="col">
        <base-logo class="logo"/>
      </div>
    </div>
    <div class="row">
      <div class="col text-center no-found">
        <h1 class="text-light font-weight-light">
          404 Not Found
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLogo from '../components/BaseLogo.vue'

export default {
  name: 'ErrorPage',
  components: {
    BaseLogo
  }
}
</script>

<style scoped>
.app-body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  display: block;
}

.no-found {
  padding: 20px;
  margin: 150px 0;
}

.logo {
  height: 25px;
  margin: 20px;
}
</style>
