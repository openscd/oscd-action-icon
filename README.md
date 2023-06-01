# \<oscd-action-icon>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @openscd/oscd-action-icon
```

## Usage

```html
<script type="module">
  import '@openscd/oscd-action-icon';
</script>

<oscd-action-icon></oscd-action-icon>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`


## `src/oscd-action-icon.ts`:

### class: `OscdActionIcon`, `oscd-action-icon`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name          | Privacy | Type                  | Default | Description                                                   | Inherited From |
| ------------- | ------- | --------------------- | ------- | ------------------------------------------------------------- | -------------- |
| `label`       |         | `string \| undefined` |         | caption text, displayed in the header                         |                |
| `icon`        |         | `string \| undefined` |         | icon name, displayed unless the "icon" slot is filled         |                |
| `secondary`   |         | `boolean`             | `false` | color header with secondary theme color while focus is within |                |
| `highlighted` |         | `boolean`             | `false` | highlight pane with dotted outline                            |                |
| `hideActions` |         | `boolean`             | `false` | disables CSS adoption to action buttons                       |                |

#### CSS Properties

| Name                                  | Default                   | Description                       |
| ------------------------------------- | ------------------------- | --------------------------------- |
| `--oscd-action-icon-theme-primary`    | `--oscd-theme-primary`    | Border and hover color.           |
| `--oscd-action-icon-theme-on-primary` | `--oscd-theme-on-primary` | Font color inside hover field.    |
| `--oscd-action-icon-theme-secondary`  | `--oscd-theme-secondary`  | Secondary border and hover color. |
| `--oscd-action-icon-theme-on-surface` | `--oscd-theme-on-surface` | Icon and label color.             |
| `--oscd-action-icon-theme-font`       | `--oscd-theme-font`       | Font for label and hover text.    |

#### Slots

| Name     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| `action` | May contain up to eight icon buttons.                                    |
| `icon`   | If filled overrides the icon property.                                   |
|          | The default slot will be rendered into the pane body in a single column. |

<hr/>

### Exports

| Kind | Name             | Declaration    | Module                  | Package |
| ---- | ---------------- | -------------- | ----------------------- | ------- |
| `js` | `OscdActionIcon` | OscdActionIcon | src/oscd-action-icon.ts |         |

## `src/OscdActionIcon.ts`:

### Exports

| Kind                        | Name               | Declaration    | Module                   | Package |
| --------------------------- | ------------------ | -------------- | ------------------------ | ------- |
| `custom-element-definition` | `oscd-action-icon` | OscdActionIcon | /src/oscd-action-icon.js |         |
| `js`                        | `OscdActionIcon`   | OscdActionIcon | src/OscdActionIcon.ts    |         |


&copy; 2023 Alliander N.V.
