import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import TextInter from "../styles/Text";
import icons from "../styles/icons";
import values from "../styles/values";
import colors from "../styles/colors";
import fonts from "../styles/fonsts";

const CardImage = ({ active, icon, iconHover, title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.containerCard, { backgroundColor: active ? colors.red_primary : colors.white }]} onPress={onPress}>
      <Image source={active ? iconHover : icon} style={styles.iconImage} />
      <TextInter text={title} estilo={[styles.textCard, { color: active ? colors.white : colors.black }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    width: 150,
    height: 150,
    borderRadius: values.borderRadius,
    borderColor: colors.red_primary,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  iconImage: {
    width: 90,
    height: 90,
  },
  textCard: {
    fontSize: fonts.regular,
    fontWeight: fonts.medium,
    marginTop: 5,
  },
});

export default CardImage;
