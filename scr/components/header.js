import React, { useState } from "react";
import { Image, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import colors from "../styles/colors";
import icons from "../styles/icons";
import TextInter from '../styles/Text'

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.containerCard}>
        <TouchableOpacity onPress={openModal}>
          <Image source={icons.menu} style={styles.icon} />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/logo/logo_preta.png")}
          style={styles.logo}
        />

        <TouchableOpacity>
          <Image source={icons.add_black} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        // presentationStyle="fullScreen"
        onDismiss={closeModal} // Esta função é chamada quando o modal é fechado
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.menu}>
                <TextInter>Modal Content</TextInter>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
        
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: colors.white,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 150,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  icon: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 220,
    height: 50,
  },
  menu: {
    backgroundColor: colors.red_primary,
    width: "75%",
    height: "100%",
    top: 0,
    position: "absolute",
  },
  modalBackground: {
    flex: 1,
    height:  "100%",
    alignItems: 'flex-start',
    backgroundColor: "transparent",
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});

export default Header;
