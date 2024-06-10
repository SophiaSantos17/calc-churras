import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Modal, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

//import componentes prontos
import TopBar from "../components/topBar";
import Button from "../components/button";
import TextInter from "../styles/Text";



// import valores
import colors from "../styles/colors";
import values from "../styles/values";

// import das classes
import Carnes0 from "../back/Carnes0"
import Convidados from "../back/Convidados"
import  Calculadora  from "../back/Calculadora";

const PageNotaFiscal = () => {
  const navigate = useNavigation();

  // useEffect(() => {
  //   Calculadora.calcularCarnes(Carnes0.bovina, Carnes0.suina, Carnes0.frango);
  //   console.log(Calculadora.calcularCarnes())

  // }) 


  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <TopBar
            color_button={"black"}
            title={"Partiu para um churrasco épico"}
            subtitle={
              "Os valores são estimados. É essencial conhecer os participantes e suas preferências individuais."
            }
            subtitleColor={colors.black}
            titleColor={colors.black}
            style={{
              fontSize: 30,
              marginTop: 40,
              marginRight: 30,
              marginBottom: 10,
            }}
          />
        </View>

        {/* box dos dados de pessoas */}
        <View style={styles.boxInfos}>
          <View style={styles.titleDados}>
            <TextInter text={"Pessoas"} estilo={styles.texto1} />
            <View style={styles.divLinha}></View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Homens"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={Convidados.getValores().homens} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Mulheres"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={Convidados.getValores().mulheres} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Crianças"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={Convidados.getValores().criancas} estilo={styles.dados} />
            </View>
          </View>
        </View>

        {/* box de dados de carnes */}
        <View style={styles.boxInfos}>
          <View style={styles.titleDados}>
            <TextInter text={"Carnes"} estilo={styles.texto1} />
            <View style={styles.divLinha}></View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Bovina"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0kg"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Suína"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0kg"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Frango"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0kg"} estilo={styles.dados} />
            </View>
          </View>
        </View>

        {/* box de dados dos cortes das carnes */}
        {/* <View style={styles.boxInfos}>
          <View style={styles.titleDadosCarnes}>
            <TextInter text={"Cortes"} estilo={styles.cortes} />
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Picanha"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0kg"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Maminha"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0kg"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Asa"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0kg"} estilo={styles.dados} />
            </View>
          </View>
        </View> */}

        {/* box de dados de bebidas */}
        <View style={styles.boxInfos}>
          <View style={styles.titleDados}>
            <TextInter text={"Bebidas"} estilo={styles.texto1} />
            <View style={styles.divLinha}></View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Cerveja"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0 un"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Agua"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0L"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Suco"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0.0L"} estilo={styles.dados} />
            </View>
          </View>
        </View>

        {/* box de dados de acompanhamentos */}
        <View style={styles.boxInfos}>
          <View style={styles.titleDadosAcompanhamentos}>
            <TextInter
              text={"Acompanhamentos"}
              estilo={[styles.texto1, { width: "70%" }]}
            />
            <View style={styles.divLinhaAcompanhamentos}></View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Arroz"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0g"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Farofa"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0g"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Pão Francês"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0 un"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Pão de Alho"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0 un"} estilo={styles.dados} />
            </View>
          </View>
        </View>

        {/* box de dados de utensilhos */}
        <View style={styles.boxInfos}>
          <View style={styles.titleDados}>
            <TextInter
              text={"Utensilios"}
              estilo={[styles.texto1, { width: "40%" }]}
            />
            <View style={[styles.divLinha, { width: "50%" }]}></View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Carvão"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0g"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Prato"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0 un"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Copos"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0 un"} estilo={styles.dados} />
            </View>
          </View>
        </View>

        {/* box de dados de informações */}
        {/* <View style={styles.boxInfos}>
          <View style={styles.titleDados}>
            <TextInter
              text={"Informações"}
              estilo={[styles.texto1, { width: "50%" }]}
            />
            <View style={[styles.divLinha, { width: "40%" }]}></View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Carvão"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0g"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Prato"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0 un"} estilo={styles.dados} />
            </View>
          </View>
          <View style={styles.boxDados}>
            <View style={styles.viewStyleBottom1}>
              <TextInter text={"Kit Talher"} estilo={styles.dados} />
            </View>
            <View style={styles.viewStyleBottom2}>
              <TextInter text={"0 un"} estilo={styles.dados} />
            </View>
          </View>
        </View> */}
        <View style={styles.centeredModal}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredModal}>
              <View style={styles.modalStyle}>
                <TextInter
                  text={"Informe antes de salvar"}
                  estilo={styles.textModal}
                />
                <TextInput
                  style={styles.input}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Titulo"
                  placeholderTextColor={"#D61616"}
                />
                <TextInput
                  style={styles.input}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Lugar"
                  placeholderTextColor={"#D61616"}
                />
                <TextInput
                  style={[styles.input, { marginBottom: 15 }]}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Dono"
                  placeholderTextColor={"#D61616"}
                />
                <Button
                  text="Cancelar"
                  color={colors.red_primary}
                  backgound={colors.white}
                  border={colors.red_primary}
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{ width: "100%", height: 40 }}
                />
                <Button
                  text="Salvar"
                  color={colors.white}
                  backgound={colors.red_primary}
                  border={colors.red_primary}
                  onPress={() => {
                    navigate.navigate("Eventos");
                    setModalVisible(!modalVisible);
                  }}
                  style={{ width: "100%", height: 40 }}
                />
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.subContainer}>
          <Button
            text="Recalcular"
            color={colors.red_primary}
            backgound={colors.white}
            border={colors.red_primary}
            onPress={() => navigate.navigate("AddPeople")}
          />
          <Button
            text="Salvar"
            color={colors.white}
            backgound={colors.red_primary}
            border={colors.red_primary}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </ScrollView>
    </View>

    // <View>
    // { {result && (
    //   <View style={styles.result}>
    //   <Text style={styles.resultText}>Homens: {result.homens}g</Text>
    //   <Text style={styles.resultText}>Mulheres: {result.mulheres}g</Text>
    //   <Text style={styles.resultText}>Total: {result.total}g</Text>
    //   </View>
    // )} }
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
  },

  scrollView: {
    flexGrow: 1,
    alignItems: "center",
  },

  boxInfos: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleDados: {
    alignItems: "center",
    width: "80%",
    paddingTop: 30,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
  },

  titleDadosAcompanhamentos: {
    alignItems: "center",
    width: "80%",
    paddingTop: 30,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
  },

  texto1: {
    fontSize: 25,
    color: colors.red_primary,
    width: "30%",
  },

  divLinha: {
    width: "60%",
    borderColor: colors.red_primary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },

  divLinhaAcompanhamentos: {
    width: "20%",
    borderColor: colors.red_primary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },

  boxDados: {
    width: "72%",
    flexDirection: "row",
  },

  viewStyleBottom1: {
    alignItems: "flex-start",
    borderWidth: 0,
    borderBottomColor: colors.red_primary,
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    width: "50%",
    textAlign: "left",
  },

  viewStyleBottom2: {
    alignItems: "flex-end",
    borderColor: colors.red_primary,
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    width: "50%",
  },

  dados: {
    fontSize: 20,
    color: colors.black,
    textAlign: "left",
  },

  cortes: {
    color: colors.black,
    fontSize: 25,
  },

  titleDadosCarnes: {
    alignItems: "center",
    width: "80%",
    paddingTop: 30,
    paddingBottom: 5,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  subContainer: {
    gap: 8,
    width: "90%",
    paddingVertical: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredModal: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    blurredView: {
      // For me android blur did not work until applying a background color:
      backgroundColor: 'white',
    },
  },
  modalStyle: {
    width: "95%",
    backgroundColor: colors.white,
    padding: 20,
    gap: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.red_primary,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.dark_white,
    height: 35,
    fontSize: 20,
  },
  textModal: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 1,
  },
});

