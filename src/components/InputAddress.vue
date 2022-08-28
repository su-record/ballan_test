<script setup>
import { inject } from 'vue';

const form = inject('form');
const props = defineProps(['info']);
const getAddress = function (address) {
  const addressWrap = document.querySelector('#addressWrap');

  new window.daum.Postcode({
    oncomplete: data => {
      if (data.userSelectedType === 'R') {
        // 사용자가 도로명 주소를 선택했을 경우
        address.road = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        address.road = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          address.road = address.road += ` (${data.buildingName})`;
        }
      }

      addressWrap.style.display = 'none';
    },
    width: '100%',
    height: '100%',
  }).embed(addressWrap);
  addressWrap.style.display = 'block';
};
</script>

<template>
  <div class="input-address">
    <label>{{ props.info.label }}</label>
    <input type="text" :value="form.address.road" />
    <input type="text" v-model="form.address.detail" />
    <button @click="getAddress(form.address)">우편번호</button>
  </div>
</template>
