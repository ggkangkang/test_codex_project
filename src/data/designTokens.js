export const colorTokens = [
  {
    name: 'Primary / Ocean 600',
    value: '#2563eb',
    usage: 'Primary actions, key highlights, and interactive elements.'
  },
  {
    name: 'Primary hover / Ocean 700',
    value: '#1d4ed8',
    usage: 'Hover states for primary buttons and interactive emphasis.'
  },
  {
    name: 'Accent / Coral 500',
    value: '#f97316',
    usage: 'Supporting accents, indicators, and positive emphasis.'
  },
  {
    name: 'Surface / Slate 900',
    value: '#0f172a',
    usage: 'Sidebar backgrounds and immersive surfaces.'
  },
  {
    name: 'Neutral base / Slate 100',
    value: '#f1f5f9',
    usage: 'Application shell background, card canvas, and layout chrome.'
  }
];

export const typographyTokens = [
  {
    name: 'Display 01',
    font: 'Inter',
    size: '48px',
    lineHeight: '56px',
    weight: '700',
    usage: 'Hero-level headings and key marketing moments.',
    previewClasses: 'text-4xl md:text-5xl font-semibold tracking-tight text-white'
  },
  {
    name: 'Heading 02',
    font: 'Inter',
    size: '32px',
    lineHeight: '40px',
    weight: '600',
    usage: 'Page titles, major section headings, and modal headers.',
    previewClasses: 'text-3xl font-semibold leading-tight text-white'
  },
  {
    name: 'Heading 03',
    font: 'Inter',
    size: '24px',
    lineHeight: '32px',
    weight: '600',
    usage: 'Component titles and card headings.',
    previewClasses: 'text-2xl font-semibold leading-snug text-white'
  },
  {
    name: 'Body / Base',
    font: 'Inter',
    size: '16px',
    lineHeight: '24px',
    weight: '400',
    usage: 'Paragraph text, helper copy, and long-form guidance.',
    previewClasses: 'text-base font-normal leading-relaxed text-white'
  },
  {
    name: 'Label / Micro',
    font: 'Inter',
    size: '12px',
    lineHeight: '16px',
    weight: '600',
    usage: 'Eyebrow labels, metadata tags, and compact badges.',
    previewClasses: 'text-xs font-semibold uppercase tracking-[0.32em] text-white'
  }
];

export const iconTokens = [
  {
    name: 'Lucide core set',
    size: '24px frame · 2px stroke',
    usage: 'Core interface icons for navigation, actions, and system status.',
    guidance:
      'Icons inherit text color by default. Reserve filled icons for critical alerts and use outlined shapes elsewhere.'
  },
  {
    name: 'Domain pictograms',
    size: '48px frame · 1.5px stroke',
    usage: 'Feature highlights, onboarding moments, and empty states.',
    guidance:
      'Pair pictograms with accent gradients. Maintain a 4:3 aspect ratio and align them to an 8px grid.'
  }
];

export const radiusTokens = [
  {
    component: 'Buttons',
    radius: '999px',
    usage: 'Primary and secondary actions adopt a pill treatment for high affordance.'
  },
  {
    component: 'Inputs',
    radius: '12px',
    usage: 'Text fields and form controls keep a balanced curvature for clarity.'
  },
  {
    component: 'Cards',
    radius: '16px',
    usage: 'Surface containers adopt a softened radius paired with shadow tokens.'
  },
  {
    component: 'Overlays & modals',
    radius: '24px',
    usage: 'Layered surfaces lean into warmth and approachability at scale.'
  }
];
