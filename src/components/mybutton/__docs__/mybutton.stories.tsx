// src/components/mybutton/__docs__/mybutton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

// Definimos los metadatos para Storybook
const meta: Meta<typeof Example> = {
  title: "MyButton",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

// Definimos la primera historia: Primary
export const Primary: Story = {
  args: {
    text: "Button primary",
    txtcolor: 'black',
    bgcolor: 'red',
    bordercolor: 'red',
    bordersize: '2px',
    hoverTxtColor: 'white',
    hoverBgColor: 'blue',
    disabled: false,
    size: "small",
    onClick: () => alert("Button Primary"),
  },
};

// Definimos la segunda historia: Secondary
export const Secondary: Story = {
  args: {
    text: "Button secondary",
    txtcolor: 'white',
    bgcolor: 'pink',
    bordercolor: 'pink',
    bordersize: '1px',
    hoverTxtColor: 'black',
    hoverBgColor: 'yellow',
    disabled: false,
    size: "small",
    onClick: () => alert("Button secondary"),
  },
};
