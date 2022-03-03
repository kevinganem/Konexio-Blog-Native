// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ---------------------------      MODAL.JS     ----------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useEffect, useContext } from "react";
import React from "react";
// REACT-NATIVE
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-elements";
// CONTEXT
import { PostContext } from "../context/PostContext";

export default function ModalComments(props) {
  const { comments, setComments } = useContext(PostContext);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then((response) => response.json())
      .then((res) => {
        setComments(res);
        console.log(comments);
      });
  }, []);

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={comments}
              renderItem={(data) => (
                <View style={styles.container}>
                  <Card
                    containerStyle={{
                      width: "90%",
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
                    <Card.Title>{data.item.name}</Card.Title>
                    <Card.Divider />
                    <Text style={styles.modalText}>{data.item.email}</Text>
                    <Card.Divider />
                    <Text style={styles.modalText}>{data.item.body}</Text>
                  </Card>
                </View>
              )}
              keyExtractor={(_, index) => index.toString()}
            />
            <View style={styles.viewButton}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.setModalVisible(!props.modalVisible)}
              >
                <Text style={styles.textStyle}>Hide comments</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "70%",
    width: "80%",
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#00BFFF",
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
  viewButton: {
    marginTop: 25,
  },
});
