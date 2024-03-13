import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CardText from "./scr/components/cardText";
import colors from "./scr/styles/colors";

// Defina o componente App
const App = () => {
 // Inicialize o estado com o hook useState para acompanhar o cartão selecionado
 const [selected, setSelected] = useState([false, false, false, false]);

 // Defina a função handlePress, que é chamada quando um cartão é clicado
 const handlePress = (index) => {
   const newSelected = [...selected];
   newSelected[index] = !newSelected[index];
   setSelected(newSelected);
 };

 // Retorne o JSX para o componente
 return (
   <View style={styles.containerApp}>
     {/* Renderize o primeiro cartão */}
     <CardText
       text={"4 Horas"}
       width={150}
       height={60}
       color={colors.white}
       background={colors.red_primary}
       border={colors.white}
       onPress={() => handlePress(0)}
       active={selected[0]}
       hover_bg={colors.white}
       hover_color={colors.red_primary}
     />
     {/* Renderize o segundo cartão */}
     <CardText
       text={"6 Horas"}
       width={150}
       height={60}
       color={colors.white}
       background={colors.red_primary}
       border={colors.white}
       onPress={() => handlePress(1)}
       active={selected[1]}
       hover_bg={colors.white}
       hover_color={colors.red_primary}
     />
     {/* Renderize o terceiro cartão */}
     <CardText
       text={"10 Horas"}
       width={150}
       height={60}
       color={colors.white}
       background={colors.red_primary}
       border={colors.white}
       onPress={() => handlePress(2)}
       active={selected[2]}
       hover_bg={colors.white}
       hover_color={colors.red_primary}
     />
     {/* Renderize o quarto cartão */}
     <CardText
       text={"12 Horas"}
       width={150}
       height={60}
       color={colors.white}
       background={colors.red_primary}
       border={colors.white}
       onPress={() => handlePress(3)}
       active={selected[3]}
       hover_bg={colors.white}
       hover_color={colors.red_primary}
     />
   </View>
 );
};

// Defina os estilos para o containerApp
const styles = StyleSheet.create({
  // todo o conteúdo do app
 containerApp: {
   backgroundColor: colors.red_primary,
   display: "flex",
   flexDirection: "row",
   flexWrap: "wrap",
   justifyContent: "center",
   alignItems: "center",
   height: "100%",
 },
});

export default App;