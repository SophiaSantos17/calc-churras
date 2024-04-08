import { StyleSheet, TouchableOpacity } from "react-native";
import TextInter from "../styles/Text";
import values from "../styles/values";
import fonts from "../styles/fonsts";
import colors from "../styles/colors";

const CardText = ({width, height, text, backgound, color, border, onPress, active, hover_color, hover_bg }) => {
  return (
    <TouchableOpacity style={[styles.cardContainer,{width: width, height: height, backgroundColor: active ? hover_bg : backgound, borderColor: border}]} onPress={onPress}>
      <TextInter text={text} estilo={[styles.texto, {color: active ? hover_color : color}]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 15,
    borderRadius: values.borderRadius ,
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
