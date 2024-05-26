import { useState,useEffect } from "react";
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
import Carnes0 from "../back/Carnes0";
import Bebidas from "../back/Bebidas"
import Convidados from "../back/Convidados"

const PageAddBebidas = () => {
    const navigate = useNavigation();

    // função para mudar cor no front
    const [activeRefri, setActiveRefri] = useState(false);  //refri
    const [activeSuco, setActiveSuco] = useState(false); // suco
    const [activeCerveja, setActiveCerveja] = useState(false); // cerveja
    const [activeAgua, setActiveAgua] = useState(false); // agua
    
    const [error, setError] = useState("");

    useEffect(() => {
      const {refrigerante, suco, cerveja, agua} = Bebidas.getValores()
      console.log(refrigerante, suco, cerveja, agua)

      setActiveRefri(refrigerante)
      setActiveSuco(suco)
      setActiveCerveja(cerveja)
      setActiveAgua(agua)

      console.log(Carnes0.getValores())
    }, [setActiveRefri, setActiveSuco, setActiveCerveja, setActiveAgua]);

    function toggleRefrigerante(){
      Bebidas.toggleRefrigerante()
      setActiveRefri(!activeRefri)
    }

    function toggleSuco(){
      Bebidas.toggleSuco()
      setActiveSuco(!activeSuco)
    }

    function toggleCerveja(){
      Bebidas.toggleCerveja()
      setActiveCerveja(!activeCerveja)
    }

    function toggleAgua(){
      Bebidas.toggleAgua()
      setActiveAgua(!activeAgua)
    }

    function proximo() {
      try {
        if (activeRefri == true || activeSuco == true || activeCerveja == true || activeAgua == true) {
          navigate.navigate("AddAcompanhamento"); 
        } else {
          setError("Um churrasco precisa de bebidas!!")
        }
      } catch (error) {
        setError(error.message);
      }
    }

    function voltar () {
      navigate.navigate('PageAddCarnes');
    }




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
          onPress={() => toggleRefrigerante() } // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeSuco} // Estado ativo do botão
          icon={icons.suco_black} // Ícone quando não está ativo
          iconHover={icons.suco_white} // Ícone quando está ativo
          title={"Suco"} // Título do botão
          onPress={() => toggleSuco() } // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeCerveja} // Estado ativo do botão
          icon={icons.cerveja_black} // Ícone quando não está ativo
          iconHover={icons.cerveja_white} // Ícone quando está ativo
          title={"Cerveja"} // Título do botão
          onPress={() => toggleCerveja() } // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeAgua} // Estado ativo do botão
          icon={icons.agua_black} // Ícone quando não está ativo
          iconHover={icons.agua_white} // Ícone quando está ativo
          title={"Água"} // Título do botão
          onPress={() => toggleAgua() } // Função a ser chamada quando o botão é pressionado
        />
      </View>
      {/* BOTÃO DE AVANÇAR */}
      <View style={styles.cardButton}>
        <Button
          text="Avançar" // Titulo do botão
          backgound={colors.red_primary} // Cor de fundo do botão
          color={colors.white} // cor do botão
          border={colors.red_primary}
          onPress={proximo}
          // onPress={() => navigate.navigate("AddAcompanhamento")}
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
