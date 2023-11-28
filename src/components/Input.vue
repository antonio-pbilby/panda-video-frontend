<script setup lang="ts">
import { InputHTMLAttributes } from 'vue';

interface InputProps {
  value: string;
  label: string;
  name: string;
  type: InputHTMLAttributes['type'];
  placeholder?: string;
  required?: boolean;
}

const props = defineProps<InputProps>();
defineEmits(['update:value']);
</script>
<template>
  <div>
    <label :for="props.name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ props.label }}</label>
    <input :type="props.type" :name="props.name" :id="props.name" :value="props.value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="props.placeholder" :required="props.required">
  </div>
</template>