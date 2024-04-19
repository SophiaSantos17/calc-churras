import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from "react-native";

// Importando componentes prontos
import TopBar from "../components/topBar";
import CardImage from "../components/cardImage";
import Button from "../components/button";

// importanto elementos estáticos para estilização
import icons from "../styles/icons";
import colors from "../styles/colors";
import values from "../styles/values";

// import do back

const PageAddBebidas = () => {
    const navigate = useNavigation();

    // função para mudar cor no front
    const [activeRefri, setActiveRefri] = useState(false);  //refri
    const [activeSuco, setActiveSuco] = useState(false); // suco
    const [activeCerveja, setActiveCerveja] = useState(false); // cerveja
    const [activeAgua, setActiveAgua] = useState(false); // agua



  // front da página
  return (
    <View style={styles.containerAddBebidas}>
      {/* HEADER */}
      <TopBar
        color_button={"black"} // Cor da setda de volta
        title={"Bebidas"} // Titulo 
        subtitle={"Escolha a quantidade que desejar"} // Subtitulo
      />
      {/* BOTÕES DE SELEÇÃO */}
      <View style={styles.boxCardImages}>
        <CardImage
          active={activeRefri} // Estado ativo do botão
          icon={icons.refri_black} // Ícone quando não está ativo
          iconHover={icons.refri_white} // Ícone quando está ativo
          title={"Refrigerante"} // Título do botão
          onPress={() => {setActiveRefri(!activeRefri)}} // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeSuco} // Estado ativo do botão
          icon={icons.suco_black} // Ícone quando não está ativo
          iconHover={icons.suco_white} // Ícone quando está ativo
          title={"Suco"} // Título do botão
          onPress={() => setActiveSuco(!activeSuco)} // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeCerveja} // Estado ativo do botão
          icon={icons.cerveja_black} // Ícone quando não está ativo
          iconHover={icons.cerveja_white} // Ícone quando está ativo
          title={"Cerveja"} // Título do botão
          onPress={() => setActiveCerveja(!activeCerveja)} // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeAgua} // Estado ativo do botão
          icon={icons.agua_black} // Ícone quando não está ativo
          iconHover={icons.agua_white} // Ícone quando está ativo
          title={"Água"} // Título do botão
          onPress={() => setActiveAgua(!activeAgua)} // Função a ser chamada quando o botão é pressionado
        />
      </View>
      {/* BOTÃO DE AVANÇAR */}
      <View style={styles.cardButton}>
        <Button
          text="Avançar" // Titulo do botão
          backgound={colors.red_primary} // Cor de fundo do botão
          color={colors.white} // cor do botão
          border={colors.red_primary}
          onPress={() => navigate.navigate("AddAcompanhamento")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // 
  containerAddBebidas: {
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

export default PageAddBebidas;
