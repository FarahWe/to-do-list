import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./styles";
import { TodoItem } from "../../components/TodoItem";

export type TodoItemProps = {
  text: string;
  isChecked: boolean;
};

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<TodoItemProps[]>([]);

  const numberOfTodoDoneItems = todoList.filter(
    (item) => item.isChecked === true
  ).length;
  const numberOfTodoUndoneItems = todoList.filter(
    (item) => item.isChecked === false
  ).length;

  const handleAddTodo = () => {
    if (inputValue.length === 0) {
      return;
    }

    setTodoList((prevState) => [
      ...prevState,
      {
        text: inputValue,
        isChecked: false,
      },
    ]);

    setInputValue("");
  };

  const handleRemoveTodo = (text: string) => {
    Alert.alert("Remover", `Remover participante ${text}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTodoList((prevState) =>
            prevState.filter((participant) => participant.text !== text)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleCheckTodo = (text: string) => {};

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/Logo.png")} />
        </View>

        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor="#808080"
              keyboardAppearance="dark"
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={handleAddTodo}
            >
              <AntDesign name="pluscircleo" color="white" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.previewContainer}>
              <View style={styles.textLine}>
                <Text style={styles.todo}>Criadas</Text>
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>{numberOfTodoUndoneItems}</Text>
                </View>
              </View>

              <View style={styles.textLine}>
                <Text style={styles.done}>Concluídas</Text>
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>{numberOfTodoDoneItems}</Text>
                </View>
              </View>
            </View>

            <FlatList
              data={todoList}
              keyExtractor={(item) => item.text}
              renderItem={({ item }) => (
                <TodoItem
                  onCheck={() => {}}
                  onRemove={() => handleRemoveTodo(item.text)}
                  todoItem={item}
                />
              )}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Image source={require("../../assets/Clipboard.png")} />
                  <Text style={styles.emptyTitle}>
                    Você ainda não tem tarefas cadastradas{"\n"}
                    <Text style={styles.emptySubtitle}>
                      Crie tarefas e organize seus itens a fazer
                    </Text>
                  </Text>
                </View>
              }
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
