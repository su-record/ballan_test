<script setup>
const props = defineProps(['info']);
</script>
<template>
  <div class="input-item">
    <label for="">{{ props.info.label }}</label>
    <input type="text" />
  </div>
</template>
