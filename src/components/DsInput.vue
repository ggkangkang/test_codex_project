<template>
  <label class="flex flex-col gap-2 text-sm font-medium text-slate-700" :for="id">
    <span class="tracking-tight text-slate-600">{{ label }}</span>
    <input
      :id="id"
      :placeholder="placeholder"
      class="rounded-2xl border bg-white/95 px-4 py-3 text-base text-slate-900 shadow-sm transition focus:outline-none"
      :class="inputClasses"
      type="text"
      :aria-invalid="state === 'error'"
    />
    <p v-if="helper" class="text-xs" :class="helperClasses">
      {{ helper }}
    </p>
  </label>
</template>

<script setup>
import { computed } from 'vue';

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

const fieldStateClasses = {
  default: 'border-slate-200 focus:border-prosync-ocean-500 focus:ring-4 focus:ring-prosync-ocean-500/15',
  success: 'border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-400/20',
  error: 'border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-400/20'
};

const helperStateClasses = {
  default: 'text-slate-500',
  success: 'text-emerald-600',
  error: 'text-rose-600'
};

const inputClasses = computed(() => fieldStateClasses[props.state] ?? fieldStateClasses.default);

const helperClasses = computed(() => helperStateClasses[props.state] ?? helperStateClasses.default);
</script>
