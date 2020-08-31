<template>
  <button type="button" class="btn" @click="onClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
