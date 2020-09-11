<template>
  <header class="search-panel">
    <div class="search-panel_blur">
      <div class="row">
        <div class="col">
          <base-logo/>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col col-lg-10">
          <h2 class="text-light font-weight-light text-uppercase">Find Your Own Movie</h2>
        </div>
      </div>
      <search-bar/>
      <search-options/>
    </div>
  </header>
</template>

<script>
import BaseLogo from './BaseLogo.vue'
import SearchBar from './SearchBar.vue'
import SearchOptions from './SearchOptions.vue'

export default {
  name: 'SearchPanel',
  components: {
    BaseLogo,
    SearchBar,
    SearchOptions
  }
}
</script>

<style scoped>
.search-panel {
  background-image: url("../assets/background.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.search-panel_blur {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  margin: 0 -15px;
}

@media (min-width: 576px) {
  .search-panel {
    max-width: 540px
  }
}

@media (min-width: 768px) {
  .search-panel {
    max-width: 720px
  }
}

@media (min-width: 992px) {
  .search-panel {
    max-width: 960px
  }
}

@media (min-width: 1200px) {
  .search-panel {
    max-width: 1140px
  }
}

.filter-header .col {
  margin: 15px;
}

.row {
  padding-bottom: 30px;
}

.row .logo {
  height: 25px;
  margin: 20px;
}
</style>
