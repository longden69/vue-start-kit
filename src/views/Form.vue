<template>
  <b-container fluid  class="form">
    <h1>This is an form page</h1>
    <TextC :object-properties="textProperties" />
  </b-container>
</template>

<script>
// @ is an alias to /src
import TextC from '@/components/forms/TextC.vue';

export default {
  name: 'Form',
  components: {
    TextC,
  },
  data() {
    return {
      textProperties: {
        label: 'User name',
        keyName: 'user-name',
        value: null,
        labelCol: 5,
        fieldCol: 7,
        placeHolder: 'Input Username',
        minMax: [8, 32],
      },
    };
  },
};
</script>

<style lang="scss" scope="scoped">
</style>
