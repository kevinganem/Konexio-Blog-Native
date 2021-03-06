// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      FORM.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState, useContext } from "react";
import * as React from "react";
// REACT-NATIVE
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
// FORM
import { Formik } from "formik";
import * as yup from "yup";
// CONTEXT
import { PostContext } from "../context/PostContext";

export default function Form({ navigation }) {
  const [isLogged, setIsLogged] = useState(false);
  const { userName, setUserName } = useContext(PostContext);

  const reviewSchema = yup.object({
    username: yup
      .string()
      .required("Required")
      .min(1, "1 character minimum")
      .max(10, "10 characters maximum"),
  });

  const onSubmit = (data) => {
    setUserName(data.username);
    console.log(data);
    console.log(`fsef: ${userName}`);
    setIsLogged((prev) => !prev);
    console.log(setIsLogged);
    navigation.navigate("TabNavigator");
  };

  return isLogged ? (
    <View style={styles.centeredView}>
      <Button
        title="Disconnect"
        color="red"
        onPress={() => {
          setIsLogged((prev) => !prev);
          navigation.navigate("Login");
        }}
      />
    </View>
  ) : (
    <>
      <View style={styles.centeredView}>
        <View style={styles.form}>
          <Formik
            initialValues={{ username: "" }}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {(props) => (
              <View>
                <Text style={styles.text}>Your username</Text>
                <View style={styles.input}>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      width: 200,
                      padding: 5,
                      borderRadius: 5,
                      borderColor: "lightgrey",
                    }}
                    placeholder="Enter your username"
                    onChangeText={props.handleChange("username")}
                    value={props.values.username}
                  />
                </View>
                {props.touched.username && props.errors.username ? (
                  <Text style={styles.textError}>{props.errors.username}</Text>
                ) : null}
                <View style={styles.viewButton}>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={props.handleSubmit}
                  >
                    <Text style={styles.textStyle}>Login</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
}

// CSS PART

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
  },
  textError: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  form: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
  },
  input: {
    margin: 10,
  },
  text: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    width: "70%",
  },
  buttonOpen: {
    backgroundColor: "#00BFFF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  viewButton: {
    alignItems: "center",
  },
});
