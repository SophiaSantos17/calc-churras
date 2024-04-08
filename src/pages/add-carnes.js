import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, View } from "react-native";

// Importando componentes prontos
import TopBar from "../components/topBar";
import CardImage from "../components/cardImage";

// importanto elementos estáticos para estilização
import icons from "../styles/icons";
import Button from "../components/button";
import colors from "../styles/colors";
import values from "../styles/values";

const PageAddCarnes = () => {
    const navigate = useNavigation();
    const [activeBoi, setActiveBoi] = useState(false);
    const [activePorco, setActivePorco] = useState(false);
    const [activeFrango, setActiveFrango] = useState(false);


  // front da página
  return (
    <View style={styles.containerAddCarnes}>
      {/* HEADER */}
      <TopBar
        color_button={"black"} // cor da setda de volta
        title={"Carnes"}
        subtitle={"Escolha a quantidade que desejar"}
      />
      {/* BOTÕES DE SELEÇÃO */}
      <View style={styles.boxCardImages}>
        <CardImage
          active={activeBoi} // Estado ativo do botão
          icon={icons.boi_black} // Ícone quando não está ativo
          iconHover={icons.boi_white} // Ícone quando passa o mouse (não parece relevante para React Native)
          title={"Bovina"} // Título do botão
          onPress={() => setActiveBoi(!activeBoi)} // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activePorco} // Estado ativo do botão
          icon={icons.porco_black} // Ícone quando não está ativo
          iconHover={icons.porco_white} // Ícone quando passa o mouse (não parece relevante para React Native)
          title={"Bovina"} // Título do botão
          onPress={() => setActivePorco(!activePorco)} // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeFrango} // Estado ativo do botão
          icon={icons.frango_black} // Ícone quando não está ativo
          iconHover={icons.frango_white} // Ícone quando passa o mouse (não parece relevante para React Native)
          title={"Bovina"} // Título do botão
          onPress={() => setActiveFrango(!activeFrango)} // Função a ser chamada quando o botão é pressionado
        />
      </View>
      <View style={styles.cardButton}>
        <Button
          text="Avançar"
          backgound={colors.red_primary}
          color={colors.white}
          border={colors.red_primary}
          onPress={() => navigate.navigate("")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAddCarnes: {
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

export default PageAddCarnes;
