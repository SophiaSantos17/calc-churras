import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextInter from "../styles/Text";
import colors from "../styles/colors";
import values from "../styles/values";
import fonts from "../styles/fonsts";

const CardAddPeople = ({icon, text, iconMenus, iconsAdd, functionAdd, functionSub, value}) => {

  return (
    <View style={styles.containerCardAdd}>
      <View style={styles.topSize}>
        <Image style={styles.iconImage} source={icon} />
        <TextInter estilo={styles.text} text={text} />
      </View>
      <View style={styles.bottomSize}>
        <TouchableOpacity style={styles.buttonAdd} onPress={functionAdd}>
          <Image style={styles.iconButton} source={iconsAdd}/>
        </TouchableOpacity>
        <TextInter estilo={styles.text} text={value} />
        <TouchableOpacity style={styles.buttonAdd} onPress={functionSub}>
          <Image style={styles.iconButton} source={iconMenus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCardAdd: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    borderWidth: 1,
    width: 170,
    height: 135,
    borderRadius: values.borderRadius,
  },
  topSize: {
    // justifyContent: "center",
    alignItems: "center",
    width: values.full,
    height: "50%",
  },
  bottomSize: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "55%",
    height: 40,
  },
  iconImage: {
    width: 35,
    height: 35,
  },
  iconButton: {
    width: 30,
    height: 30,
  },
  text: {
    color: colors.white,
    fontSize: fonts.regular,
  },
});

export default CardAddPeople;
