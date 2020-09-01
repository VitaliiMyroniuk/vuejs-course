<template>
  <div class="btn-group" role="group">
    <base-button class="text-uppercase" :class="isFirstButtonSelected ? 'btn-danger' : 'btn-secondary'"
                 @click="firstButtonClick">
      {{ firstButtonName }}
    </base-button>
    <base-button class="text-uppercase" :class="isFirstButtonSelected ? 'btn-secondary' : 'btn-danger'"
                 @click="secondButtonClick">
      {{ secondButtonName }}
    </base-button>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'ButtonGroup',
  components: {
    BaseButton
  },
  data: () => {
    return {
      isFirstButtonSelected: true
    }
  },
  props: {
    firstButtonName: String,
    secondButtonName: String
  },
  methods: {
    firstButtonClick () {
      this.isFirstButtonSelected = true
      this.$emit('firstButtonClick')
    },
    secondButtonClick () {
      this.isFirstButtonSelected = false
      this.$emit('secondButtonClick')
    }
  }
}
</script>

<style scoped>
.btn-secondary {
  background-color: rgba(35, 35, 35, 0.9);
  border-color: #232323;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
