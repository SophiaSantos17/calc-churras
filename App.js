import { useEffect } from "react";
import { useFonts } from "expo-font";
import Button from "./scr/components/button";
import { StyleSheet, View } from "react-native";
import colors from "./scr/styles/colors";


export default function App() {

  return (
  <View style={styles.containerApp}>
    <Button text="Calcular" backgound={colors.white} color={colors.red_primary} border={colors.red_primary}/>
    <Button text="Acessar" backgound={colors.red_primary} color={colors.white} border={colors.white}/>
  </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    fontFamily: "Inter",
  },
})

