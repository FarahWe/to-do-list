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
import { EmptyList } from "../../components/EmptyList";
import { Input } from "../../components/Input";
import { SummarySession } from "../../components/SummarySession";

export type TodoItemProps = {
  text: string;
  isChecked: boolean;
};

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<TodoItemProps[]>([]);

  const todoDoneItems = todoList.filter((item) => item.isChecked === true);
  const todoUndoneItems = todoList.filter((item) => item.isChecked === false);

  const handleAddTodo = () => {
    const isAlreadyHaveThisTodo = todoList.findIndex(
      (item) => item.text === inputValue
    );

    if (inputValue.length === 0) {
      return;
    }

    if (isAlreadyHaveThisTodo !== -1) {
      return Alert.alert("Todo Existe", "Já existe uma tarefa assim!");
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

  const handleCheckTodo = (item: TodoItemProps) => {
    const findIndex = todoList.findIndex(
      (todoItem) => item.text === todoItem.text
    );

    let newArray = [];

    if (findIndex === -1) {
      return Alert.alert("Error", "Não era pra isso tar acontecendo 😞.");
    }

    if (item.isChecked) {
      newArray = todoList.map((item, index) => {
        if (index === findIndex) {
          return {
            ...item,
            isChecked: false,
          };
        }

        return item;
      });
    } else {
      newArray = todoList.map((item, index) => {
        if (index === findIndex) {
          return {
            ...item,
            isChecked: true,
          };
        }

        return item;
      });
    }
    setTodoList(newArray);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/Logo.png")} />
        </View>

        <View style={styles.body}>
          <Input
            value={inputValue}
            onAdd={handleAddTodo}
            onChangeText={setInputValue}
          />

          <View style={styles.listContainer}>
            <SummarySession
              todoDoneLength={todoDoneItems.length}
              todoUndoneLength={todoUndoneItems.length}
            />

            <FlatList
              data={[...todoUndoneItems, ...todoDoneItems]}
              keyExtractor={(item) => item.text}
              renderItem={({ item }) => (
                <TodoItem
                  onCheck={() => handleCheckTodo(item)}
                  onRemove={() => handleRemoveTodo(item.text)}
                  todoItem={item}
                />
              )}
              ListEmptyComponent={<EmptyList />}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
