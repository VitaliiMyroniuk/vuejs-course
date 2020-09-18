<template>
  <img @click="onClick" :alt="alt" :src="imageSrc">
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    alt: String,
    src: String
  },
  data: () => {
    return {
      observer: null,
      isIntersected: false
    }
  },
  computed: {
    imageSrc () {
      return this.isIntersected ? this.src : ''
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.isIntersected = true
        this.observer.disconnect()
      }
    })
    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  }
}
</script>
