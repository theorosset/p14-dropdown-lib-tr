import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';

import DropDown from '../components/DropDown/DropDown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: StorybookMeta<typeof DropDown> = {
  title: 'Component/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        description: 'blablabla',
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Set the size of the DropDown component (small, medium, or large).',
    },
    options: {
      description: 'Set data in dropdown.'
    },
    onSelectedValue: {
      description: 'Use this function to get the selected value.'
    },
    id: {
      description: 'id of the component.'
    },
    idOfDropdownOpened: {
      description: 'If you set this props with id of your dropdown the dropdown are closed.'
    },
    onOpened: {
      description: 'With this function, you can determine which dropdown is open.'
    }
  },
} satisfies StorybookMeta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const optionsForDropDown = [
  {id: 1, name: 'Première valeur'}, 
  {id: 2, name: 'Deuxième valeur'}, 
  {id: 3, name: 'Troisième valeur'}, 
  {id: 4, name: 'Quatrième valeur'}, 
  {id: 5, name: 'Cinquième valeur'}, 
  {id: 6, name: 'Sixième valeur'}, 
  {id: 7, name: 'Septième valeur'},
  {id: 8, name: 'Huitième valeur'},
  {id: 9, name: 'Neuvième valeur'},
]
export const PlayGround: Story = {
  args: {
    options:optionsForDropDown,
    onSelectedValue:(value: {id: number, value: string}) => {return value} ,
    size:'medium',
    id:1,
    onOpened: (id: number) =>  id,
    idOfDropdownOpened: 0
  },
};