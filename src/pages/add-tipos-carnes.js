import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

// Importando componentes prontos
import TopBar from "../components/topBar";
import TextInter from "../styles/Text";
import CardText from "../components/cardText";

// importanto elementos estáticos para estilização
import icons from "../styles/icons";
import Button from "../components/button";
import colors from "../styles/colors";
import values from "../styles/values";
<<<<<<< HEAD
=======
import Carnes0 from "../back/Carnes0";
>>>>>>> main

// import do back

const PageAddTipoCarnes = () => {
  // variavel para navegação
  const navigate = useNavigation();

  // função para mudar cor no front
  // bovino ---
  const [activePicanha, setPicanha] = useState(false);
  const [activeMaminha, setActiveMaminha] = useState(false);
  const [activeCostela, setActiveCostela] = useState(false);
  // suino ---
  const [activePernil, setActivePernil] = useState(false);
  const [activeLinguica, setActiveLinguica] = useState(false);
  const [activeCostelinha, setActiveCostelinha] = useState(false);
  // frango ---
  const [activeAsa, setActiveAsa] = useState(false);
  const [activePeito, setActivePeito] = useState(false);
  const [activeCoxa, setActiveCoxa] = useState(false);

  // front da página

  //   TODO: TERMINAR A PÁGINA
  

  return (
    <View style={styles.containerAddCarnes}>
      {/* HEADER */}
      <TopBar
        color_button={"white"} // Cor da setda de volta
        title={"Carnes"} // Titulo
        titleColor={colors.white}
        subtitleColor={colors.dark_white}
        subtitle={"Escolha os tipos de carne desejaveis, não é obrigatório"} // Subtitulo
      />
      {/* BOTÕES DE SELEÇÃO */}
<<<<<<< HEAD
      <View style={styles.boxTotalCards}>
        <View style={styles.boxCards}>
=======
      <View style={styles.boxTotalCards} >
        { Carnes0.getValores().bovina && ( <View style={styles.boxCards}>
>>>>>>> main
          <View style={styles.topCards}>
            <Image source={icons.corte_bovino} style={styles.imgTipoCarne} />
            <TextInter text={"Cortes Bovino"} estilo={styles.titleTipoCarne} />
          </View>
          <View style={styles.bottomCards}>
            <CardText
              width={"30%"}
              height={50}
              text="Picanha"
              background={"red"}
              onPress={() => setPicanha(!activePicanha)}
              active={activePicanha}
            />
            <CardText
              width={"30%"}
              height={50}
              text="Maminha"
              background={"red"}
              onPress={() => setActiveMaminha(!activeMaminha)}
              active={activeMaminha}
            />
            <CardText
              width={"30%"}
              height={50}
              text="Costela"
              background={"red"}
              onPress={() => setActiveCostela(!activeCostela)}
              active={activeCostela}
            />
          </View>
<<<<<<< HEAD
        </View>
        <View style={styles.boxCards}>
=======
        </View> )}
        {Carnes0.getValores().suina && ( <View style={styles.boxCards}>
>>>>>>> main
          <View style={styles.topCards}>
            <Image source={icons.corte_suino} style={styles.imgTipoCarne} />
            <TextInter text={"Cortes Suíno"} estilo={styles.titleTipoCarne} />
          </View>
          <View style={styles.bottomCards}>
            <CardText
              width={"30%"}
              height={50}
              text="Pernil"
              background={"red"}
              onPress={() => setActivePernil(!activePernil)}
              active={activePernil}
            />
            <CardText
              width={"30%"}
              height={50}
              text="Linguiça"
              background={"red"}
              onPress={() => setActiveLinguica(!activeLinguica)}
              active={activeLinguica}
            />
            <CardText
              width={"30%"}
              height={50}
              text="Costelinha"
              background={"red"}
              onPress={() => setActiveCostelinha(!activeCostelinha)}
              active={activeCostelinha}
            />
          </View>
<<<<<<< HEAD
        </View>
        <View style={styles.boxCards}>
=======
        </View> )
        }
        { Carnes0.getValores().frango && (<View style={styles.boxCards}>
>>>>>>> main
          <View style={styles.topCards}>
            <Image source={icons.frango_white} style={styles.imgTipoCarne} />
            <TextInter text={"Cortes frango"} estilo={styles.titleTipoCarne} />
          </View>
          <View style={styles.bottomCards}>
            <CardText
              width={"30%"}
              height={50}
              text="Asa"
              background={"red"}
              onPress={() => setActiveAsa(!activeAsa)}
              active={activeAsa}
            />
            <CardText
              width={"30%"}
              height={50}
              text="Peito"
              background={"red"}
              onPress={() => setActivePeito(!activePeito)}
              active={activePeito}
            />
            <CardText
              width={"30%"}
              height={50}
              text="Coxa"
              background={"red"}
              onPress={() => setActiveCoxa(!activeCoxa)}
              active={activeCoxa}
            />
          </View>
<<<<<<< HEAD
        </View>
=======
        </View> )}
>>>>>>> main
      </View>
      <View style={styles.cardButton}>
        <Button
          text="Avançar" // Titulo do botão
          backgound={colors.white} // Cor de fundo do botão
          color={colors.red_primary} // cor do botão
          border={colors.red_primary}
          onPress={() => navigate.navigate("AddBebidas")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAddCarnes: {
    backgroundColor: colors.red_primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: values.full,
  },
  cardButton: {
    width: values.full,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  boxTotalCards: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    marginTop: -50,
    alignItems: "center",
    height: "auto",
  },
  boxCards: {
    alignItems: "center",
    width: "93%",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginVertical: 20,
    justifyContent: "center",
  },
  topCards: {
    width: "85%",
    display: "flex",
    flexDirection: "row",
    height: "auto",
    gap: 4,
    alignItems: "flex-start",
  },
  bottomCards: {
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15,
  },
  imgTipoCarne: {
    width: 30,
    height: 30,
  },
  titleTipoCarne: {
    fontSize: 20,
    color: colors.white,
  },
});

export default PageAddTipoCarnes;
