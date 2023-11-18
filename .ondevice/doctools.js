import { enhanceArgTypes } from "@storybook/docs-tools";
import { addArgTypesEnhancer, addParameters } from "@storybook/react-native";
import { extractArgTypes } from "@storybook/react/dist/modern/client/docs/extractArgTypes";

addArgTypesEnhancer(enhanceArgTypes);
addParameters({
  docs: {
    extractArgTypes,
  },
});
