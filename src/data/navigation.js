export const navigationSections = [
  {
    title: 'Foundation',
    items: [
      {
        id: 'foundation-typography',
        label: 'Typography',
        status: 'Reference',
        details: {
          description:
            'Typography establishes hierarchy, rhythm, and tone across interfaces. Use the system scale to ensure consistency across headings, body text, and supporting UI copy.',
          usage: [
            'Adopt the predefined typographic scale to avoid arbitrary font sizes.',
            'Leverage weight and size to communicate hierarchy rather than color variations.'
          ],
          contentGuidelines: [
            'Prefer sentence case for UI copy and title case for navigation labels.',
            'Limit headline length to maintain balance within responsive layouts.'
          ],
          accessibility: [
            'Maintain at least a 4.5:1 contrast ratio between text and its background.',
            'Ensure text remains legible at 200% zoom without loss of content or functionality.'
          ]
        }
      },
      {
        id: 'foundation-border-radius',
        label: 'Border Radius',
        status: 'Reference',
        details: {
          description:
            'Radius tokens keep component curvature predictable. Apply system tokens to communicate interaction affordances and maintain brand recognition.',
          usage: [
            'Use larger radii on interactive surfaces to reinforce tappable affordances.',
            'Apply small radii to dense surfaces like tables for subtle separation without excess rounding.'
          ],
          contentGuidelines: [],
          accessibility: [
            'Ensure focus indicators remain visible when applying large radii to interactive elements.'
          ]
        }
      },
      {
        id: 'foundation-shadow',
        label: 'Shadow',
        status: 'Reference',
        details: {
          description:
            'Shadow tokens express elevation and depth. They provide separation between layered surfaces such as dialogs, dropdowns, and cards.',
          usage: [
            'Reserve the highest elevation shadows for modals and floating surfaces.',
            'Pair softer shadows with subtle borders to clarify surface edges.'
          ],
          contentGuidelines: [],
          accessibility: [
            'Never rely on shadow alone to indicate focus; combine elevation with clear outlines.'
          ]
        }
      },
      {
        id: 'foundation-icon',
        label: 'Icon',
        status: 'Reference',
        details: {
          description:
            'Iconography delivers quick recognition of actions and statuses. Use icons to complement labels rather than replace them.',
          usage: [
            'Align icons to the 24px grid to preserve optical balance.',
            'Avoid using icons without supporting labels in complex workflows.'
          ],
          contentGuidelines: [
            'Keep icon metaphors consistent across the product to avoid relearning.',
            'Do not mix stroke widths or visual styles within a single interface.'
          ],
          accessibility: [
            'Provide accessible names or labels that describe the icon’s meaning.',
            'Ensure decorative icons are hidden from assistive technology.'
          ]
        }
      }
    ]
  },
  {
    title: 'Core Components',
    items: [
      { id: 'button', label: 'Button', status: 'Stable' },
      { id: 'text-field', label: 'Text Field', status: 'Stable' },
      { id: 'checkbox-radio', label: 'Checkbox & Radio', status: 'Planned' },
      { id: 'dropdown-select', label: 'Dropdown/Select', status: 'Planned' },
      { id: 'date-time-pickers', label: 'Date & Time Pickers', status: 'Planned' },
      { id: 'switch-toggle', label: 'Switch / Toggle', status: 'Planned' },
      { id: 'search-bar', label: 'Search Bar', status: 'Planned' },
      { id: 'attachment-field', label: 'Attachment Field', status: 'Planned' }
    ]
  },
  {
    title: 'Feedback Components',
    items: [
      { id: 'toast-snackbar', label: 'Toast / Snackbar', status: 'Planned' },
      { id: 'alert-banner', label: 'Alert / Banner', status: 'Planned' },
      { id: 'loading-indicator', label: 'Loading Indicator', status: 'Planned' },
      { id: 'tooltips', label: 'Tooltips', status: 'Planned' },
      { id: 'empty-state', label: 'Empty State / No Data', status: 'Planned' },
      { id: 'progress-indicator', label: 'Progress Bar / Circle', status: 'Planned' }
    ]
  },
  {
    title: 'Layout Components',
    items: [
      { id: 'layout-container', label: 'Container', status: 'Draft' },
      { id: 'layout-grid', label: 'Grid', status: 'Draft' },
      { id: 'layout-header', label: 'Header', status: 'Planned' },
      { id: 'layout-top-bar', label: 'Top Bar', status: 'Planned' },
      { id: 'layout-modal', label: 'Modal / Dialog', status: 'Planned' }
    ]
  },
  {
    title: 'Data Display Components',
    items: [
      { id: 'list-table', label: 'List / Table', status: 'Draft' },
      { id: 'card', label: 'Card', status: 'Beta' },
      { id: 'avatar-stack', label: 'Avatar / Avatar Stack', status: 'Planned' },
      { id: 'tag-chip-badge', label: 'Tag / Chip / Badge', status: 'Planned' },
      { id: 'timeline-log', label: 'Timeline / Log List', status: 'Planned' },
      { id: 'statistic-counter', label: 'Statistic / Counter', status: 'Planned' }
    ]
  },
  {
    title: 'Navigation Components',
    items: [
      { id: 'tab-bar', label: 'Tab Bar', status: 'Draft' },
      { id: 'breadcrumbs', label: 'Breadcrumbs', status: 'Planned' },
      { id: 'sidebar-drawer', label: 'Sidebar / Drawer', status: 'Planned' },
      { id: 'menu', label: 'Menu', status: 'Planned' }
    ]
  }
];
