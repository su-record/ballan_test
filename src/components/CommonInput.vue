<script setup>
const props = defineProps(['modelValue', 'type']);
const emits = defineEmits(['update:modelValue']);

const valueEmit = (function () {
  let inDebounce = null;

  return function (ev) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      emits('update:modelValue', ev.target.value);
    }, 700);
  };
})();
</script>

<template>
  <input :type="props.type" :value="modelValue" @input="valueEmit" />
</template>
