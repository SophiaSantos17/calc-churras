import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import icons from "../styles/icons";
import fonts from "../styles/fonsts";
import TextInter from "../styles/Text";
import values from "../styles/values";

const TopBar = ({ color_button, title, subtitle, subtitleColor, titleColor }) => {
  // função para definir se a seta do botão de voltar será branca ou preta, então na hora de chamar o componente, deverá efinir se sera 'black' ou 'white'
  function colorArrow(color) {
    let arrow; // variavél que vai receber o icone

    if (color === "black") {
      // se a cor for preta o incone será preto
      arrow = icons.arrow_back_black;
    } else if (color === "white") {
      // se a cor for branca o incone será branca
      arrow = icons.arrow_back_white;
    }

    // retorna o icone para mostrar quando a função for chamada
    return arrow;
  }

  return (
    <View style={styles.containerTopBar}>
      <View style={styles.sizeButton}>
        <TouchableOpacity style={styles.buttonBack}>
          <Image source={colorArrow(color_button)} style={styles.iconBtn} />
        </TouchableOpacity>
      </View>
      <View style={styles.sixeText}>
        <TextInter text={title} estilo={[styles.titleTopBar, {color: titleColor}]} />
        <TextInter text={subtitle} estilo={[styles.subtitleTopBar , {color: subtitleColor}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTopBar: {
    width: values.full,
    height: 200,
    marginTop: 100,
    flexDirection: "row",
  },
  sizeButton: {
    width: values.fifteen_percent,
    height: 50,
    alignItems: "center",
    paddingHorizontal: 30,
},
sixeText: {
    width: values.eightyFive_percent,
    height: 150,
    justifyContent: "center",
  },
  iconBtn: {
    width: 40,
    height: 40,
  },
  titleTopBar: {
    fontSize: 30,
    fontWeight: fonts.semi,
    bottom: -8,
  },
  subtitleTopBar: {
    fontSize: fonts.regular,
    fontWeight: fonts.medium,
    width: values.eightyFive_percent,
  },
});

export default TopBar;
