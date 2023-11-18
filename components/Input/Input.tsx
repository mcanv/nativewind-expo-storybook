import { TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input = ({ placeholder }: InputProps) => {
  return (
    <TextInput
      className="border font-MediumFont border-gray-300 transition-colors placeholder-gray-400 focus:border-blue-400 rounded-md px-3 py-2 w-full"
      placeholder={placeholder}
    />
  );
};
