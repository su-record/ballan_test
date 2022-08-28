<script setup>
import { computed, provide, reactive, ref } from 'vue';
import InputContainer from '@/components/InputContainer.vue';
import useSignUpPanel from '@/composables/useSignUpPanel';
import useValidator from '@/composables/useValidator';
import { useDisabled } from '@/composables/useDisabled';

const step = ref(0);
const panel = computed(() => useSignUpPanel(step.value));
const formData = reactive({
  email: '',
  password: '',
  pwRetry: '',
  name: '',
  cellular: '',
  address: '',
  cardNo: '',
});

provide(
  'form',
  computed(() => formData),
);

const validation = computed(() => useValidator(formData));
const isNext = computed(() => {
  switch (step.value) {
    case 0:
      return useDisabled(
        validation.value.email,
        validation.value.password,
        validation.value.pwRetry,
      );
    case 1:
      return useDisabled(
        validation.value.name,
        validation.value.cellular,
        validation.value.address,
      );
    case 2:
      return useDisabled(validation.value.cardNo);
  }
});
</script>

<template>
  <section class="sign-up-container">
    <InputContainer :list="panel" :validation="validation" />
    <div class="sign-buttons" :class="{ multiple: step === 1 }">
      <button v-if="step === 1" @click="step = step - 1">이전</button>
      <button v-if="step !== 2" @click="step = step + 1" :disabled="!isNext">다음</button>
      <button v-else>완료</button>
    </div>
  </section>
</template>
