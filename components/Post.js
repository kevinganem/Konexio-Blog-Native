// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ---------------------------      POST.JS     ------------------------------ //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useEffect, useState, useContext } from "react";
import React from "react";
// REACT-NATIVE
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import { Card } from "react-native-elements";
// COMPONENTS
import Modal from "./Modal";
// CONTEXT
import { PostContext } from "../context/PostContext";

export default function Post(props) {
  const { comments, setComments } = useContext(PostContext);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const { addPost, setAddPost } = useContext(PostContext);

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
        <Card containerStyle={{ width: "60%" }}>
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Divider />
          <Text>{props.post.body}</Text>
          <Card.Divider />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.text}>Comments</Text>
          </TouchableOpacity>
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
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
