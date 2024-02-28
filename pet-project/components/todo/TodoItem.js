import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ item, onSelectItem }) {
  return (
    <TouchableOpacity onPress={() => onSelectItem(item.key)}>
      <View style={styles.item}>
        <AntDesign name="delete" size={20} color="black" />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
