<template>
  <article class="ds-card" :class="{ 'ds-card--elevated': elevated }">
    <header class="ds-card__header">
      <h3 class="ds-card__title">{{ title }}</h3>
      <p v-if="subtitle" class="ds-card__subtitle">{{ subtitle }}</p>
    </header>
    <div class="ds-card__body">
      <slot>
        <p v-if="metric" class="ds-card__metric">{{ metric }}</p>
        <p v-if="delta" class="ds-card__delta">{{ delta }}</p>
        <p v-if="!metric && !delta" class="ds-card__placeholder">Add card content via slots.</p>
      </slot>
    </div>
    <footer class="ds-card__footer">
      <button class="ds-card__action" type="button">Primary action</button>
      <button class="ds-card__action ds-card__action--ghost" type="button">Secondary</button>
    </footer>
  </article>
</template>

<script setup>
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
</script>

<style scoped>
.ds-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.ds-card--elevated {
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  transform: translateY(-2px);
}

.ds-card__header {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.ds-card__title {
  margin: 0;
  font-size: 1.15rem;
  color: #111827;
  font-weight: 600;
}

.ds-card__subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: #4b5563;
}

.ds-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ds-card__metric {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #2563eb;
}

.ds-card__delta {
  margin: 0;
  font-size: 0.9rem;
  color: #047857;
  background: rgba(4, 120, 87, 0.08);
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
}

.ds-card__placeholder {
  margin: 0;
  color: #6b7280;
  font-size: 0.95rem;
}

.ds-card__footer {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.ds-card__action {
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  background: #2563eb;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
}

.ds-card__action--ghost {
  background: transparent;
  color: #2563eb;
  border-color: rgba(37, 99, 235, 0.3);
}
</style>
