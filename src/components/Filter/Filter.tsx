import React from "react";
import { Text, Pressable, type PressableProps } from "react-native";

import { FilterStatus } from "@/types/FilterStatus.types";

import { styles } from "./Filter.styles";

type FilterProps = PressableProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: FilterProps) {
  return (
    <Pressable
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      {...rest}
    >
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </Pressable>
  );
}
