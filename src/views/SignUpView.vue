<script setup>
import { computed, provide, reactive, ref } from 'vue';
import InputContainer from '@/components/InputContainer.vue';
import useSignUpPanel from '@/composables/useSignUpPanel';
import useValidator from '@/composables/useValidator';
import { useDisabled } from '@/composables/useDisabled';

const step = ref(2);
const panel = computed(() => useSignUpPanel(step.value));
const formData = reactive({
  email: '',
  password: '',
  pwRetry: '',
  name: '',
  cellular: '',
  address: {
    road: '',
    detail: '',
  },
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

const addressClose = function () {
  document.querySelector('#addressWrap').style.display = 'none';
};
</script>

<template>
  <section class="sign-up-container">
    <InputContainer :list="panel" :validation="validation" />
    <div class="sign-buttons" :class="{ multiple: step === 1 }">
      <button v-if="step === 1" @click="step = step - 1">이전</button>
      <button v-if="step !== 2" @click="step = step + 1" :disabled="!isNext">다음</button>
      <button v-else :disabled="!isNext">완료</button>
    </div>
    <div id="addressWrap">
      <img
        src="//t1.daumcdn.net/postcode/resource/images/close.png"
        id="btnFoldWrap"
        style="cursor: pointer; position: absolute; right: 0px; top: -1px; z-index: 1"
        alt="접기 버튼"
        @click="addressClose"
      />
    </div>
  </section>
</template>
