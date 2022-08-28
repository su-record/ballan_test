<script setup>
import { inject } from 'vue';
import CommonInput from './CommonInput.vue';

const form = inject('form');
const props = defineProps(['info', 'isValid']);
</script>
<template>
  <div class="input-item">
    <label>{{ props.info.label }}</label>
    <div class="input-wrap">
      <CommonInput v-model="form[props.info.model]" :type="props.info.type" />
      <slot />
    </div>
  </div>
</template>
