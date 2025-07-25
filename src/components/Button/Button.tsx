import React from "react";
import { Text, Pressable, type PressableProps } from "react-native";

import { styles } from "./Button.styles";

type ButtonProps = PressableProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Pressable style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
