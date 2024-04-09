import { StyleSheet, TouchableOpacity } from "react-native";
import TextInter from "../styles/Text";
import values from "../styles/values";
import fonts from "../styles/fonsts";
import colors from "../styles/colors";

const CardText = ({ width, height, text, background, onPress, active }) => {
  // Função para determinar a cor do card de acordo com o fundo
  const determineColors = (bg) => {
    if (bg === colors.red_primary || bg === "red") {
      return {
        background: colors.red_primary,
        color: colors.white,
        border: colors.white,
        hover_color: colors.red_primary,
        hover_bg: colors.white,
      };
    } else if (bg === colors.dark_white || bg === "gray" || bg === "grey") {
      return {
        background: colors.dark_white,
        color: colors.red,
        border: colors.red_primary,
        hover_color: colors.white,
        hover_bg: colors.red_primary,
      };
    } else {
      // Se a cor de fundo não for vermelha nem cinza, use valores padrão
      return {
        background: bg,
        color: colors.black,
        border: colors.black,
        hover_color: colors.black,
        hover_bg: colors.white,
      };
    }
  };

  // Obtém as cores com base na cor de fundo
  const {
    background: bgColor,
    color,
    border,
    hover_color,
    hover_bg,
  } = determineColors(background);

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        {
          width: width,
          height: height,
          backgroundColor: active ? hover_bg : bgColor,
          borderColor: border,
        },
      ]}
      onPress={onPress}
    >
      <TextInter
        text={text}
        estilo={[styles.texto, { color: active ? hover_color : color }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 15,
    borderRadius: values.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    marginVertical: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: fonts.medium,
  },
});

export default CardText;
