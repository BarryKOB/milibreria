// src/components/myfavouriteborder/__docs__/myfavouriteborder.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './example'; 

const meta: Meta<typeof Example> = {
  title: 'MyFavouriteBorder',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    iconColor: 'blue',
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
