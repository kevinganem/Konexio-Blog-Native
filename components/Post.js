// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ---------------------------      POST.JS     ------------------------------ //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT-NATIVE
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

export default function Post(props) {
  return (
    <View style={styles.container}>
      <Card containerStyle={{ width: "60%" }}>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Divider />
        <Text>{props.post.body}</Text>
      </Card>
    </View>
  );
}

// CSS PART

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
  },
});
