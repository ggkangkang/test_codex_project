<template>
  <section class="preview">
    <header class="preview__header">
      <h4 class="preview__title">{{ title }}</h4>
      <p v-if="description" class="preview__description">{{ description }}</p>
    </header>
    <div class="preview__grid">
      <div v-for="example in examples" :key="example.label" class="preview__example">
        <p class="preview__label">{{ example.label }}</p>
        <div class="preview__surface">
          <component :is="resolvedComponent" v-bind="example.props" />
        </div>
        <details class="preview__details">
          <summary>Code sample</summary>
          <pre><code>{{ formatProps(example.props) }}</code></pre>
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

<style scoped>
.preview {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.5rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.preview__header {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.preview__title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: 0.01em;
}

.preview__description {
  margin: 0;
  color: #475569;
  font-size: 0.95rem;
}

.preview__grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 720px) {
  .preview__grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

.preview__example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.preview__label {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.preview__surface {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(79, 70, 229, 0.08));
  padding: 1.25rem;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 140px;
}

.preview__details {
  font-size: 0.85rem;
  color: #4b5563;
}

.preview__details summary {
  cursor: pointer;
  font-weight: 600;
  color: #1f2937;
}

.preview__details pre {
  background: #0f172a;
  color: #e2e8f0;
  padding: 0.75rem;
  border-radius: 12px;
  overflow: auto;
}
</style>
