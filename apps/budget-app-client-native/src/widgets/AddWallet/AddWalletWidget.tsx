
import { SetStateAction, useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { Modal, Pressable, View, Text, StyleSheet } from "react-native";
import { AddWalletModal } from "./modal";
import { WalletForm } from "./form";



export function AddWalletWidget () {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Entypo name="plus" size={26} color="black" />
      </Pressable>
      <AddWalletModal isOpen={modalVisible} setIsOpen={setModalVisible}>

        <WalletForm/>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </AddWalletModal>
    </>

  )

}



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});