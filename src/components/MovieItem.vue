<template>
  <div>
    <figure>
      <lazy-image @click="onClick" :alt="movie.title" :src="movie.poster_path"/>
      <figcaption>
        <div class="row">
          <div class="col-sm-9">
            <h4 class="text-secondary font-weight-light">{{ movie.title }}</h4>
            <p class="text-secondary font-weight-light">{{ movie.tagline }}</p>
          </div>
          <div class="col-sm-3 float-right">
            <base-button @click="onClick" class="btn-sm btn-outline-secondary float-right">
              {{ movie.release_date }}
            </base-button>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'MovieItem',
  components: {
    BaseButton
  },
  props: {
    movie: Object
  },
  methods: {
    onClick () {
      this.$store.commit('RESET_STATE')
      this.$router.push('/movie/' + this.movie.id)
    }
  }
}
</script>

<style scoped>
figure {
  width: 354px;
  height: 100%;
  margin: 0 2px 5px;
  padding: 15px 15px 10px;
  transition: opacity .4s ease-in-out;
  display: inline-block;
}

figure img {
  width: 324px;
  height: auto;
  padding-bottom: 15px;
  margin-bottom: 5px;
  cursor: pointer;
}

figure figcaption {
  font-size: .9rem;
  color: #444;
  line-height: 1.5;
}
</style>
