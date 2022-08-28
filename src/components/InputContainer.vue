<script setup>
import { inject } from 'vue';

const form = inject('form');
const props = defineProps(['list', 'validation']);
</script>
<template>
  <div class="input-container">
    <component v-for="input in props.list" :is="input.component" :info="input">
      <span
        v-if="form[input.model] && !validation[input.model]"
        class="validation-message"
      >
        다시 입력해주세요.
      </span>
    </component>
  </div>
</template>
