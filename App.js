import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import colors from "./scr/styles/colors";
import Header from "./scr/components/header";
import icons from "./scr/styles/icons";

const App = () => {
  // const [selected, setSelected] = useState([false, false, false, false]);

  // const handlePress = (index) => {
  //   const newSelected = [...selected];
  //   newSelected[index] = !newSelected[index];
  //   setSelected(newSelected);
  // };

  return (
    <View style={styles.containerApp}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  containerApp: {
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default App;
