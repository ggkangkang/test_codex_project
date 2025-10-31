<template>
  <button
    class="ds-button"
    :class="[`ds-button--${variant}`, `ds-button--${size}`, { 'ds-button--disabled': disabled }]"
    :disabled="disabled"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.ds-button {
  --btn-padding-y-sm: 0.35rem;
  --btn-padding-y-md: 0.55rem;
  --btn-padding-y-lg: 0.75rem;
  --btn-padding-x-sm: 1rem;
  --btn-padding-x-md: 1.25rem;
  --btn-padding-x-lg: 1.75rem;
  --btn-font-size-sm: 0.8125rem;
  --btn-font-size-md: 0.9375rem;
  --btn-font-size-lg: 1.0625rem;
  --btn-radius: 999px;
  border-radius: var(--btn-radius);
  border: 1px solid transparent;
  font-weight: 600;
  letter-spacing: 0.01em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  font-family: inherit;
  text-decoration: none;
}

.ds-button:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.4);
  outline-offset: 2px;
}

.ds-button--disabled,
.ds-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

.ds-button--primary {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #ffffff;
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.25);
}

.ds-button--primary:not(.ds-button--disabled):hover {
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  transform: translateY(-1px);
}

.ds-button--secondary {
  background: #ffffff;
  color: #1f2937;
  border-color: #d1d5db;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
}

.ds-button--secondary:not(.ds-button--disabled):hover {
  border-color: #2563eb;
  color: #2563eb;
  transform: translateY(-1px);
}

.ds-button--ghost {
  background: transparent;
  color: #1f2937;
  border-color: transparent;
}

.ds-button--ghost:not(.ds-button--disabled):hover {
  background: rgba(37, 99, 235, 0.08);
  color: #1d4ed8;
}

.ds-button--sm {
  padding: var(--btn-padding-y-sm) var(--btn-padding-x-sm);
  font-size: var(--btn-font-size-sm);
}

.ds-button--md {
  padding: var(--btn-padding-y-md) var(--btn-padding-x-md);
  font-size: var(--btn-font-size-md);
}

.ds-button--lg {
  padding: var(--btn-padding-y-lg) var(--btn-padding-x-lg);
  font-size: var(--btn-font-size-lg);
}
</style>
