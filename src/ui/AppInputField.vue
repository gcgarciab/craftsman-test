<template>
  <div class="input-block" :class="{ 'no-margin': noMargin }">
    <label v-if="label" class="block text-gray-700 mb-1">{{ label }}</label>

    <div v-if="type !== 'textarea'" class="input">
      <fa v-if="icon" class="input-icon" :icon="icon" />

      <input
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        :class="{ 'with-icon': icon }"
        data-test="input-field"
        @input="updateValue($event)"
        @blur="$emit('checkErrors')"
      />

      <span v-if="extra" class="extra ml-2">{{ extra }}</span>

      <button
        v-if="type === 'password'"
        type="button"
        class="absolute right-3 top-2 text-gray-500 text-lg"
        @click="switchVisibility()"
      >
        <fa :icon="showPassword ? 'eye-slash' : 'eye'" />
      </button>
    </div>

    <div v-else class="input">
      <textarea
        rows="4"
        :value="modelValue"
        :placeholder="placeholder"
        @input="updateValue($event)"
        @blur="$emit('checkErrors')"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue', 'checkErrors']);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  extra: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  noMargin: {
    type: Boolean,
    required: false,
  },
});

const inputType = ref(props.type);
const showPassword = ref(false);

/**
 * Receives input event and emit its value to parent.
 * @event => Input file event
 */
function updateValue(event: Event): void {
  const { value } = event.target as HTMLInputElement;
  const newValue = props.type === 'number' ? +value : value;

  emit('update:modelValue', newValue);
}

/**
 * Change input type to allow to see its value.
 */
function switchVisibility(): void {
  showPassword.value = !showPassword.value;
  inputType.value = showPassword.value ? 'text' : 'password';
}
</script>

<style scoped>
.input-block {
  @apply w-full text-left mb-6 mr-3;
}

.input-block:last-of-type {
  @apply mr-0;
}

textarea {
  @apply resize-none;
}

input,
textarea {
  @apply block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2;
}

input:focus,
textarea:focus {
  @apply border-gray-300 ring ring-gray-200 ring-opacity-50;
}

.input {
  @apply relative flex items-center;
}

.input:last-of-type,
.input:last-of-type .extra {
  @apply mr-0;
}

.input-icon {
  @apply absolute left-3 top-3 text-gray-500 text-lg;
}

.with-icon {
  @apply pl-10;
}

.has-errors label {
  @apply text-red-500;
}

.has-errors input,
.has-errors textarea {
  @apply border-red-500;
}

.has-errors input:focus,
.has-errors textarea:focus {
  @apply ring-red-100;
}

.no-margin {
  @apply m-0;
}
</style>
