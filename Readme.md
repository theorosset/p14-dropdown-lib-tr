# p14-dropdown-lib-alternance

## Overview

This library provides dropdown component that can be easily integrated into your forms.

## System Requirements

- Node version 16 or higher is required.
- React

## Documentation

Explore the dropdown component by referring to the comprehensive documentation:

[**Library Documentation**](https://theorosset.github.io/p14-dropdown-lib-tr/storybook-static/index.html?path=/docs/component-dropdown--docs)

The documentation allows you to experiment with the component using different predefined props.

## Installation

To use this library in your project, install it using npm:

```bash
npm install p14-dropdown-lib-alternance 
```

## Usage guide
In your React component file, import the `Dropdown` component from the library:

```jsx
import {Dropdown} from 'p14-dropdown-lib-alternance';

<DropDown
    options={ dropDownData.state }
    onSelectedValue={ function(valueGetFromChild){} }
    id="1"
    onOpened={ openDropDown }
    idOfDropdownOpened={ function(idFromChild) {YourStateToSetID} }
/>
```

## NPM Package

Visit the NPM package page for installation and usage details:

[NPM Package - p14-dropdown-lib-alternance](https://www.npmjs.com/package/p14-dropdown-lib-alternance)


