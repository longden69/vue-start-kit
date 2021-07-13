<template>
  <b-button
    :variant="objectProperties.variant"
    :size="objectProperties.size"
    :disabled="objectProperties.disabled"
    @click="onClickButton">{{ objectProperties.text }}</b-button>
</template>

<script>
export default {
  name: 'ButtonC',
  components: {
  },
  props: {
    objectProperties: {
      type: Object,
      default: () => ({
        text: null,
        variant: 'primary',
        size: '',
        disabled: false,
      }),
    },
  },
  computed: {
  },
  created() {
  },
  methods: {
    onClickButton() {
      this.$emit('onClickButton');
    },
  },
};
</script>

<style lang="scss" scope="scoped">
</style>
