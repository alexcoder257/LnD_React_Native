import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    backgroundColor: "pink",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
});
