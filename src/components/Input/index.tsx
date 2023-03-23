import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";

type Props = TextInputProps & {
  onAdd: () => void;
};

export function Input({ onAdd, value, onChangeText, ...rest }: Props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        keyboardAppearance="dark"
        style={styles.input}
        {...rest}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onAdd}
      >
        <AntDesign name="pluscircleo" color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
}
