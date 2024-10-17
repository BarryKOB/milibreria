// src/components/myfavourite/__docs__/myfavourite.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './example'; 

const meta: Meta<typeof Example> = {
  title: 'MyFavourite',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    iconColor: 'red',
    disabled: false,
    onClick: () => alert('Icon clicked'),
  },
};

export const Disabled: Story = {
  args: {
    iconColor: 'gray',
    disabled: true,
  },
};
