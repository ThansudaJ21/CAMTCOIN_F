<template>
  <!-- <label v-if="label">Input amount coins</label> -->
  <input
    class="field"
    :placeholder="label"
    :value="modelValue"
    @input="inputHandler($event)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    inputHandler(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.field {
  width: 200px;
}
</style>