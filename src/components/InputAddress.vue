<script setup>
import { ref } from 'vue';

const props = defineProps(['info']);
const addressWrap = document.querySelector('.sign-up-container');
const roadAddress = ref('');
const getAddress = function () {
  new window.daum.Postcode({
    oncomplete: data => {
      const { roadAddress, buildingName, apartment } = data;
      console.log('#### data');
    },
  }).embed(addressWrap);
};
</script>

<template>
  <div class="input-address">
    <label>{{ props.info.label }}</label>
    <input type="text" v-model="roadAddress" />
    <input type="text" />
    <button @click="getAddress">우편번호</button>
  </div>
</template>
