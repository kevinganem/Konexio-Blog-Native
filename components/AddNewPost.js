// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// -------------------------      ADDNEWPOST.JS     -------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import * as React from "react";
import { useContext } from "react";
// REACT-NATIVE
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
// FORM
import { Formik } from "formik";
import * as yup from "yup";
// CONTEXT
import { PostContext } from "../context/PostContext";

export default function AddNewPost({ navigation }) {
  const { addPost } = useContext(PostContext);

  const reviewSchema = yup.object({
    title: yup
      .string()
      .required("Required")
      .min(1, "1 character minimum")
      .max(30, "30 characters maximum"),
    body: yup
      .string()
      .required("Required")
      .min(1, "1 character minimum")
      .max(500, "500 characters maximum"),
  });

  const onSubmit = (data) => {
    addPost.push(data);
    console.log("addPost: ", addPost);
    Alert.alert("Succed!", "New post added", [
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.form}>
        <Formik
          initialValues={{ title: "", body: "" }}
          validationSchema={reviewSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.text}>Title</Text>
              <View style={styles.input}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    width: 200,
                    padding: 5,
                    borderRadius: 5,
                    borderColor: "lightgrey",
                  }}
                  placeholder="Enter a title"
                  onChangeText={props.handleChange("title")}
                  value={props.values.title}
                />
              </View>
              {props.touched.title && props.errors.title ? (
                <Text style={styles.textError}>{props.errors.title}</Text>
              ) : null}
              <Text style={styles.text}>Body</Text>
              <View style={styles.input}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    width: 200,
                    padding: 5,
                    borderRadius: 5,
                    borderColor: "lightgrey",
                  }}
                  multiline={true}
                  placeholder="Enter a body"
                  onChangeText={props.handleChange("body")}
                  value={props.values.body}
                />
              </View>
              {props.touched.body && props.errors.body ? (
                <Text style={styles.textError}>{props.errors.body}</Text>
              ) : null}
              <Button title="Post" color="blue" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </View>
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
