export const components = [
  {
    id: 'button',
    name: 'Button',
    status: 'Stable',
    description:
      'Buttons trigger actions and are the most prominent interactive element in the interface. They should use concise, verb-focused labels.',
    usage: [
      'Use primary buttons for the main action on a screen and limit to one per view.',
      'Reserve secondary buttons for alternative or less prominent actions.',
      'Ensure button labels are clear, specific verbs such as “Save” or “Send report”.'
    ],
    contentGuidelines: [
      'Use title case for single-word labels and sentence case for longer phrases.',
      'Avoid vague labels such as “Click here”; describe the outcome of the action instead.',
      'Keep labels under 24 characters for optimal responsiveness.'
    ],
    accessibility: [
      'Provide an accessible name that matches the visual label.',
      'Maintain a minimum contrast ratio of 4.5:1 between text and the button background.',
      'Do not rely on color alone to convey state—include iconography or messaging where needed.'
    ],
    tokens: [
      {
        token: '--ds-color-primary',
        value: '#2563eb',
        description: 'Default primary action background color.'
      },
      {
        token: '--ds-color-primary-hover',
        value: '#1d4ed8',
        description: 'Hover color for the primary button.'
      },
      {
        token: '--ds-radius-pill',
        value: '999px',
        description: 'Rounded radius applied to pill buttons.'
      }
    ],
    props: [
      { name: 'variant', type: '"primary" | "secondary" | "ghost"', description: 'Determines the visual weight of the button.' },
      { name: 'size', type: '"sm" | "md" | "lg"', description: 'Sets the padding and font size.' },
      { name: 'disabled', type: 'boolean', description: 'Removes interactivity and dims the button.' }
    ],
    preview: {
      component: 'DsButton',
      description: 'Button variants showcase how emphasis changes across the system.',
      examples: [
        { label: 'Primary action', props: { label: 'Save changes', variant: 'primary' } },
        { label: 'Secondary action', props: { label: 'Preview', variant: 'secondary' } },
        { label: 'Ghost action', props: { label: 'Dismiss', variant: 'ghost' } }
      ]
    }
  },
  {
    id: 'card',
    name: 'Card',
    status: 'Beta',
    description:
      'Cards group related information into a contained surface. They support actions, media, and dense informational layouts.',
    usage: [
      'Use cards to organize content into digestible sections on dashboards and detail pages.',
      'Avoid nesting cards within cards to reduce visual clutter.',
      'Align card actions to the right and use secondary buttons to avoid drawing focus away from primary content.'
    ],
    contentGuidelines: [
      'Lead with a concise title that describes the grouped content.',
      'Use supporting text for context and keep it to two short sentences when possible.',
      'Supplement metrics with badges or subtle icons for quick scanning.'
    ],
    accessibility: [
      'Provide descriptive alt text for media or illustrations contained within cards.',
      'Use semantic headings (<h2>, <h3>) to structure content for assistive technology.',
      'Ensure keyboard users can reach card actions without encountering hidden focus traps.'
    ],
    tokens: [
      {
        token: '--ds-surface-raised',
        value: '#ffffff',
        description: 'Base background color for cards and other raised surfaces.'
      },
      {
        token: '--ds-shadow-sm',
        value: '0 10px 30px rgba(15, 23, 42, 0.08)',
        description: 'Soft elevation used for raised surfaces.'
      },
      {
        token: '--ds-radius-lg',
        value: '16px',
        description: 'Corner radius for medium-elevation surfaces.'
      }
    ],
    props: [
      { name: 'title', type: 'string', description: 'Headline describing the content within the card.' },
      { name: 'subtitle', type: 'string', description: 'Optional supporting copy beneath the title.' },
      { name: 'elevated', type: 'boolean', description: 'Applies an elevated shadow when true.' }
    ],
    preview: {
      component: 'DsCard',
      description: 'Cards are flexible containers for text, media, and actions.',
      examples: [
        {
          label: 'Analytics card',
          props: {
            title: 'Campaign reach',
            subtitle: 'Organic channels · Past 30 days',
            elevated: true,
            metric: '248K',
            delta: '+18% vs previous period'
          }
        },
        {
          label: 'Simple content card',
          props: {
            title: 'Design system update',
            subtitle: 'Updated typography scale and spacing tokens.',
            elevated: false
          }
        }
      ]
    }
  },
  {
    id: 'text-field',
    name: 'Text field',
    status: 'Stable',
    description:
      'Text fields capture user input in forms, filters, and search interfaces. They support inline validation and contextual messaging.',
    usage: [
      'Use text fields when free-form input is required. For constrained options, use select or radio components instead.',
      'Surface helper text to clarify formatting requirements or contextual instructions.',
      'Place error messaging beneath the field and ensure it is programmatically associated.'
    ],
    contentGuidelines: [
      'Placeholder text should provide an example of the expected input, not a label replacement.',
      'Write helper text in full sentences and keep it to 80 characters or fewer.',
      'Use affirmative error messaging that explains how to resolve the issue.'
    ],
    accessibility: [
      'Associate every text field with a label using the id/for pattern.',
      'Expose validation errors using aria-live regions or inline semantics so screen readers announce changes.',
      'Ensure focus and hover states maintain a 3:1 contrast ratio against adjacent colors.'
    ],
    tokens: [
      {
        token: '--ds-border-strong',
        value: '#1f2937',
        description: 'High-contrast border used for active text fields.'
      },
      {
        token: '--ds-border-muted',
        value: '#cbd5f5',
        description: 'Default quiet border for resting fields.'
      },
      {
        token: '--ds-color-error',
        value: '#dc2626',
        description: 'Error state border and text color.'
      }
    ],
    props: [
      { name: 'label', type: 'string', description: 'Visible label tied to the input.' },
      { name: 'placeholder', type: 'string', description: 'Optional example text shown in the field.' },
      { name: 'state', type: '"default" | "error" | "success"', description: 'Changes the border and helper text color.' }
    ],
    preview: {
      component: 'DsInput',
      description: 'Text fields support quiet and validation styles for different contexts.',
      examples: [
        {
          label: 'Default text field',
          props: {
            id: 'name',
            label: 'Full name',
            placeholder: 'Jordan Smith'
          }
        },
        {
          label: 'Error state',
          props: {
            id: 'email',
            label: 'Work email',
            placeholder: 'name@company.com',
            helper: 'Enter a valid company email address.',
            state: 'error'
          }
        }
      ]
    }
  }
];
