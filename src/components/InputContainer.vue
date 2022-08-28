<script setup>
const props = defineProps(['list']);
</script>
<template>
  <div class="input-container">
    <component v-for="input in props.list" :is="input.component" :info="input" />
  </div>
</template>
