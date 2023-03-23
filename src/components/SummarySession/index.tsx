import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  todoUndoneLength: number;
  todoDoneLength: number;
};

export function SummarySession({ todoDoneLength, todoUndoneLength }: Props) {
  return (
    <View style={styles.previewContainer}>
      <View style={styles.textLine}>
        <Text style={styles.todo}>Criadas</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{todoUndoneLength}</Text>
        </View>
      </View>

      <View style={styles.textLine}>
        <Text style={styles.done}>Concluídas</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{todoDoneLength}</Text>
        </View>
      </View>
    </View>
  );
}
