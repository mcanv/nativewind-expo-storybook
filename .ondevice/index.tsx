
import { getStorybookUI } from "@storybook/react-native";
import {
    useFonts
} from "expo-font";
import "./doctools";
import "./storybook.requires";

const StorybookUIRoot = getStorybookUI({});

const StoryBook = () =>{
    const [fontsLoaded] = useFonts({
      PlusJakartaSans_200ExtraLight: require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
      PlusJakartaSans_200ExtraLight_Italic: require("../assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf"),
      PlusJakartaSans_300Light: require("../assets/fonts/PlusJakartaSans-Light.ttf"),
      PlusJakartaSans_300Light_Italic: require("../assets/fonts/PlusJakartaSans-LightItalic.ttf"),
      PlusJakartaSans_400Regular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
      PlusJakartaSans_400Regular_Italic: require("../assets/fonts/PlusJakartaSans-Italic.ttf"),
      PlusJakartaSans_500Medium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
      PlusJakartaSans_500Medium_Italic: require("../assets/fonts/PlusJakartaSans-MediumItalic.ttf"),
      PlusJakartaSans_600SemiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
      PlusJakartaSans_600SemiBold_Italic: require("../assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf"),
      PlusJakartaSans_700Bold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
      PlusJakartaSans_700Bold_Italic: require("../assets/fonts/PlusJakartaSans-BoldItalic.ttf"),
      PlusJakartaSans_800ExtraBold: require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
      PlusJakartaSans_800ExtraBold_Italic: require("../assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf"),
    });
    if(!fontsLoaded) {
      return null;
    }
    return <StorybookUIRoot />
  }

export default StoryBook;
