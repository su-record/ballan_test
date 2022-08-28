<script setup>
import InputContainer from '@/components/InputContainer.vue';
import { useSignUpPanel } from '@/composables/useSignUpPanel';
import { computed, ref } from 'vue';

const step = ref(0);
const panel = computed(() => useSignUpPanel(step.value));
</script>

<template>
  <section class="sign-up-container">
    <InputContainer :list="panel" />
    <div class="sign-buttons" :class="{ multiple: step === 1 }">
      <button v-if="step === 1" @click="step = step - 1">이전</button>
      <button v-if="step !== 2" @click="step = step + 1">다음</button>
      <button v-else>완료</button>
    </div>
  </section>
</template>
