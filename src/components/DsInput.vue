<template>
  <label class="ds-input" :class="[`ds-input--${state}`]" :for="id">
    <span class="ds-input__label">{{ label }}</span>
    <input
      :id="id"
      :placeholder="placeholder"
      class="ds-input__field"
      type="text"
      :aria-invalid="state === 'error'"
    />
    <p v-if="helper" class="ds-input__helper" :class="{ 'ds-input__helper--error': state === 'error' }">
      {{ helper }}
    </p>
  </label>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).slice(2, 7)}`
  },
  label: {
    type: String,
    default: 'Label'
  },
  placeholder: {
    type: String,
    default: ''
  },
  helper: {
    type: String,
    default: ''
  },
  state: {
    type: String,
    default: 'default'
  }
});
</script>

<style scoped>
.ds-input {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2937;
}

.ds-input__label {
  letter-spacing: 0.01em;
}

.ds-input__field {
  border-radius: 12px;
  border: 1.5px solid #d1d5f0;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  background: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.ds-input__field:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
}

.ds-input--success .ds-input__field {
  border-color: #059669;
}

.ds-input--error .ds-input__field {
  border-color: #dc2626;
}

.ds-input__helper {
  margin: 0;
  font-size: 0.85rem;
  color: #4b5563;
}

.ds-input__helper--error {
  color: #b91c1c;
}
</style>
