import type { Meta, StoryObj } from "@storybook/react";

import Inputs from "./Inputs";

const meta = {
  title: "Input",
  component: Inputs,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Inputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    labelTitle: "First Name",
      inputType: "text",
      inputId: "first",
      inputValue: "",
      inputRef: RefObject<HTMLInputElement>,
      inputPlaceholder: string,
      getInputValue: (event: ChangeEvent<HTMLInputElement>) => void,
      error: "Whoops",
  },
};

// export const Enabled: Story = {
//   args: {
//     disabledBoolean: false,
//     buttonType: "submit",
//     buttonText: "Submit",
//   },
// };
