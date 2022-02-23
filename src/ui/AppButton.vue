<template>
  <button
    class="text-white"
    :data-test="`${testName ? testName : 'button'}`"
    :class="[
      { 'mt-8': marginTop },
      [text ? 'px-10' : 'px-2'],
      [icon ? 'flex items-center justify-center' : 'inline'],
      color,
    ]"
    :disabled="disabled"
    :type="type"
    :title="focusText"
  >
    <fa
      v-if="icon"
      class="icon text-sm"
      :icon="icon"
      :class="{ 'mr-2': text }"
    />
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import ButtonType from '@/enums/button-type';
import ButtonColor from '@/enums/button-color';

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: ButtonType.BUTTON,
  },
  color: {
    type: String,
    default: ButtonColor.DEFAULT,
  },
  text: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  marginTop: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  focusText: {
    type: String,
    required: false,
  },
  testName: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
button {
  @apply rounded-md py-2 mx-1 font-semibold shadow-sm transition duration-200;
}

button:focus {
  @apply ring ring-opacity-50;
}

button:disabled {
  @apply cursor-not-allowed opacity-60;
}

.default {
  @apply bg-gray-500 text-white border border-gray-500;
}

.default:focus {
  @apply ring-gray-300;
}

.default:hover {
  @apply bg-gray-600;
}

.simple {
  @apply p-0 bg-transparent border-none text-gray-600;
}

.primary {
  @apply bg-blue-500 border border-blue-500;
}

.primary:focus {
  @apply ring-blue-300;
}

.primary:hover {
  @apply bg-blue-600;
}

.success {
  @apply bg-green-500 border border-green-500;
}

.success:focus {
  @apply ring-green-300;
}

.success:hover {
  @apply bg-green-600;
}

.danger {
  @apply bg-red-500 border border-red-500;
}

.danger:focus {
  @apply ring-red-300;
}

.danger:hover {
  @apply bg-red-600;
}

button svg.icon {
  @apply w-4;
}
</style>
