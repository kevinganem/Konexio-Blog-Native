// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      FORM.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState } from "react";
import * as React from "react";
// REACT-NATIVE
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
// FORM
import { Formik } from "formik";
import * as yup from "yup";

export default function Form({ navigation }) {
  const [isLogged, setIsLogged] = useState(false);

  const reviewSchema = yup.object({
    username: yup
      .string()
      .required("Required")
      .min(1, "1 character minimum")
      .max(10, "10 characters maximum"),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsLogged((prev) => !prev);
    console.log(setIsLogged);
    Alert.alert("Connected", "Welcome!", [
      {
        text: "Home",
        onPress: () => {
          console.log("OK Pressed");
          navigation.navigate("TabNavigator");
        },
      },
      {
        text: "Disconnect",
        onPress: () => {
          console.log("Disconnect Pressed");
          setIsLogged((prev) => !prev);
          navigation.navigate("Login");
        },
        style: "cancel",
      },
    ]);
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
                <Button
                  title="Connect"
                  color="blue"
                  onPress={props.handleSubmit}
                />
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
});
