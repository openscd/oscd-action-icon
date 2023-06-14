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
  actions: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  label = 'Label',
  icon = '',
  secondary = false,
  highlighted = false,
  hideActions = false,
  actions,
}: ArgTypes) => html`<div style="margin-top:128px;">
  <oscd-action-icon
    .label=${label}
    .icon=${icon}
    ?secondary=${secondary}
    ?highlighted=${highlighted}
    ?hideActions=${hideActions}
  >
    ${actions}
  </oscd-action-icon>
</div> `;

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

export const Actions = Template.bind({});
Actions.args = {
  icon: 'edit',
  actions: html`<oscd-action-icon slot="action" icon="edit" label="Bar">
    </oscd-action-icon>
    <oscd-action-icon
      slot="action"
      mini
      icon="delete"
      label="Foo"
    ></oscd-action-icon>
    <oscd-action-icon
      slot="action"
      mini
      icon="conveyor_belt"
    ></oscd-action-icon>`,
};
