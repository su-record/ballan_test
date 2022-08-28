<script setup>
import { debounce } from '@/utils';

const props = defineProps(['modelValue', 'type']);
const emits = defineEmits(['update:modelValue']);
const valueEmit = debounce(ev => {
  emits('update:modelValue', ev.target.value);
});
</script>

<template>
  <input :type="props.type" :value="modelValue" @input="valueEmit" />
</template>
