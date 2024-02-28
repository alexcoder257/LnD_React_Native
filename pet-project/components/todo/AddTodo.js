import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function AddTodo({ onSubmit }) {
  const [text, setText] = useState();

  const handleChangeText = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={handleChangeText}
      />
      <View style={styles.button}>
        <Button
          color={"pink"}
          title="Add Todo"
          onPress={() => onSubmit(text)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderBottomColor: "#666",
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 16,
  },
});
