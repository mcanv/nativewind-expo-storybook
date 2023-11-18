import { registerRootComponent } from "expo";
import ReactNativeFeatureFlags from "react-native/Libraries/ReactNative/ReactNativeFeatureFlags";

import App from "./App";

ReactNativeFeatureFlags.shouldEmitW3CPointerEvents = () => true;
ReactNativeFeatureFlags.shouldPressibilityUseW3CPointerEventsForHover = () =>
  true;

registerRootComponent(App);
