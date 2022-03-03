// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ---------------------------      POST.JS     ------------------------------ //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useEffect, useState } from "react";
import React from "react";
// REACT-NATIVE
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import { Card } from "react-native-elements";

export default function Post(props) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
    console.log(modalVisible);
    return modalVisible ? (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide comments</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    ) : null;
  };

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.post.id}/comments`
    )
      .then((response) => response.json())
      .then((res) => {
        setComments(res);
        setLoading(false);
        console.log(setComments);
      });
  }, []);
  return (
    <>
      {props.user ? (
        <View style={styles.container}>
          <Card containerStyle={{ width: "60%" }}>
            <Card.Title>{props.user.title}</Card.Title>
            <Card.Divider />
            <Text>{props.user.body}</Text>
          </Card>
        </View>
      ) : (
        <View style={styles.container}>
          <Card containerStyle={{ width: "60%" }}>
            <Card.Title>{props.post.title}</Card.Title>
            <Card.Divider />
            <Text>{props.post.body}</Text>
            <Card.Divider />
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.text}>Comments</Text>
            </TouchableOpacity>
          </Card>
        </View>
      )}
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
