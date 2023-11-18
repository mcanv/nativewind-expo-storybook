import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { View } from "react-native";

import { Input } from "./Input";

const InputMeta: ComponentMeta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Placeholder",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = (args) => <Input {...args} />;
