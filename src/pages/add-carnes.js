import { useState, useEffect} from "react";

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
import { Alert } from 'react-native';


// import do back
import Carnes0 from "../back/Carnes0"
import Convidados from "../back/Convidados"

const PageAddCarnes = () => {

  const navigate = useNavigation();
  
  // função para mudar cor no front
  const [activeBoi, setActiveBoi] = useState(false);
  const [activePorco, setActivePorco] = useState(false);
  const [activeFrango, setActiveFrango] = useState(false);
  
  const [bovina, setBovina] = useState(0)
  const [suina, setSuina] = useState(0)
  const [frango, setFrango] = useState(0)
  const [error, setError] = useState("");


  

    useEffect(() => {
      Carnes0.bovina = bovina;
      Carnes0.suina = suina;
      Carnes0.frango = frango;
    }, [bovina, suina, frango]);



  //   function proximo () {
  //     Carnes0.bovina
  //     Carnes0.suina
  //     Carnes0.frango 
  //     if( bovina || suina || frango ) {
  //       navigate.navigate('PageAddTipoCarnes');
  //     } else {
        
  //       Alert.alert('Um churrasco precisa de carne!', 'Selecione algum tipo de carne.')
  //     }
  //   }

  function proximo() {
    try {
      if (bovina === true || suina === true || frango === true) {
        navigate.navigate("PageAddTipoCarnes");
      } else {
        setError("Um churrasco precisa de carne!!");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  

  

  function voltar () {
    navigate.navigate('PageAddPeople'); 
  }

  // function calcularCarne (){
  //   if (Carnes.bovina = true){
  //     qtdCarneBHomens = Convidados.homens * 600;
  //     qtdCarneBMulheres = Convidados.mulheres * 400;
  //     qtdCarneBCriancas = Convidados.criancas * 250;
  //   }
  //   if (Carnes.suina = true){
  //     qtdCarneSHomens = Convidados.homens * 400;
  //     qtdCarneSMulheres = Convidados.mulheres * 200;
  //     qtdCarneSCriancas = Convidados.criancas * 100;
  //   }
  //   if (Carnes.frango = true){
  //     qtdCarneFHomens = Convidados.homens * 300;
  //     qtdCarneFMulheres = Convidados.mulheres * 150;
  //     qtdCarneFCriancas = Convidados.criancas * 75;
  //   }
  // }


  // front da página
  return (
    <View style={styles.containerAddCarnes}>
      {/* HEADER */}
      <TopBar
        color_button={"black"} // Cor da setda de volta
        title={"Carnes"} // Titulo 
        subtitle={"Escolha a quantidade que desejar"} // Subtitulo
      />
      {/* BOTÕES DE SELEÇÃO */}
      <View style={styles.boxCardImages}>
        <CardImage
          active={activeBoi} // Estado ativo do botão
          icon={icons.boi_black} // Ícone quando não está ativo
          iconHover={icons.boi_white} // Ícone quando está ativo
          title={"Bovina"} // Título do botão
          onPress={() => setActiveBoi(!activeBoi)} // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activePorco} // Estado ativo do botão
          icon={icons.porco_black} // Ícone quando não está ativo
          iconHover={icons.porco_white} // Ícone quando está ativo
          title={"Suína"} // Título do botão
          onPress={() => setActivePorco(!activePorco)} // Função a ser chamada quando o botão é pressionado
        />
        <CardImage
          active={activeFrango} // Estado ativo do botão
          icon={icons.frango_black} // Ícone quando não está ativo
          iconHover={icons.frango_white} // Ícone quando está ativo
          title={"Frango"} // Título do botão
          onPress={() => setActiveFrango(!activeFrango)} // Função a ser chamada quando o botão é pressionado
        />
      </View>
      <View style={styles.cardButton}>
        <Button
          text="Avançar" // Titulo do botão
          backgound={colors.red_primary} // Cor de fundo do botão
          color={colors.white} // cor do botão
          border={colors.red_primary}
          onPress={proximo}

        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // 
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