export default PageNotaFiscal;
// ...................................................



// import React from 'react';
// import { View, ScrollView } from 'react-native';
// // import TopBar from '../components/TopBar';
// import TextInter from '../components/TextInter';
// import colors from '../styles/colors';
// import Convidados from '../back/Convidados';

// const PageNotaFiscal = () => {
//   const result = {
//     homens: Convidados.getValores().homens,
//     mulheres: Convidados.getValores().mulheres,
//     criancas: Convidados.getValores().criancas,
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View>
//           <TopBar
//             color_button={"black"}
//             title={"Partiu para um churrasco épico"}
//             subtitle={
//               "Os valores são estimados. É essencial conhecer os participantes e suas preferências individuais."
//             }
//             subtitleColor={colors.black}
//             titleColor={colors.black}
//             style={{
//               fontSize: 30,
//               marginTop: 40,
//               marginRight: 30,
//               marginBottom: 10,
//             }}
//           />
//         </View>

//         {/* box dos dados de pessoas */}
//         <View style={styles.boxInfos}>
//           <View style={styles.titleDados}>
//             <TextInter text={"Pessoas"} estilo={styles.texto1} />
//             <View style={styles.divLinha}></View>
//           </View>
//           <View style={styles.boxDados}>
//             <View style={styles.viewStyleBottom1}>
//               <TextInter text={"Homens"} estilo={styles.dados} />
//             </View>
//             <View style={styles.viewStyleBottom2}>
//               <TextInter text={result.homens} estilo={styles.dados} />
//             </View>
//           </View>
//           <View style={styles.boxDados}>
//             <View style={styles.viewStyleBottom1}>
//               <TextInter text={"Mulheres"} estilo={styles.dados} />
//             </View>
//             <View style={styles.viewStyleBottom2}>
//               <TextInter text={result.mulheres} estilo={styles.dados} />
//             </View>
//           </View>
//           <View style={styles.boxDados}>
//             <View style={styles.viewStyleBottom1}>
//               <TextInter text={"Crianças"} estilo={styles.dados} />
//             </View>
//             <View style={styles.viewStyleBottom2}>
//               <TextInter text={result.criancas} estilo={styles.dados} />
//             </View>
//           </View>
//         </View>

