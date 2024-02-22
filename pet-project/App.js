import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Alex");
  const [age, setAge] = useState(27);
  const [people, setPeople] = useState([
    { name: "Mario", age: 90 },
    { name: "Luigi", age: 99 },
    { name: "Vayne", age: 30 },
    { name: "Jayce", age: 42 },
    { name: "Yasuo", age: 32 },
    { name: "Jinx", age: 22 },
    { name: "Jax", age: 52 },
    { name: "Jax", age: 53 },
    { name: "Jax", age: 54 },
    { name: "Jax", age: 55 },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textWhite}>Home page</Text>
        <Text style={styles.textWhite}>About us</Text>
        <Text style={styles.textWhite}>Products</Text>
      </View>
      <View style={styles.body}>
        <Text>Counter:{counter}</Text>
        <View style={{ display: "flex", gap: 12, flexDirection: "row" }}>
          <View style={styles.button}>
            <Button title="+" onPress={() => setCounter(counter + 1)} />
          </View>
          <View style={styles.button}>
            <Button title="-" onPress={() => setCounter(counter - 1)} />
          </View>
        </View>
        <Text>--------------------------------------------</Text>
        <Text>
          My name is:{name} and I'm {age} year olds
        </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Your name..."
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Your age..."
          onChangeText={(val) => setAge(val)}
        />
      </View>
      <Text>--------------------------------------------</Text>
      <ScrollView>
        <View style={{ display: "flex", gap: 12 }}>
          {people.map((item) => (
            <View key={item.age} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.textWhite}>Company</Text>
        <Text style={styles.textWhite}>About us</Text>
        <Text style={styles.textWhite}>Contact</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    top: 0,
    position: "absolute",
    width: "100%",
    backgroundColor: "pink",
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    padding: 12,
    alignItems: "center",
  },
  body: {
    width: "100%",
    padding: 12,
    display: "flex",
    alignItems: "center",
  },
  textWhite: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 12,
    gap: 4,
  },
  button: {
    width: 40,
    marginTop: 12,
  },
  input: {
    borderColor: "#333",
    padding: 4,
    margin: 4,
    borderWidth: 1,
    width: 200,
  },
  item: {
    padding: 20,
    backgroundColor: "pink",
  },
});
