<template>
  <section class="flex flex-col gap-6 p-6">
    <header class="space-y-2">
      <h4 class="text-lg font-semibold text-slate-900">{{ title }}</h4>
      <p v-if="description" class="text-sm text-slate-600">{{ description }}</p>
    </header>
    <div class="grid gap-6 md:grid-cols-2">
      <div v-for="example in examples" :key="example.label" class="flex flex-col gap-3">
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-prosync-ocean-600">{{ example.label }}</p>
        <div class="flex min-h-[160px] items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-prosync-ocean-500/10 via-slate-50 to-prosync-coral-500/10 p-6">
          <component :is="resolvedComponent" v-bind="example.props" />
        </div>
        <details class="group text-sm text-slate-600">
          <summary class="cursor-pointer font-semibold text-slate-800 transition group-open:text-prosync-ocean-600">
            Code sample
          </summary>
          <pre class="mt-3 overflow-auto rounded-2xl bg-slate-900 p-4 text-xs text-slate-200 shadow-inner"><code>{{ formatProps(example.props) }}</code></pre>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  examples: {
    type: Array,
    default: () => []
  },
  componentMap: {
    type: Object,
    default: () => ({})
  },
  componentName: {
    type: String,
    required: true
  }
});

const resolvedComponent = computed(() => props.componentMap[props.componentName]);

function formatProps(propsObject) {
  const entries = Object.entries(propsObject || {});
  if (!entries.length) {
    return `<${props.componentName} />`;
  }

  const serialized = entries
    .map(([key, value]) => `  :${key}="${typeof value === 'string' ? value : JSON.stringify(value)}"`)
    .join('\n');

  return `<${props.componentName}\n${serialized}\n/>`;
}
</script>
