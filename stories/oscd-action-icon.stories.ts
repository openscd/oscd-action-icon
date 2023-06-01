import { html, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '../src/OscdActionIcon.js';

export default {
  title: 'OscdActionIcon',
  component: 'oscd-action-icon',
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    secondary: { control: 'boolean' },
    highlighted: { control: 'boolean' },
    hideActions: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
  icon?: string;
  secondary: boolean;
  highlighted: boolean;
  hideActions: boolean;
}

const Template: Story<ArgTypes> = ({
  label = 'Label',
  icon = '',
  secondary = false,
  highlighted = false,
  hideActions = false,
}: ArgTypes) => html`
  <oscd-action-icon
    .label=${label}
    .icon=${icon}
    ?secondary=${secondary}
    ?highlighted=${highlighted}
    ?hideActions=${hideActions}
  >
  </oscd-action-icon>
`;

const Template2: Story<ArgTypes> = ({
  label = 'Label',
  icon = 'edit',
  secondary = false,
  highlighted = false,
  hideActions = false,
}: ArgTypes) => html`
  <oscd-action-icon
    .label=${label}
    .icon=${icon}
    ?secondary=${secondary}
    ?highlighted=${highlighted}
    ?hideActions=${hideActions}
  >
  </oscd-action-icon>
  <oscd-action-icon
    .label=${label}
    .icon=${icon}
    ?secondary=${!secondary}
    ?highlighted=${!highlighted}
    ?hideActions=${!hideActions}
  >
  </oscd-action-icon>
`;

export const JustALabel = Template.bind({});
export const LabelWithIcon = Template.bind({});
LabelWithIcon.args = {
  icon: 'edit',
};

export const SecondaryColorWhenSelected = Template.bind({});
SecondaryColorWhenSelected.args = {
  icon: 'edit',
  secondary: true,
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  icon: 'edit',
  highlighted: true,
};

export const HideActionAnimation = Template.bind({});
HideActionAnimation.args = {
  icon: 'edit',
  hideActions: true,
};

export const TwoActionIcons = Template2.bind({});
