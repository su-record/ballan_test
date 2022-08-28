<script setup>
const props = defineProps(['list', 'validation']);
</script>
<template>
  <div class="input-container">
    <component
      v-for="input in props.list"
      :is="input.component"
      :info="input"
      :isValid="validation[input.model]"
    />
  </div>
</template>
