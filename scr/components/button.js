// componente do próprio react-native
import { StyleSheet, TouchableOpacity } from "react-native";

// Importando as váriaveis estáticas criadas
import colors from './../styles/colors';
import fonts from './../styles/fonsts';

// chamando o componente de Text feito onde ele está com a font Inter
import TextInter from "../styles/Text";

const Button = ({text, backgound, color, border, onPress}) => { 
  return(
    // botão que para ser chamdo, poderá definir a cor de fundo, cor da borda e cor do texto no componente de baixo
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: backgound, borderColor: border}]} onPress={onPress}>

      {/* componente Text estilizado com a font Inter, ele recebe a cor que será chamada para o texto de acordo com a página*/}
      <TextInter estilo={[styles.tittleButton, {color: color}]} text={text}/>
    </TouchableOpacity>
  )
}


// estilização
const styles = StyleSheet.create({
  // botão
  buttonContainer:{
    width: 300,
    borderWidth: 1.5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  // texto do botão
  tittleButton:{
    fontWeight: fonts.button,
    color: colors.white,
    fontSize: 20,
    letterSpacing: 1,
  },
})

export default Button;