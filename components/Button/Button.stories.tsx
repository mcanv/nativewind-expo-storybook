import { ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";

import { MyButton } from "./Button";

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: "Button",
  component: MyButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: "100%", height: "100%" }}>
        <Story />
      </View>
    ),
  ],
};

export const Primary = {
  args: {
    variant: "primary",
    text: "Primary Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    text: "Secondary Button",
  },
};

export default MyButtonMeta;
