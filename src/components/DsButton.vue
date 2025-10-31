<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

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

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-prosync-ocean-500/60 disabled:cursor-not-allowed disabled:pointer-events-none';

const variantMap = {
  primary:
    'bg-gradient-to-r from-prosync-ocean-600 to-prosync-ocean-500 text-white shadow-lg shadow-prosync-ocean-500/25 hover:from-prosync-ocean-700 hover:to-prosync-ocean-600',
  secondary:
    'border border-prosync-ocean-200 bg-white text-prosync-ocean-700 shadow-sm hover:border-prosync-ocean-400 hover:text-prosync-ocean-600',
  ghost:
    'border border-transparent bg-transparent text-slate-700 hover:bg-prosync-ocean-500/10 hover:text-prosync-ocean-700'
};

const sizeMap = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm md:text-base',
  lg: 'px-6 py-3 text-base'
};

const buttonClasses = computed(() => {
  const variantClasses = variantMap[props.variant] ?? variantMap.primary;
  const sizeClasses = sizeMap[props.size] ?? sizeMap.md;
  const stateClasses = props.disabled ? 'opacity-50' : 'hover:-translate-y-0.5';

  return [baseClasses, variantClasses, sizeClasses, stateClasses];
});
</script>
