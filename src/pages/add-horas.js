// .........................................
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

//import componentes prontos
import TopBar from "../components/topBar";
import CardText from "../components/cardText";
import Button from "../components/button";

// import valores
import colors from "../styles/colors";
import values from "../styles/values";
import Convidados from "../back/Convidados";
import Carnes from "../back/Carnes";
import carnesAtivas from "../back/Carnes";

const PageAddHoras = () => {
  const navigate = useNavigation();

  // Estado para controlar a opção selecionada
  const [selectedOption, setSelectedOption] = useState(null);
  const [numHomens, setNumHomens] = useState();
  const [numMulheres, setNumMulheres] = useState();
  const [numCriancas, setNumCriancas] = useState();
  const [listasCarnesAtivas, setCarnesAtivas] = useState();
  const [result, setResult] = useState(null);

  useEffect(() => {

    ( function definirNUm(){

      const {homens, mulheres, criancas} = Convidados.getValores()
      setNumHomens(homens)
      setNumMulheres(mulheres)
      setNumCriancas(criancas)
      // setCarnesAtivas(Carnes.retornarListas())
      console.log(Carnes.retornarListas())
    })()


  })
  function listarAtivos() {
    let ativos = [];

    // const {bovina , suina , frango} = carnesAtivas
    // console.log(carnesAtivas)
    // // Verifica bovina
    // for (const carne in bovina) {
    //     if (bovina[carne]) {
    //         ativos.push(carne);
    //     }
    // }

    // // Verifica suina
    // for (const carne in suina) {
    //     if (suina[carne]) {
    //         ativos.push(carne);
    //     }
    // }

    // // Verifica frango
    // for (const carne in frango) {
    //     if (frango[carne]) {
    //         ativos.push(carne);
    //     }
    // }
    console.log(ativos)

    return ativos;
}


  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === null) {
      Alert.alert("Aviso", "Por favor, selecione uma opção antes de continuar.");
    } else {
      const calculationResult = calculateMeat();
      navigate.navigate("NotaFiscal", { result: calculationResult });
    }
  };

  const calculateMeat = () => {
    const baseHomem = 600;
    const baseMulher = 400;
    const baseCrianca = 200;
    const additionalPer2Hours = 100;

    // const listaDeCarne = []
    console.log("CHAMOU")
    let hours = parseInt(selectedOption);


    let totalPeso = (baseHomem * numHomens) + (baseMulher * numMulheres) + (baseCrianca * numCriancas)

    totalPeso += additionalPer2Hours * hours



    // let additional = Math.floor((hours - 4) / 2) * additionalPer2Hours;

    // let meatHomens = numHomens * (baseHomem + additional);
    // let meatMulheres = numMulheres * (baseMulher + additional);

    

    const result =  totalPeso
    
    console.log(totalPeso)

    setResult(result);
    return result;
  };

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
  return (
    <View style={styles.container}>
      <View>
        <TopBar
          color_button={"white"}
          title={"Horas"}
          subtitle={"Selecione a quantidade de horas do churrasco"}
          subtitleColor={colors.white}
          titleColor={colors.white}
        />
      </View>
      <View style={styles.boxCardText}>
        <CardText
          width={"40%"}
          height={"25%"}
          text={"4 Horas"}
          background={selectedOption === '4' ? 'red' : 'red'}
          onPress={() => handleSelection('4')}
          active={selectedOption === '4'}
        />
        <CardText
          width={"40%"}
          height={"25%"}
          text={"6 Horas"}
          background={selectedOption === '6' ? 'red' : 'red'}
          onPress={() => handleSelection('6')}
          active={selectedOption === '6'}
        />
        <CardText
          width={"40%"}
          height={"25%"}
          text={"10 Horas"}
          background={selectedOption === '10' ? 'red' : 'red'}
          onPress={() => handleSelection('10')}
          active={selectedOption === '10'}
        />
        <CardText
          width={"40%"}
          height={"25%"}
          text={"12 Horas"}
          background={selectedOption === '12' ? 'red' : 'red'}
          onPress={() => handleSelection('12')}
          active={selectedOption === '12'}
        />
      </View>
      <View style={styles.cardButton}>
        <Button
          text="Avançar"
          backgound={colors.white}
          color={colors.red_primary}
          border={colors.red_primary}
          onPress={handleNext}
        />
      </View>
      {result && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Homens: {result.homens}g</Text>
          <Text style={styles.resultText}>Mulheres: {result.mulheres}g</Text>
          <Text style={styles.resultText}>Total: {result.total}g</Text>
        </View>
      )}
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
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    color: colors.white,
    fontSize: 18,
  },
});

export default PageAddHoras;
