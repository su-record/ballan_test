<script setup>
import { inject } from 'vue';
import CommonInput from './CommonInput.vue';

const props = defineProps(['info', 'isValid']);
const form = inject('form');
</script>
<template>
  <div class="input-item">
    <label>{{ props.info.label }}</label>
    <div class="input-wrap">
      <CommonInput v-model="form[props.info.model]" :type="props.info.type" />
      <span v-if="form[props.info.model] && !props.isValid" class="validation-message">
        다시 입력해주세요.
      </span>
    </div>
  </div>
</template>
