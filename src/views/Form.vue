<template>
  <b-container fluid  class="form">
    <h1>This is an form page</h1>
    <TextC :object-properties="textProperties" />
    <TextAreaC :object-properties="textAreaProperties" />
    <b-row>
      <b-col>
        <ButtonC :object-properties="btnProperties" @onClickButton="onSubmitForm" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TextC from '@/components/forms/TextC.vue';
import TextAreaC from '@/components/forms/TextAreaC.vue';
import ButtonC from '@/components/forms/ButtonC.vue';

export default {
  name: 'Form',
  components: {
    TextC,
    TextAreaC,
    ButtonC,
  },
  data() {
    return {
      textProperties: {
        label: 'User name',
        keyName: 'user-name',
        value: null,
        labelCol: 5,
        fieldCol: 7,
        placeholder: 'Input Username',
        minMax: [8, 32],
        required: true,
        email: false,
        alpha_dash: false,
        alpha: false,
        alpha_num: false,
        max: 4,
        min: 2,
      },
      textAreaProperties: {
        label: 'Description',
        keyName: 'description-box',
        value: null,
        labelCol: 5,
        fieldCol: 7,
        placeholder: 'Input Description',
        minMax: [8, 32],
        required: true,
        email: false,
        alpha_dash: false,
        alpha: false,
        alpha_num: false,
        max: 4,
        min: 2,
      },
      btnProperties: {
        text: 'Submit form',
        variant: 'primary',
        size: '',
      },
    };
  },
  created() {
  },
  methods: {
    onSubmitForm() {
      const params = {
        username: this.textProperties.value,
        des: this.textAreaProperties.value,
      };

      console.log('hehehe', params);
      console.log('hehehe', this.errors);
    },
  },
};
</script>

<style lang="scss" scope="scoped">
</style>
