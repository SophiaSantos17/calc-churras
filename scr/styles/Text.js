import { useFonts } from "expo-font";
import { StyleSheet, Text} from "react-native";


const TextInter = ({text, estilo}) => {
  const [loadFonts] = useFonts({
    'Inter': require('../assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf'),
  });

  if (!loadFonts){
    return null;
  }

  return(
    <Text style={[styles.containerText, estilo]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  containerText: {
    fontFamily: "Inter",
  },
})

export default TextInter;