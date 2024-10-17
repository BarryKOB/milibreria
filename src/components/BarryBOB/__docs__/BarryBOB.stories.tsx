import type { Meta, StoryObj } from "@storybook/react";
import BarryBOB from "../BarryBOB"; // importamos el componente BarryBOB

const meta: Meta<typeof BarryBOB> = {
  title: "BarryBOB", // el título de la historia
  component: BarryBOB, // el componente principal
};
export default meta;

type Story = StoryObj<typeof BarryBOB>;

export const Primary: Story = {
  args: {
    title: "Primary Title",
    description: "This is the primary BarryBOB component.",
    avatar: "https://example.com/avatar-primary.jpg", // URL de ejemplo para el avatar
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Title",
    description: "This is the secondary BarryBOB component.",
    avatar: "https://example.com/avatar-secondary.jpg", // URL de ejemplo para el avatar
  },
};
