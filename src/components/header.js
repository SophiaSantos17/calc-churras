import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../styles/colors";
import icons from "../styles/icons";
import fonts from "../styles/fonsts";
import TextInter from "../styles/Text";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigation();

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

        <TouchableOpacity onPress={() => navigate.navigate("AddPeople")}>
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
                <TouchableOpacity
                  style={styles.buttonMenu}
                  onPress={() => {
                    navigate.navigate("AddPeople");
                    setModalVisible(false);
                  }}
                >
                  <View style={styles.topMenu}>
                    <Image source={icons.math_white} style={styles.iconMenu} />
                    <TextInter text={"Calcular"} estilo={styles.textMenu} />
                  </View>
                  <Image source={icons.next_white} style={styles.iconNext} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonMenu, { borderTopWidth: 0 }]}
                  onPress={() => {
                    navigate.navigate("Eventos");
                    setModalVisible(false);
                  }}                >
                  <View style={styles.topMenu}>
                    <Image
                      source={icons.churras_white}
                      style={styles.iconMenu}
                    />
                    <TextInter
                      text={"Meus Churrascos"}
                      estilo={styles.textMenu}
                    />
                  </View>
                  <Image source={icons.next_white} style={styles.iconNext} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonMenu, { borderTopWidth: 0 }]}
                  onPress={() => {
                    navigate.navigate("Receitas");
                    setModalVisible(false);
                  }}                >
                  <View style={styles.topMenu}>
                    <Image
                      source={icons.receita_white}
                      style={styles.iconMenu}
                    />
                    <TextInter text={"Receitas"} estilo={styles.textMenu} />
                  </View>
                  <Image source={icons.next_white} style={styles.iconNext} />
                </TouchableOpacity>
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
    width: 180,
    height: 70,
  },
  menu: {
    backgroundColor: colors.red_primary,
    width: "80%",
    height: "100%",
    top: 0,
    position: "absolute",
    paddingTop: 70,
    elevation: 10,
  },
  modalBackground: {
    flex: 1,
    height: "100%",
    alignItems: "flex-start",
    backgroundColor: "transparent",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  buttonMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomColor: colors.white,
    borderTopColor: colors.white,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  topMenu: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  iconMenu: {
    width: 40,
    height: 40,
  },
  iconNext: {
    width: 30,
    height: 20,
  },
  textMenu: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: fonts.medium,
    paddingHorizontal: 10,
    width: 229,
  },
});

export default Header;
