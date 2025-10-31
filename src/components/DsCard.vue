<template>
  <article :class="cardClasses">
    <header class="space-y-2">
      <h3 class="text-xl font-semibold text-slate-900">{{ title }}</h3>
      <p v-if="subtitle" class="text-sm text-slate-500">{{ subtitle }}</p>
    </header>
    <div class="flex flex-col gap-3">
      <slot>
        <p v-if="metric" class="text-4xl font-semibold text-prosync-ocean-600">{{ metric }}</p>
        <p v-if="delta" class="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600">
          {{ delta }}
        </p>
        <p v-if="!metric && !delta" class="text-sm text-slate-500">Add card content via slots.</p>
      </slot>
    </div>
    <footer class="flex flex-wrap gap-2">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full border border-transparent bg-prosync-ocean-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-prosync-ocean-700"
      >
        Primary action
      </button>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full border border-prosync-ocean-200 px-4 py-2 text-sm font-semibold text-prosync-ocean-600 transition hover:border-prosync-ocean-400 hover:bg-prosync-ocean-500/5"
      >
        Secondary
      </button>
    </footer>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Card title'
  },
  subtitle: {
    type: String,
    default: ''
  },
  elevated: {
    type: Boolean,
    default: false
  },
  metric: {
    type: String,
    default: ''
  },
  delta: {
    type: String,
    default: ''
  }
});

const baseClasses =
  'flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition-transform duration-200';

const elevatedClasses = 'shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/60 hover:-translate-y-0.5';

const cardClasses = computed(() => [baseClasses, props.elevated ? elevatedClasses : '']);
</script>
