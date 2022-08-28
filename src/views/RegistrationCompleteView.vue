<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAccountStore } from '@/stores/account';

const account = useAccountStore();
const complete = computed(() => account.complete);
</script>

<template>
  <section class="sign-up-complete">
    <h2>
      '{{ complete.name }}'님 <br />
      회원가입되었습니다.
    </h2>

    <dl>
      <dt>이메일</dt>
      <dd>{{ complete.email }}</dd>
      <dt>주소</dt>
      <dd>{{ complete.address }}</dd>
      <dt>연락처</dt>
      <dd>{{ complete.cellular }}</dd>
    </dl>
  </section>
</template>
