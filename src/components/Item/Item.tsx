import { Text, View, Pressable } from "react-native";
import { Trash2 } from "lucide-react-native";

import { FilterStatus } from "@/types/FilterStatus.types";

import { StatusIcon } from "../StatusIcon";

import { styles } from "./Item.styles";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type ItemProps = {
  data: ItemData;
  onStatus: () => void;
  onRemove: () => void;
};

export function Item({ data, onStatus, onRemove }: ItemProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onStatus}>
        <StatusIcon status={data.status} />
      </Pressable>
      <Text style={styles.description}>{data.description}</Text>
      <Pressable onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </Pressable>
    </View>
  );
}
