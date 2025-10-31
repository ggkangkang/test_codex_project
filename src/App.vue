<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-950/5">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_55%)]"></div>
      <div class="h-full w-full bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_50%)]"></div>
    </div>

    <div
      class="mx-auto flex max-w-[1400px] flex-col md:grid md:min-h-screen md:grid-cols-[320px_1fr] md:grid-rows-[auto_1fr]"
    >
      <aside
        class="border-b border-slate-800/40 bg-slate-950/95 px-6 py-8 text-slate-200 backdrop-blur md:sticky md:top-0 md:flex md:h-screen md:flex-col md:gap-10 md:border-b-0 md:border-r md:px-10 md:row-span-2"
      >
        <div class="space-y-2">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Prosync</p>
          <h1 class="text-2xl font-semibold tracking-tight text-white">Prosync Design System</h1>
          <p class="text-sm text-slate-400">Component standards & implementation guidance</p>
        </div>

        <nav class="space-y-6">
          <section v-for="section in navigationSections" :key="section.title" class="space-y-3">
            <p class="text-[11px] font-semibold uppercase tracking-[0.45em] text-slate-500">{{ section.title }}</p>
            <div class="space-y-2">
              <button
                v-for="item in section.items"
                :key="item.id"
                type="button"
                class="group flex w-full items-center justify-between rounded-2xl border border-transparent bg-white/5 px-4 py-3 text-left transition hover:bg-white/10"
                :class="{
                  'border-white/20 bg-white/10 text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)]': item.id === selectedId,
                  'text-slate-300': item.id !== selectedId
                }"
                @click="selectedId = item.id"
              >
                <span class="text-sm font-semibold tracking-tight">{{ item.label }}</span>
                <small
                  class="rounded-full border border-white/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-300"
                >
                  {{ item.status }}
                </small>
              </button>
            </div>
          </section>
        </nav>

        <section class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
          <header class="space-y-2">
            <h2 class="text-lg font-semibold text-white">Design tokens</h2>
            <p class="text-sm leading-relaxed text-slate-300">
              Tokens are the single source of truth for spacing, color, typography, iconography, and elevation decisions across
              Prosync interfaces.
            </p>
          </header>

          <div class="mt-6 space-y-6">
            <section>
              <h3 class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Color palette</h3>
              <ul class="mt-4 space-y-3">
                <li v-for="color in colorTokens" :key="color.name" class="flex items-center gap-4 rounded-2xl bg-white/5 p-3">
                  <span
                    class="h-10 w-10 flex-shrink-0 rounded-full border border-white/30 shadow-inner"
                    :style="{ backgroundColor: color.value }"
                  ></span>
                  <div class="flex-1">
                    <p class="text-sm font-semibold text-white">{{ color.name }}</p>
                    <p class="text-xs text-slate-300">{{ color.value }} · {{ color.usage }}</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h3 class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Typography scale</h3>
              <ul class="mt-4 space-y-3">
                <li v-for="typeToken in typographyTokens" :key="typeToken.name" class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div class="flex flex-col gap-3">
                    <p class="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400">{{ typeToken.name }}</p>
                    <p :class="typeToken.previewClasses">Aa</p>
                    <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-300">
                      <p><span class="font-semibold text-slate-200">Font</span> · {{ typeToken.font }}</p>
                      <p><span class="font-semibold text-slate-200">Weight</span> · {{ typeToken.weight }}</p>
                      <p><span class="font-semibold text-slate-200">Size</span> · {{ typeToken.size }}</p>
                      <p><span class="font-semibold text-slate-200">Line height</span> · {{ typeToken.lineHeight }}</p>
                    </div>
                    <p class="text-xs text-slate-300">{{ typeToken.usage }}</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h3 class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Iconography</h3>
              <ul class="mt-4 space-y-3">
                <li v-for="icon in iconTokens" :key="icon.name" class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-sm font-semibold text-white">{{ icon.name }}</p>
                  <p class="text-xs text-slate-300">{{ icon.size }}</p>
                  <p class="mt-2 text-xs text-slate-300">{{ icon.usage }}</p>
                  <p class="mt-2 text-xs text-slate-400">{{ icon.guidance }}</p>
                </li>
              </ul>
            </section>

            <section>
              <h3 class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Component radii</h3>
              <ul class="mt-4 space-y-3">
                <li v-for="radius in radiusTokens" :key="radius.component" class="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-sm font-semibold text-white">{{ radius.component }}</p>
                  <p class="text-xs text-slate-300">Radius · {{ radius.radius }}</p>
                  <p class="text-xs text-slate-400">{{ radius.usage }}</p>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </aside>

      <header
        class="z-10 border-b border-slate-800/40 bg-slate-950/80 px-6 py-5 text-slate-200 backdrop-blur md:sticky md:top-0 md:col-start-2 md:row-start-1 md:border-l md:px-12"
      >
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)] transition hover:bg-white/10"
            >
              <span class="h-2 w-2 rounded-full bg-prosync-ocean-400"></span>
              Select project
            </button>

            <nav class="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
              <span>Home</span>
              <span class="h-1 w-1 rounded-full bg-slate-600/70"></span>
              <span>Components</span>
              <span class="h-1 w-1 rounded-full bg-slate-600/70"></span>
              <span class="text-white">{{ activeComponent?.name ?? 'Overview' }}</span>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:bg-white/10"
              >
                All
              </button>
              <button
                type="button"
                class="rounded-full border border-transparent bg-prosync-coral-500/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_10px_25px_rgba(236,72,153,0.35)] transition hover:bg-prosync-coral-500"
              >
                Review
              </button>
              <button
                type="button"
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:bg-white/10"
              >
                Build-ready
              </button>
            </div>

            <div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left shadow-[0_12px_30px_rgba(15,23,42,0.35)]">
              <div class="h-10 w-10 rounded-full bg-gradient-to-br from-prosync-ocean-500 to-prosync-coral-500"></div>
              <div>
                <p class="text-sm font-semibold tracking-tight text-white">Jordan Wells</p>
                <p class="text-[11px] uppercase tracking-[0.35em] text-slate-400">Product design</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main
        v-if="activeComponent"
        class="px-6 pb-10 pt-24 md:col-start-2 md:row-start-2 md:px-12 md:pb-12 md:pt-16"
      >
        <header class="space-y-4 border-b border-slate-200/40 pb-8">
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Component standard</p>
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-4xl font-semibold tracking-tight text-slate-900">{{ activeComponent.name }}</h2>
              <p class="mt-2 max-w-2xl text-base text-slate-600">{{ activeComponent.description }}</p>
            </div>
            <span
              class="inline-flex items-center justify-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]"
              :class="statusClasses"
            >
              {{ activeComponent.status }}
            </span>
          </div>
        </header>

        <section class="mt-10 space-y-6">
          <article class="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Usage guidelines</h3>
            <ul v-if="activeComponent.usage.length" class="mt-4 space-y-2 text-sm text-slate-600">
              <li v-for="item in activeComponent.usage" :key="item" class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-prosync-ocean-500"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <p v-else class="mt-4 text-sm text-slate-500">Usage guidance is being prepared for this entry.</p>
          </article>

          <article class="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Content standards</h3>
            <ul v-if="activeComponent.contentGuidelines.length" class="mt-4 space-y-2 text-sm text-slate-600">
              <li v-for="item in activeComponent.contentGuidelines" :key="item" class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-prosync-coral-500"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <p v-else class="mt-4 text-sm text-slate-500">Editorial standards are coming soon.</p>
          </article>

          <article class="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Accessibility checklist</h3>
            <ul v-if="activeComponent.accessibility.length" class="mt-4 space-y-2 text-sm text-slate-600">
              <li v-for="item in activeComponent.accessibility" :key="item" class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <p v-else class="mt-4 text-sm text-slate-500">Accessibility considerations will be documented shortly.</p>
          </article>

          <article class="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Component API</h3>
            <div v-if="activeComponent.props.length" class="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table class="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-600">
                <thead class="bg-slate-50 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <tr>
                    <th scope="col" class="px-4 py-3">Prop</th>
                    <th scope="col" class="px-4 py-3">Type</th>
                    <th scope="col" class="px-4 py-3">Description</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr v-for="prop in activeComponent.props" :key="prop.name">
                    <td class="px-4 py-3 font-semibold text-slate-900">{{ prop.name }}</td>
                    <td class="px-4 py-3 font-mono text-xs text-slate-500">
                      <code>{{ prop.type }}</code>
                    </td>
                    <td class="px-4 py-3">{{ prop.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p v-else class="mt-4 text-sm text-slate-500">API surface will be defined as the component stabilizes.</p>
          </article>

          <article class="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Token references</h3>
            <div v-if="activeComponent.tokens.length" class="mt-4 grid gap-4 md:grid-cols-2">
              <article v-for="token in activeComponent.tokens" :key="token.token" class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <header class="flex items-center justify-between">
                  <h4 class="text-sm font-semibold text-slate-900">{{ token.token }}</h4>
                  <span class="text-xs font-mono text-slate-500">{{ token.value }}</span>
                </header>
                <p class="mt-2 text-sm text-slate-600">{{ token.description }}</p>
              </article>
            </div>
            <p v-else class="mt-4 text-sm text-slate-500">Token mappings will be published as they become available.</p>
          </article>

          <component-preview
            v-if="activeComponent.preview"
            class="rounded-3xl border border-slate-200/60 bg-white/90"
            :component-name="activeComponent.preview.component"
            :title="`${activeComponent.name} previews`"
            :description="activeComponent.preview.description"
            :examples="activeComponent.preview.examples"
            :component-map="componentMap"
          />
          <article v-else class="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-6 text-sm text-slate-500">
            Interactive previews will be added for this pattern as implementation guidance matures.
          </article>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import ComponentPreview from './components/ComponentPreview.vue';
import DsButton from './components/DsButton.vue';
import DsCard from './components/DsCard.vue';
import DsInput from './components/DsInput.vue';
import { components } from './data/components';
import { colorTokens, typographyTokens, iconTokens, radiusTokens } from './data/designTokens';
import { navigationSections } from './data/navigation';

const firstSection = navigationSections[0];
const selectedId = ref(firstSection?.items?.[0]?.id ?? '');

const componentMap = {
  DsButton,
  DsCard,
  DsInput
};

const activeNavItem = computed(() => {
  for (const section of navigationSections) {
    const match = section.items.find((item) => item.id === selectedId.value);
    if (match) {
      return match;
    }
  }

  return null;
});

const activeComponent = computed(() => {
  const navItem = activeNavItem.value;

  if (!navItem) {
    return null;
  }

  const detailedComponent = components.find((item) => item.id === navItem.id);
  const details = navItem.details ?? {};

  const fallbackDescription = `Documentation for ${navItem.label} is coming soon.`;

  if (detailedComponent) {
    return {
      ...detailedComponent,
      status: detailedComponent.status ?? navItem.status ?? 'Planned',
      description: detailedComponent.description ?? details.description ?? fallbackDescription,
      usage: detailedComponent.usage ?? details.usage ?? [],
      contentGuidelines: detailedComponent.contentGuidelines ?? details.contentGuidelines ?? [],
      accessibility: detailedComponent.accessibility ?? details.accessibility ?? [],
      tokens: detailedComponent.tokens ?? details.tokens ?? [],
      props: detailedComponent.props ?? details.props ?? [],
      preview: detailedComponent.preview ?? details.preview ?? null
    };
  }

  return {
    id: navItem.id,
    name: navItem.label,
    status: navItem.status ?? 'Planned',
    description: details.description ?? fallbackDescription,
    usage: details.usage ?? [],
    contentGuidelines: details.contentGuidelines ?? [],
    accessibility: details.accessibility ?? [],
    tokens: details.tokens ?? [],
    props: details.props ?? [],
    preview: details.preview ?? null
  };
});

const statusClasses = computed(() => {
  if (!activeComponent.value) {
    return '';
  }

  const styles = {
    Stable: 'bg-emerald-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/40',
    Beta: 'bg-amber-500/10 text-amber-600 ring-1 ring-inset ring-amber-500/30',
    Draft: 'bg-slate-500/10 text-slate-600 ring-1 ring-inset ring-slate-400/30',
    Reference: 'bg-sky-500/10 text-sky-600 ring-1 ring-inset ring-sky-400/40',
    Planned: 'bg-purple-500/10 text-purple-600 ring-1 ring-inset ring-purple-400/40'
  };

  return styles[activeComponent.value.status] ?? 'bg-slate-500/10 text-slate-600 ring-1 ring-inset ring-slate-400/30';
});
</script>
