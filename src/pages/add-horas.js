// import React, { useState } from "react";
// import { StyleSheet, View, ScrollView } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// // import TextInter from "../styles/Text";

// //import componentes prontod
// import TopBar from "../components/topBar";
// import CardText from "../components/cardText";
// import Button from "../components/button"

// // import valores
// import colors from "../styles/colors";
// import values from "../styles/values";

// const PageAddHoras = () => {
//   const navigate = useNavigation();

//   // funcao para mudar a cor no front
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSelection = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNext = () => {
//     if (selectedOption === null) {
//       Alert.alert("Aviso", "Por favor, selecione uma opção antes de continuar.");
//     } else {
//       navigate.navigate("NotaFiscal");
//     }
//   };

//   const calcularCarne = () => {
//     const baseHomem = 600;
//     const baseMulher = 400;
//     const additionalPer2Hours = 100;

//     let hours = parseInt(selectedOption);
//     let additional = Math.floor((hours - 4) / 2) * additionalPer2Hours;

//     let meatHomens = numHomens * (baseHomem + additional);
//     let meatMulheres = numMulheres * (baseMulher + additional);

//     setResult({
//       homens: meatHomens,
//       mulheres: meatMulheres,
//       total: meatHomens + meatMulheres
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <TopBar
//           color_button={"white"}
//           title={"Horas"}
//           subtitle={
//             "Selecione a quantidade de horas do churrasco"
//           }
//           subtitleColor={colors.white}
//           titleColor={colors.white}
//         />
//       </View>
//       <View style={styles.boxCardText}>
//         <CardText
//           width={"40%"}
//           height={"25%"}
//           text={"4 Horas"}
//           background={selectedOption === '4' ? 'red':'red'}
//           onPress={() => handleSelection('4')}
//           active={selectedOption === '4'}
//         />
//         <CardText
//           width={"40%"}
//           height={"25%"}
//           text={"6 Horas"}
//           background={selectedOption === '6' ? 'red':'red'}
//           onPress={() => handleSelection('6')}
//           active={selectedOption === '6'}

//         />
//         <CardText
//           width={"40%"}
//           height={"25%"}
//           text={"10 Horas"}
//           background={selectedOption === '10' ? 'red':'red'}
//           onPress={() => handleSelection('10')}
//           active={selectedOption === '10'}

//         />
//         <CardText
//           width={"40%"}
//           height={"25%"}
//           text={"12 Horas"}
//           background={selectedOption === '12' ? 'red':'red'}
//           onPress={() => handleSelection('12')}
//           active={selectedOption === '12'}

//         />
//       </View>
//       <View style={styles.cardButton}>
//         <Button
//           text="Avançar" // Titulo do botão
//           backgound={colors.white} // Cor de fundo do botão
//           color={colors.red_primary} // cor do botão
//           border={colors.red_primary} // cor da borda
//           onPress={() => navigate.navigate("NotaFiscal")} //quando pressionar, ir para outra página
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.red_primary,
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     height: values.full,
//   },

//   boxCardText: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 4,
//     justifyContent: "center",
//     marginTop: -120
//   },

//   cardButton: {
//     width: values.full,
//     justifyContent: "center",
//     alignItems: "center",
//     height: 150,
//   },
// });

// export default PageAddHoras;
// .........................................
import React, { useState } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

//import componentes prontos
import TopBar from "../components/topBar";
import CardText from "../components/cardText";
import Button from "../components/button";

// import valores
import colors from "../styles/colors";
import values from "../styles/values";

const PageAddHoras = () => {
  const navigate = useNavigation();

  // Estado para controlar a opção selecionada
  const [selectedOption, setSelectedOption] = useState(null);
  const [numHomens, setNumHomens] = useState(1);
  const [numMulheres, setNumMulheres] = useState(2);
  const [result, setResult] = useState(null);

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
    const additionalPer2Hours = 100;

    let hours = parseInt(selectedOption);
    let additional = Math.floor((hours - 4) / 2) * additionalPer2Hours;

    let meatHomens = numHomens * (baseHomem + additional);
    let meatMulheres = numMulheres * (baseMulher + additional);

    const result = {
      homens: meatHomens,
      mulheres: meatMulheres,
      total: meatHomens + meatMulheres
    };

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
      {/* {result && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Homens: {result.homens}g</Text>
          <Text style={styles.resultText}>Mulheres: {result.mulheres}g</Text>
          <Text style={styles.resultText}>Total: {result.total}g</Text>
        </View>
      )} */}
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
