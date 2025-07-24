import { Text, View } from "react-native";
import { styles } from "./Home.styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>olá mundo</Text>
    </View>
  );
}
