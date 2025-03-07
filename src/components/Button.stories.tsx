import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabledBoolean: true,
    buttonType: "submit",
    buttonText: "Submit",
  },
};

export const Enabled: Story = {
  args: {
    disabledBoolean: false,
    buttonType: "submit",
    buttonText: "Submit",
  },
};