//         {/* box de dados de carnes */}
//         <View style={styles.boxInfos}>
//           <View style={styles.titleDados}>
//             <TextInter text={"Carnes"} estilo={styles.texto1} />
//             <View style={styles.divLinha}></View>
//           </View>
//           <View style={styles.boxDados}>
//             <View style={styles.viewStyleBottom1}>
//               <TextInter text={"Total Homens"} estilo={styles.dados} />
//             </View>
//             <View style={styles.viewStyleBottom2}>
//               <TextInter text={`${result.homens / 1000}kg`} estilo={styles.dados} />
//             </View>
//           </View>
//           <View style={styles.boxDados}>
//             <View style={styles.viewStyleBottom1}>
//               <TextInter text={"Total Mulheres"} estilo={styles.dados} />
//             </View>
//             <View style={styles.viewStyleBottom2}>
//               <TextInter text={`${result.mulheres / 1000}kg`} estilo={styles.dados} />
//             </View>
//           </View>
//           <View style={styles.boxDados}>
//             <View style={styles.viewStyleBottom1}>
//               <TextInter text={"Total"} estilo={styles.dados} />
//             </View>
//             <View style={styles.viewStyleBottom2}>
//               <TextInter text={`${(result.homens + result.mulheres) / 1000}kg`} estilo={styles.dados} />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   scrollView: {
//     paddingVertical: 20,
//   },
//   boxInfos: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: colors.white,
//     borderRadius: 5,
//   },
//   titleDados: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   texto1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: colors.black,
//   },
//   divLinha: {
//     flex: 1,
//     height: 1,
//     backgroundColor: colors.gray,
//     marginLeft: 10,
//   },
//   boxDados: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 5,
//   },
//   viewStyleBottom1: {
//     flex: 1,
//   },
//   viewStyleBottom2: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   dados: {
//     fontSize: 16,
//     color: colors.black,
//   },
// };

// export default PageNotaFiscal;
