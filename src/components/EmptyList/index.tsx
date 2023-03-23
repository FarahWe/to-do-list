import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={require("../../assets/Clipboard.png")} />
      <Text style={styles.emptyTitle}>
        Você ainda não tem tarefas cadastradas{"\n"}
        <Text style={styles.emptySubtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </Text>
    </View>
  );
}
