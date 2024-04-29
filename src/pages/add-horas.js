import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
// import TextInter from "../styles/Text";

//import componentes prontod
import TopBar from "../components/topBar";
import CardText from "../components/cardText";
import Button from "../components/button"

// import valores
import colors from "../styles/colors";
import values from "../styles/values";

const PageAddHoras = () => {
  const navigate = useNavigation();

  // funcao para mudar a cor no front
  const [active4Horas, setActive4Horas] = useState(false);
  const [active6Horas, setActive6Horas] = useState(false);
  const [active10Horas, setActive10Horas] = useState(false);
  const [active12Horas, setActive12Horas] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <TopBar
          color_button={"white"}
          title={"Horas"}
          subtitle={
            "Selecione a quantidade de horas do churrasco"
          }
          subtitleColor={colors.white}
          titleColor={colors.white}
        />
      </View>
      <View style={styles.boxCardText}>
        <CardText
          width={"40%"}
          height={"25%"}
          text={"4 Horas"}
          background={'red'}
          onPress={() => setActive4Horas(!active4Horas)}
          active={active4Horas}
        />
        <CardText
          width={"40%"}
          height={"25%"}
          text={"6 Horas"}
          background={'red'}
          onPress={() => setActive6Horas(!active6Horas)}
          active={active6Horas}

        />
        <CardText
          width={"40%"}
          height={"25%"}
          text={"10 Horas"}
          background={'red'}
          onPress={() => setActive10Horas(!active10Horas)}
          active={active10Horas}

        />
        <CardText
          width={"40%"}
          height={"25%"}
          text={"12 Horas"}
          background={'red'}
          onPress={() => setActive12Horas(!active12Horas)}
          active={active12Horas}

        />
      </View>
      <View style={styles.cardButton}>
        <Button
          text="Avançar" // Titulo do botão
          backgound={colors.white} // Cor de fundo do botão
          color={colors.red_primary} // cor do botão
          border={colors.red_primary} // cor da borda
          onPress={() => navigate.navigate("NotaFiscal")} //quando pressionar, ir para outra página
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red_primary,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: values.full,
  },

  boxCardText: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    marginTop: -120
  },

  cardButton: {
    width: values.full,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
});

export default PageAddHoras;
