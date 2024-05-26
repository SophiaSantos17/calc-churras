import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

// Importando componentes prontos
import TopBar from "../components/topBar";
import CardText from "../components/cardText";
import Button from "../components/button";

// importanto elementos estáticos para estilização
import colors from "../styles/colors";
import values from "../styles/values";
// import values from "../styles/values";

// import do back
import Acompanhamentos from "../back/Acompanhamentos";
import Bebidas from "../back/Bebidas";

const PageAddAcompanhamento = () => {
    const navigate = useNavigation();

  // função para mudar cor no front
    const [activeArroz, setActiveArroz] = useState(true); 
    const [activeFarofa, setactiveFarofa] = useState(true);
    const [activePFrances, setActivePFrances] = useState(true);
    const [activePaoAlho, setActivePaoAlho] = useState(false); // pão de alho
    const [error, setError] = useState("")
  
    useEffect(() => {
      const {arroz, farofa, pfrances, paoDeAlho} = Acompanhamentos.getValores()
      console.log(arroz, farofa, pfrances, paoDeAlho)


      setActiveArroz(arroz)
      setactiveFarofa(farofa)
      setActivePFrances(pfrances)
      setActivePaoAlho(paoDeAlho)

      console.log(Bebidas.getValores())
    }, [setActiveArroz, setactiveFarofa, setActivePFrances, setActivePaoAlho]);

    function toggleArroz(){
     Acompanhamentos.toggleArroz()
     setActiveArroz(!activeArroz)
    }

    function toggleFarofa(){
     Acompanhamentos.toggleFarofa()
      setactiveFarofa(!activeFarofa)
    }

    function togglePFrances(){
     Acompanhamentos.togglePFrances()
     setActivePFrances(!activePFrances)
    }

    function togglePaoDeAlho(){
      Acompanhamentos.togglePaoDeAlho()
      setActivePaoAlho(!activePaoAlho)
    }

    function proximo(){
      try{
       if (activeArroz == false || activeFarofa == false, activePFrances == false, activePaoAlho == false || activePaoAlho == true){
          navigate.navigate("AddUtensilios")
        } else {
          setError ("sla")
        }

      } catch (error) {
        setError(error.message);
      }
    }

    function voltar (){
      navigate.navigate("PageAddBebidas")
    }

  // front da página
  return (
    <View style={styles.containerAddAcompanhamento}>
      {/* HEADER */}
      <TopBar
        color_button={"white"} // Cor da setda de volta
        title={"Acompanhamentos"} // Titulo
        subtitle={
          "Arroz, farofa e pão são obrigatórios, mas os outros, escolha de acordo com sua preferência"
        } // Subtitulo
        subtitleColor={"white"}
        titleColor={'white'}
      />
      {/* BOTÕES DE SELEÇÃO */}
      <View style={styles.boxCardImages}>
        <CardText
          active={activeArroz}
          width={"40%"}
          height={70}
          text="Arroz"
          background={"red"}
        />
        <CardText
          width={"40%"}
          height={70}
          text="Farofa"
          background={"red"}
          active={activeFarofa}
        />
        <CardText
          width={"40%"}
          height={70}
          text="Pão Francês"
          background={"red"}
          active={activePFrances}
        />
        <CardText
          active={activePaoAlho}
          width={"40%"}
          height={70}
          text="Pão de Alho"
          background={"red"}
          onPress={() => togglePaoDeAlho() }
            // setActivePaoAlho(!activePaoAlho)}
          // active={activePaoAlho}
        />
      </View>
      {/* BOTÃO DE AVANÇAR */}
      <View style={styles.cardButton}>
        <Button
          text="Avançar" // Titulo do botão
          backgound={colors.white} // Cor de fundo do botão
          color={colors.red_primary} // cor do botão
          border={colors.red_primary}
          onPress={proximo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //
  containerAddAcompanhamento: {
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

export default PageAddAcompanhamento;
