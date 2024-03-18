import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import colors from "./scr/styles/colors";
import Header from "./scr/components/header";
import icons from "./scr/styles/icons";
import PagEventos from "./scr/pages/eventos";
import TopBar from "./scr/components/topBar";

const App = () => {
  // const [selected, setSelected] = useState([false, false, false, false]);

  // const handlePress = (index) => {
  //   const newSelected = [...selected];
  //   newSelected[index] = !newSelected[index];
  //   setSelected(newSelected);
  // };

  return (
    <View style={styles.containerApp}>
      <TopBar
        title={"Acompanhamentos"}
        subtitle={
          "Arroz, farofa e pão são obrigatórios, mas os outros, escolha de acordo com o desejavél"
        }
        color_button={"white"}
        subtitleColor={colors.dark_white}
        titleColor={colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
