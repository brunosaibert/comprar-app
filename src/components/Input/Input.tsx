import { TextInput, type TextInputProps } from "react-native";

import { styles } from "./Input.styles";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={styles.container} {...rest} />;
}
