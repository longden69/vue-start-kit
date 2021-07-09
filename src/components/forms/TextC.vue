<template>
  <b-row class="text-cmp">
      <b-col :sm="objectProperties.labelCol">
        <label :for="`id-${objectProperties.keyName}`">{{ objectProperties.label }}</label>
      </b-col>
      <b-col :sm="objectProperties.fieldCol">
        <ValidationProvider rules="required" v-slot="errors">
          <b-form-input
            :id="`id-${objectProperties.keyName}`"
            type="text" v-model="objectProperties.value"></b-form-input>
          <p class="text-danger msg-error">{{ errors.errors[0] }}</p>
        </ValidationProvider>
      </b-col>
    </b-row>
</template>

<script>
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required!',
});

export default {
  name: 'TextC',
  components: {
  },
  props: {
    objectProperties: {
      type: Object,
      default: () => ({
        label: {
          type: String,
          default: null,
        },
        keyName: {
          type: String,
          default: null,
        },
        value: {
          type: String,
          default: null,
        },
      }),
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scope="scoped">
</style>
