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
import { Alert } from 'react-native';


// import do back
import Carnes from "../back/Carnes"
import Convidados from "../back/Convidados"

const PageAddCarnes = () => {
  
  // função para mudar cor no front
  const [activeBoi, setActiveBoi] = useState(false);
  const [activePorco, setActivePorco] = useState(false);
  const [activeFrango, setActiveFrango] = useState(false);
  
  const [bovina, setBovina] = useState(0)
  const [suina, setSuina] = useState(0)
  const [frango, setFrango] = useState(0)
  const [picanha, setPicanha] = useState(false)
  const [maminha, setMaminha] = useState(false)
  const [costela, setCostela] = useState(false)
  const [pernil, setPernil] = useState(false)
  const [linguiça, setLinguica] = useState(false)
  const [costelinha, setCostelinha] = useState(false)
  const [asa, setAsa] = useState(false)
  const [peito, setPeito] = useState(false)
  const [coxa, setCoxa] = useState(false)
  
      const navigate = useNavigation();{

    function proximo () {
      Carnes.bovina['Picanh a'] = picanha ? true : false 
      Carnes.bovina['Maminha'] = maminha ? true : false 
      Carnes.bovina['Costela'] = costela ? true : false 
      Carnes.suina['Pernil'] = pernil ? true : false 
      Carnes.suina['Linguiça'] = linguiça ? true : false 
      Carnes.suina['Costelinha'] = costelinha? true : false
      Carnes.frango['Asa'] = asa? true : false 
      Carnes.frango['Peito'] = peito ? true : false 
      Carnes.frango['Coxa'] = coxa? true : false 
    }

    if( bovina || suina || frango || picanha || maminha || costela || pernil || linguiça || costelinha || asa || peito || coxa){
      navigate.navigate('PageAddTipoCarnes');
    }else{
      Alert.alert('Um churrasco precisa de carne!', 'Selecione algum tipo de carne.')
    }
  }

  function voltar () {
    navigate.navigate('PageAddPeople'); 
  }

function calcularCarne (){
  if (Carnes.bovina = true){
    qtdCarneBHomens = Convidados.homens * 600;
    qtdCarneBMulheres = Convidados.mulheres * 400;
    qtdCarneBCriancas = Convidados.criancas * 250;
  }
  if (Carnes.suina = true){
    qtdCarneSHomens = Convidados.homens * 400;
    qtdCarneSMulheres = Convidados.mulheres * 200;
    qtdCarneSCriancas = Convidados.criancas * 100;
  }
  if (Carnes.frango = true){
    qtdCarneFHomens = Convidados.homens * 300;
    qtdCarneFMulheres = Convidados.mulheres * 150;
    qtdCarneFCriancas = Convidados.criancas * 75;
  }
}


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
          onPress={() => navigate.navigate("AddTiposCarnes")}
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
