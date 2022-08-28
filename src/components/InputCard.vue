<script setup>
const props = defineProps(['info']);
</script>
<template>
  <div class="input-card">
    <label for="">{{ info.label }}</label>
    <div class="input-wrap input-card__number">
      <input type="number" maxlength="4" />
      <input type="number" maxlength="4" />
      <input type="number" maxlength="4" />
      <input type="number" maxlength="4" />
    </div>
  </div>
</template>
