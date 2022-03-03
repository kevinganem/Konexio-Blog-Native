// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ---------------------------      MODAL.JS     ----------------------------- //
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
  Pressable,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-elements";

export default function ModalComments(props) {
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
            <Text style={styles.modalText}>Comments</Text>
            <FlatList
              data={props.data}
              renderItem={(data) => (
                <View style={styles.container}>
                  <Card containerStyle={{ width: "auto" }}>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Divider />
                    <Text>{data.email}</Text>
                    <Card.Divider />
                    <Text>{data.body}</Text>
                  </Card>
                </View>
              )}
              keyExtractor={(_, index) => index.toString()}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!props.modalVisible)}
            >
              <Text style={styles.textStyle}>Hide comments</Text>
            </Pressable>
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
    height: "70%",
    width: "70%",
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
