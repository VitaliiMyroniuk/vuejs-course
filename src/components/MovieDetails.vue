<template>
  <header class="movie-header">
    <div class="movie-header_blur">
      <div class="row">
        <div class="col">
          <base-logo/>
        </div>
        <div class="col">
          <i @click="onClick" class="fa fa-flip-horizontal fa-search"/>
        </div>
      </div>
      <div class="row">
        <div class="col col-md-4 text-center">
          <img class="movie-img" :src="movie.poster_path">
        </div>
        <div class="col col-md-7">
          <div class="row">
            <div class="col">
              <h1 class="text-light font-weight-light text-uppercase">
                {{ movie.title }} &nbsp;&nbsp;
                <span class="badge badge-pill badge-outline-info align-middle font-weight-light">
                {{ movie.vote_average }}
              </span>
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="text-light text-secondary font-weight-light">{{ movie.tagline }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col col-md-3">
              <h4 class="text-danger font-weight-light">{{ movie.release_date }}</h4>
            </div>
            <div class="col col-md-3">
              <h4 class="text-danger font-weight-light">{{ movie.runtime }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="text-light text-secondary">{{ movie.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import BaseLogo from './BaseLogo.vue'

export default {
  name: 'MovieDetails',
  components: {
    BaseLogo
  },
  props: {
    movie: Object
  },
  methods: {
    onClick () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.movie-header {
  background-image: url("../assets/background.png");
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: #000;
}

.movie-header_blur {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  margin: 0 -15px;
}

@media (min-width: 576px) {
  .movie-header {
    max-width: 540px
  }
}

@media (min-width: 768px) {
  .movie-header {
    max-width: 720px
  }
}

@media (min-width: 992px) {
  .movie-header {
    max-width: 960px
  }
}

@media (min-width: 1200px) {
  .movie-header {
    max-width: 1140px
  }
}

.movie-header .logo {
  height: 25px;
  margin: 20px;
}

.movie-header .movie-img {
  width: 324px;
  height: auto;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

.badge {
  line-height: 1.5;
  padding: 0.5rem;
  font-weight: normal;
  min-width: 65px;
}

.badge.badge-pill {
  border-radius: 50%;
}

.badge-outline-info {
  color: #a1e66f;
  border: 1px solid #555555;
}

.fa-search {
  position: relative;
  float: right;
  font-size: 24px;
  color: red;
  margin: 20px;
  cursor: pointer;
}
</style>
