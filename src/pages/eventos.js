import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/header";
import TextInter from "../styles/Text";
import fonts from "../styles/fonsts";
import CardEvent from "../components/cardEvent";
import colors from "../styles/colors";

const PagEventos = () => {
  return (
    <View style={styles.containerEvent}>
      <Header />
      <TextInter text={"Meus Eventos"} estilo={styles.titleEvent} />
      <ScrollView contentContainerStyle={styles.boxCardEvent} vertical={true} showsVerticalScrollIndicator={false}>
        {/* .map dos eventos que estão no banco */}
        {/* <CardEvent /> */}
      </ScrollView>
    </View> 
  );
};

const styles = StyleSheet.create({
  // todo a página
  containerEvent: {
    padding: 0,
    backgroundColor: colors.white,
  },
  // titulo da página
  titleEvent: {
    fontSize: fonts.bigger,
    fontWeight: fonts.bold,
    paddingLeft: 20,
    paddingBottom: 20,
    width: "90%",
  },
  // tela scrow que vai receber todos os cards
  boxCardEvent: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    flex: 1,
    flexDirection: "column",
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    height: "100%",
    
  },
});

export default PagEventos;
