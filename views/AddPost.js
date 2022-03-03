// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// -------------------------      ADDPOST.JS     ----------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT-NATIVE
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  SafeAreaView,
} from "react-native";
// COMPONENTS
import AddNewPost from "../components/AddNewPost";

export default function AddPost({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}

// CSS PART

const styles = StyleSheet.create({
  container: {
    marginBottom: "auto",
    marginTop: "auto",
  },
});
