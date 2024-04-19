import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

// Importando componentes prontos
import TopBar from "../components/topBar";
import CardText from "../components/cardText";
import Button from "../components/button";

// importanto elementos estáticos para estilização
import colors from "../styles/colors";
import values from "../styles/values";

// import do back

const PageAddUtensilios = () => {
  const navigate = useNavigation(); // const para navegação

  // função para mudar cor no front
  const [activeCarvao, setaAtiveCarva] = useState(false);  // carvão
  const [activePrato, setaAtivePrato] = useState(false);  // prato
  const [activeKitTalher, setAtiveKitTalher] = useState(false);  // kit talher
  const [activeCopos, setaAtiveCopos] = useState(false);  // copos
  const [activeGuardanapo, setActiveGuardanapo] = useState(false); // pão de alho


  // front da página
  return (
    <View style={styles.containerAddUtensilios}>
      {/* HEADER */}
      <TopBar
        color_button={"black"} // Cor da setda de volta
        title={"Utensílios"} // Titulo
        subtitle={
          "Escolha a quantidade que desejar Pratos, copos e talheres são descartáveis"
        } // Subtitulo
        subtitleColor={"black"} 
        titleColor={'black'}
      />
      {/* BOTÕES DE SELEÇÃO */}
      <View style={styles.boxCardImages}>
        <CardText
          width={"40%"}
          height={70}
          text="Carvão"
          background={"grey"}
          onPress={() => setaAtiveCarva(!activeCarvao)}
          active={activeCarvao}
        />
        <CardText
          width={"40%"}
          height={70}
          text="Prato"
          background={"grey"}
          onPress={() => setaAtivePrato(!activePrato)}
          active={activePrato}
        />
        <CardText
          width={"40%"}
          height={70}
          text="Kit Talher"
          background={"grey"}
          onPress={() => setAtiveKitTalher(!activeKitTalher)}
          active={activeKitTalher}
        />
        <CardText
          width={"40%"}
          height={70}
          text="Copos"
          background={"grey"}
          onPress={() => setaAtiveCopos(!activeCopos)}
          active={activeCopos}
          />
        <CardText
          width={"40%"}
          height={70}
          text="Guardanapo"
          background={"grey"}
          onPress={() => setActiveGuardanapo(!activeGuardanapo)}
          active={activeGuardanapo}
        />
      </View>
      {/* BOTÃO DE AVANÇAR */}
      <View style={styles.cardButton}>
        <Button
          text="Avançar" // Titulo do botão
          backgound={colors.red_primary} // Cor de fundo do botão
          color={colors.white} // cor do botão
          border={colors.red_primary} // cor da borda
          onPress={() => navigate.navigate("AddTiposCarnes")} //quando pressionar, ir para outra página
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //
  containerAddUtensilios: {
    backgroundColor: colors.white,
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
  boxCardImages: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    marginTop: -120,
  },
});

export default PageAddUtensilios;
