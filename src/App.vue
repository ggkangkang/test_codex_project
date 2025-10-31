<template>
  <div class="app-shell">
    <aside class="sidebar">
      <h1 class="sidebar__title">Aurora Design System</h1>
      <p class="sidebar__subtitle">Component standards & implementation guidance</p>
      <nav class="sidebar__nav">
        <button
          v-for="component in components"
          :key="component.id"
          class="sidebar__link"
          :class="{ 'sidebar__link--active': component.id === selectedId }"
          type="button"
          @click="selectedId = component.id"
        >
          <span>{{ component.name }}</span>
          <small>{{ component.status }}</small>
        </button>
      </nav>
      <section class="sidebar__tokens">
        <h2>Design tokens</h2>
        <p class="sidebar__tokens-text">
          Tokens are the single source of truth for spacing, color, typography and elevation decisions across the system.
        </p>
        <ul>
          <li><strong>Primary brand</strong>: #2563eb</li>
          <li><strong>Accent</strong>: #f97316</li>
          <li><strong>Neutral surface</strong>: #f8fafc</li>
          <li><strong>Radius scale</strong>: 12px · 16px · 24px</li>
        </ul>
      </section>
    </aside>

    <main class="content" v-if="activeComponent">
      <header class="content__header">
        <p class="content__eyebrow">Component standard</p>
        <h2 class="content__title">{{ activeComponent.name }}</h2>
        <div class="content__meta">
          <span class="status-badge" :data-status="activeComponent.status">{{ activeComponent.status }}</span>
          <p class="content__description">{{ activeComponent.description }}</p>
        </div>
      </header>

      <section class="content__section">
        <h3>Usage guidelines</h3>
        <ul>
          <li v-for="item in activeComponent.usage" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="content__section">
        <h3>Content standards</h3>
        <ul>
          <li v-for="item in activeComponent.contentGuidelines" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="content__section">
        <h3>Accessibility checklist</h3>
        <ul>
          <li v-for="item in activeComponent.accessibility" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="content__section">
        <h3>Component API</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th scope="col">Prop</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in activeComponent.props" :key="prop.name">
              <td>{{ prop.name }}</td>
              <td><code>{{ prop.type }}</code></td>
              <td>{{ prop.description }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="content__section">
        <h3>Token references</h3>
        <div class="token-grid">
          <article v-for="token in activeComponent.tokens" :key="token.token" class="token-card">
            <header>
              <h4>{{ token.token }}</h4>
              <span class="token-card__value">{{ token.value }}</span>
            </header>
            <p>{{ token.description }}</p>
          </article>
        </div>
      </section>

      <component-preview
        class="content__section"
        :component-name="activeComponent.preview.component"
        :title="`${activeComponent.name} previews`"
        :description="activeComponent.preview.description"
        :examples="activeComponent.preview.examples"
        :component-map="componentMap"
      />
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { components } from './data/components';
import ComponentPreview from './components/ComponentPreview.vue';
import DsButton from './components/DsButton.vue';
import DsCard from './components/DsCard.vue';
import DsInput from './components/DsInput.vue';

const selectedId = ref(components[0]?.id ?? '');

const componentMap = {
  DsButton,
  DsCard,
  DsInput
};

const activeComponent = computed(() => components.find((item) => item.id === selectedId.value));
</script>

<style scoped>
.app-shell {
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(37, 99, 235, 0.12), transparent 55%),
    radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.12), transparent 50%);
}

@media (max-width: 960px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: sticky;
    top: 0;
    z-index: 10;
  }
}

.sidebar {
  background: #0f172a;
  color: #e2e8f0;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-right: 1px solid rgba(148, 163, 184, 0.16);
}

.sidebar__title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.sidebar__subtitle {
  margin: 0;
  color: rgba(226, 232, 240, 0.75);
  font-size: 0.95rem;
  line-height: 1.4;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar__link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid transparent;
  color: inherit;
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.sidebar__link small {
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(226, 232, 240, 0.65);
}

.sidebar__link:hover {
  background: rgba(148, 163, 184, 0.18);
  transform: translateX(4px);
}

.sidebar__link--active {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(14, 165, 233, 0.35));
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.sidebar__tokens {
  background: rgba(15, 23, 42, 0.5);
  padding: 1.25rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sidebar__tokens h2 {
  margin: 0;
  font-size: 1.1rem;
}

.sidebar__tokens-text {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(226, 232, 240, 0.72);
}

.sidebar__tokens ul {
  margin: 0;
  padding-left: 1.1rem;
  color: rgba(226, 232, 240, 0.85);
  display: grid;
  gap: 0.35rem;
}

.content {
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

@media (max-width: 720px) {
  .content {
    padding: 2rem;
  }
}

.content__header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.content__eyebrow {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #6366f1;
  margin: 0;
}

.content__title {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0f172a;
}

.content__meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.content__description {
  margin: 0;
  font-size: 1rem;
  color: #334155;
  line-height: 1.6;
}

.status-badge {
  align-self: flex-start;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(59, 130, 246, 0.12);
  color: #1d4ed8;
}

.status-badge[data-status='Beta'] {
  background: rgba(249, 115, 22, 0.16);
  color: #c2410c;
}

.content__section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content__section h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #0f172a;
}

.content__section ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #475569;
  display: grid;
  gap: 0.75rem;
  line-height: 1.5;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
}

.api-table th,
.api-table td {
  padding: 0.85rem 1rem;
  text-align: left;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.25);
}

.api-table th {
  background: #f8fafc;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #475569;
}

.api-table tbody tr:last-child td {
  border-bottom: none;
}

.api-table code {
  background: rgba(148, 163, 184, 0.18);
  padding: 0.25rem 0.45rem;
  border-radius: 8px;
  font-size: 0.85rem;
}

.token-grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 680px) {
  .token-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

.token-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.token-card header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.token-card h4 {
  margin: 0;
  font-size: 0.95rem;
  color: #1f2937;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.token-card__value {
  font-size: 0.85rem;
  color: #6366f1;
  font-family: 'Source Code Pro', 'Consolas', 'Courier New', monospace;
}

.token-card p {
  margin: 0;
  color: #475569;
  font-size: 0.9rem;
}
</style>
