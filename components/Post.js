// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ---------------------------      POST.JS     ------------------------------ //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState } from "react";
import React from "react";
// REACT-NATIVE
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Card } from "react-native-elements";
// COMPONENTS
import Modal from "./Modal";
// CONTEXT

export default function Post(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {modalVisible && (
        <Modal
          modalVisible={modalVisible}
          id={props.post.id}
          setModalVisible={setModalVisible}
        />
      )}
      <View style={styles.container}>
        <Card
          containerStyle={{
            width: "60%",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Divider />
          <Text style={styles.text}>{props.post.body}</Text>
          <Card.Divider />
          <View style={styles.viewButton}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Comments</Text>
            </Pressable>
          </View>
        </Card>
      </View>
    </>
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
    marginBottom: 20,
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
  },
  viewButton: {
    alignItems: "center",
  },
});
