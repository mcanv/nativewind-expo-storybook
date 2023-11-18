import { Pressable, Text } from "react-native";

import { cn } from "@/lib/utils";

interface MyButtonProps {
  onPress: () => void;
  text: string;
  variant?: "primary" | "secondary";
}

export const MyButton = ({ onPress, text, variant }: MyButtonProps) => {
  return (
    <Pressable
      className={cn("group rounded-md shadow-sm py-3 px-3", {
        "bg-primary-500 active:bg-primary-600": variant === "primary",
        "bg-secondary-500 active:bg-secondary-400": variant === "secondary",
      })}
      onPress={onPress}
    >
      <Text
        className={cn("font-RegularFont group-active:text-white", {
          "text-white group-active:text-white": variant === "primary",
          "text-white group-active:text-black": variant === "secondary",
        })}
      >
        {text}
      </Text>
    </Pressable>
  );
};
