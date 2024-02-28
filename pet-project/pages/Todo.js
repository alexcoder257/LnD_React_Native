import { useState } from "react";
import { Text, View, StyleSheet, FlatList, Alert } from "react-native";
import Header from "../components/Header";
import AddTodo from "../components/todo/AddTodo";
import TodoItem from "../components/todo/TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play nitendo switch", key: 3 },
  ]);

  const handleDeleteItem = (id) => {
    setTodo((prev) => prev.filter((item) => item.key !== id));
  };

  const handleAddTodo = (item) => {
    if (item.length < 3) {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
      return;
    }
    setTodo((prev) => [...prev, { text: item, key: Math.random().toString() }]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.list}>
        <AddTodo onSubmit={handleAddTodo} />
        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <TodoItem item={item} onSelectItem={handleDeleteItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 40,
  },
});
