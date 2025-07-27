import { View, Image, Pressable, Text, FlatList } from "react-native";

import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";
import { FilterStatus } from "@/types/FilterStatus.types";

import { styles } from "./Home.styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

const ITEMS = [
  {
    id: "1",
    status: FilterStatus.DONE,
    description: "1 pacote de café"
  },
  {
    id: "2",
    status: FilterStatus.PENDING,
    description: "2 litros de leite"
  },
  {
    id: "3",
    status: FilterStatus.DONE,
    description: "1 dúzia de ovos"
  },
  {
    id: "4",
    status: FilterStatus.PENDING,
    description: "1 pacote de arroz"
  },
  {
    id: "5",
    status: FilterStatus.DONE,
    description: "1 kg de açúcar"
  },
  {
    id: "6",
    status: FilterStatus.PENDING,
    description: "1 garrafa de óleo"
  },
  {
    id: "7",
    status: FilterStatus.PENDING,
    description: "1 pacote de macarrão"
  },
  {
    id: "8",
    status: FilterStatus.DONE,
    description: "1 lata de milho"
  },
  {
    id: "9",
    status: FilterStatus.PENDING,
    description: "1 caixa de chá"
  },
  {
    id: "10",
    status: FilterStatus.DONE,
    description: "1 pote de margarina"
  },
  {
    id: "11",
    status: FilterStatus.PENDING,
    description: "1 pacote de biscoito"
  },
  {
    id: "12",
    status: FilterStatus.DONE,
    description: "1 barra de chocolate"
  },
  {
    id: "13",
    status: FilterStatus.PENDING,
    description: "1 garrafa de água"
  },
  {
    id: "14",
    status: FilterStatus.DONE,
    description: "1 pacote de farinha"
  },
  {
    id: "15",
    status: FilterStatus.PENDING,
    description: "1 vidro de molho de tomate"
  },
  {
    id: "16",
    status: FilterStatus.DONE,
    description: "1 pacote de sal"
  },
  {
    id: "17",
    status: FilterStatus.PENDING,
    description: "1 pacote de feijão"
  },
  {
    id: "18",
    status: FilterStatus.DONE,
    description: "1 pacote de açúcar mascavo"
  },
  {
    id: "19",
    status: FilterStatus.PENDING,
    description: "1 garrafa de refrigerante"
  },
  {
    id: "20",
    status: FilterStatus.DONE,
    description: "1 pacote de queijo ralado"
  },
  {
    id: "21",
    status: FilterStatus.PENDING,
    description: "1 caixa de suco"
  },
  {
    id: "22",
    status: FilterStatus.DONE,
    description: "1 pacote de pão"
  },
  {
    id: "23",
    status: FilterStatus.PENDING,
    description: "1 pote de iogurte"
  },
  {
    id: "24",
    status: FilterStatus.DONE,
    description: "1 pacote de presunto"
  },
  {
    id: "25",
    status: FilterStatus.PENDING,
    description: "1 pacote de batata palha"
  },
  {
    id: "26",
    status: FilterStatus.DONE,
    description: "1 caixa de cereal"
  }
];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}
          <Pressable style={styles.clearButton}>
            <Text style={styles.clearText}>Fechar</Text>
          </Pressable>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => {
                console.log("Troca Status");
              }}
              onRemove={() => {
                console.log("Remove");
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item cadastrado</Text>
          )}
        />
      </View>
    </View>
  );
}
