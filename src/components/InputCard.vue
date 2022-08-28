<script setup>
import { inject, reactive } from 'vue';
import { REG_EXR } from '@/constants';

const form = inject('form');
const props = defineProps(['info']);
const cardNo = reactive(['', '', '', '']);

const inputNumber = function (ev, index) {
  const val = ev.target.value;
  if (!REG_EXR.NUMBER.test(ev.target.value) || val.length > 4) {
    ev.target.value = cardNo[index];
    return;
  }

  cardNo[index] = val;

  if (updateCardNumber() && val.length >= 4) {
    ev.target.nextElementSibling.focus();
  }
};

const updateCardNumber = () => {
  const cardNumber = cardNo.join('');

  if (cardNumber.length < 16) {
    return true;
  } else {
    form.value[props.info.model] = cardNumber;
    return false;
  }
};
</script>
<template>
  <div class="input-card">
    <label for="">{{ props.info.label }}</label>
    <div class="input-wrap input-card__number">
      <input
        type="number"
        v-for="(value, i) in cardNo"
        :value="value"
        @input="inputNumber($event, i)"
      />
      <slot />
    </div>
  </div>
</template>
