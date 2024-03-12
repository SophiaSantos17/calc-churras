import { useFonts } from "expo-font";
import { StyleSheet, Text} from "react-native";


const TextInter = ({text, estilo}) => {
  const [loadFonts] = useFonts({
    'Inter': 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
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