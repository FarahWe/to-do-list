import { Text, TouchableOpacity, View } from "react-native";
import { TodoItemProps } from "../../screens/Home";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

type Props = {
  todoItem: TodoItemProps;
  onRemove: () => void;
  onCheck: () => void;
};

export function TodoItem({ todoItem, onCheck, onRemove }: Props) {
  return (
    <TouchableOpacity onPress={onCheck} style={styles.item} activeOpacity={0.7}>
      {todoItem.isChecked ? (
        <Ionicons name="radio-button-on" color="#8284fa" size={24} />
      ) : (
        <Ionicons name="radio-button-off" color="#4ea8de" size={24} />
      )}

      <Text
        style={[
          styles.itemText,
          todoItem.isChecked && { textDecorationLine: "line-through" },
        ]}
        numberOfLines={2}
      >
        {todoItem.text}
      </Text>

      <TouchableOpacity onPress={onRemove} activeOpacity={0.7}>
        <Ionicons name="trash-outline" color="#808080" size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
