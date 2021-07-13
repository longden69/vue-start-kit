<template>
  <b-row class="text-cmp">
    <b-col :sm="objectProperties.labelCol">
      <label :for="`id-${objectProperties.keyName}`">{{ objectProperties.label }}</label>
    </b-col>
    <b-col :sm="objectProperties.fieldCol">
      <ValidationProvider :rules="rulesValidation" v-slot="errors">
        <b-form-textarea
          :id="`id-${objectProperties.keyName}`"
          :placeholder="objectProperties.placeholder"
          v-model="objectProperties.value">{{objectProperties.value}}</b-form-textarea>
        <p class="text-danger msg-error">{{ errors.errors[0] }}</p>
      </ValidationProvider>
    </b-col>
  </b-row>
</template>

<script>
import { extend } from 'vee-validate';
import {
  required,
  email,
  length,
  alpha,
  digits,
  max,
  min,
  alpha_dash as alphaDash,
  alpha_num as alphaNum,
} from 'vee-validate/dist/rules';

export default {
  name: 'TextAreaC',
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
        placeholder: {
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
        required: {
          type: Boolean,
          default: () => false,
        },
        email: {
          type: Boolean,
          default: () => false,
        },
        alpha_dash: {
          type: Boolean,
          default: () => false,
        },
        alpha_num: {
          type: Boolean,
          default: () => false,
        },
        alpha: {
          type: Boolean,
          default: () => false,
        },
        digits: {
          type: [Number, Boolean],
          default: () => false,
        },
        length: {
          type: [Number, Boolean],
          default: () => false,
        },
        max: {
          type: [Number, Boolean],
          default: () => false,
        },
        min: {
          type: [Number, Boolean],
          default: () => false,
        },
      }),
    },
  },
  data() {
    return {
    };
  },
  computed: {
    rulesValidation() {
      const rulesArr = [];
      if (this.objectProperties.required) {
        rulesArr.push('required');
      }
      if (this.objectProperties.email) {
        rulesArr.push('email');
      }

      if (this.objectProperties.alpha_dash) {
        rulesArr.push('alpha_dash');
      }

      if (this.objectProperties.alpha_num) {
        rulesArr.push('alpha_num');
      }

      if (this.objectProperties.alpha) {
        rulesArr.push('alpha');
      }

      if (this.objectProperties.digits) {
        rulesArr.push(`digits:${this.objectProperties.digits}`);
      }

      if (this.objectProperties.length) {
        rulesArr.push(`length:${this.objectProperties.length}`);
      }

      if (this.objectProperties.max) {
        rulesArr.push(`max:${this.objectProperties.max}`);
      }

      if (this.objectProperties.min) {
        rulesArr.push(`min:${this.objectProperties.min}`);
      }

      return rulesArr.join('|');
    },
  },
  created() {
    setTimeout(() => {
      console.log(this.rulesValidation);
    }, 3000);
    // My custom validation
    // More rules here: https://vee-validate.logaretm.com/v3/guide/rules.html#rules
    extend('required', {
      ...required,
      message: this.$t('validation.required', { fieldName: this.objectProperties.label }),
    });
    extend('email', {
      ...email,
      message: this.$t('validation.email', { fieldName: this.objectProperties.label }),
    });

    extend('length', {
      ...length,
      message: this.$t('validation.length', { fieldName: this.objectProperties.label, length: this.objectProperties.length }),
    });

    extend('alpha_dash', {
      ...alphaDash,
      message: this.$t('validation.alpha_dash', { fieldName: this.objectProperties.label }),
    });

    extend('alpha_num', {
      ...alphaNum,
      message: this.$t('validation.alpha_num', { fieldName: this.objectProperties.label }),
    });

    extend('digits', {
      ...digits,
      message: this.$t('validation.digits', { fieldName: this.objectProperties.label, length: this.objectProperties.digits }),
    });

    extend('max', {
      ...max,
      message: this.$t('validation.max', { fieldName: this.objectProperties.label, max: this.objectProperties.max }),
    });

    extend('min', {
      ...min,
      message: this.$t('validation.min', { fieldName: this.objectProperties.label, min: this.objectProperties.min }),
    });

    extend('alpha', {
      ...alpha,
      message: this.$t('validation.alpha', { fieldName: this.objectProperties.label }),
    });
  },
};
</script>

<style lang="scss" scope="scoped">
</style>
