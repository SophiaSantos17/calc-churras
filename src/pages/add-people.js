import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

// import dos componentes prontos
import TextInter from "../styles/Text";
import colors from "../styles/colors";
import CardAddPeople from "../components/cardAddPeople";
import Button from "../components/button";

// import dos valores para estilo
import values from "../styles/values";
import icons from "../styles/icons";
import fonts from "../styles/fonsts";

const PageAddPeople = () => {
  const navigate = useNavigation();

  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
  };

  const handleSub = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <View style={styles.constainerAddPeople}>
      <View style={styles.containerTopBar}>
        <View style={styles.sizeButton}>
          <TouchableOpacity style={styles.buttonBack}>
            <Image source={icons.arrow_back_white} style={styles.iconBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.sixeText}>
          <TextInter text={"Vamos Começar!"} estilo={styles.titleTopBar} />
          <TextInter text={"Participantes"} estilo={styles.title} />
          <TextInter
            text={"Selecione a quantidade de participantes"}
            estilo={styles.subtitle}
          />
        </View>
      </View>

      <View style={styles.boxCards}>
        <CardAddPeople
          text={"Homens"}
          icon={icons.add_man_white}
          iconsAdd={icons.add_white}
          iconMenus={icons.menos_white}
          functionAdd={handleAdd}
          functionSub={handleSub}
          value={value}
        />
        <CardAddPeople
          text={"Homens"}
          icon={icons.add_woman_white}
          iconsAdd={icons.add_white}
          iconMenus={icons.menos_white}
          functionAdd={handleAdd}
          functionSub={handleSub}
          value={value}
        />
        <CardAddPeople
          text={"Mulheres"}
          icon={icons.add_kid_white}
          iconsAdd={icons.add_white}
          iconMenus={icons.menos_white}
          functionAdd={handleAdd}
          functionSub={handleSub}
          value={value}
        />
        <CardAddPeople
          text={"Quantos Bebem?"}
          icon={icons.cerveja_white}
          iconsAdd={icons.add_white}
          iconMenus={icons.menos_white}
          functionAdd={handleAdd}
          functionSub={handleSub}
          value={value}
        />
        <CardAddPeople
          text={"Participantes"}
          icon={icons.people_white}
          value={value}
        />
      </View>
      <View style={styles.boxButton}>
        <Button
          text={"Avançar"}
          color={colors.red_primary}
          border={colors.white}
          backgound={colors.white}
          onPress={() => navigate.navigate("AddCarnes")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // PAGE -------------------------------------------------
  constainerAddPeople: {
    backgroundColor: colors.red_primary,
    height: values.full,
  },

  // TOP BAR -------------------------------------------------
  containerTopBar: {
    width: values.full,
    marginTop: 70,
    flexDirection: "column",
  },
  sizeButton: {
    width: values.fifteen_percent,
    height: 50,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  sixeText: {
    width: values.eightyFive_percent,
    height: "auto",
    justifyContent: "center",
    paddingLeft: 30,
  },
  iconBtn: {
    width: 40,
    height: 40,
  },
  titleTopBar: {
    fontSize: 27,
    fontWeight: fonts.semi,
    color: colors.white,
  },

  title: {
    paddingTop: 20,
    color: colors.white,
    fontSize: fonts.md,
  },
  subtitle: {
    color: colors.dark_white,
    fontWeight: "normal",
  },

  // caixa com os cards -------------------------------------------------
  boxCards: {
    display: "flex",
    flexWrap: "wrap",
    width: values.full,
    height: "57%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 30,
  },

  // posição button ------------------------------------------------------
  boxButton: {
    justifyContent: "center",
    alignItems: "center",
    width: values.full,
  },
});

export default PageAddPeople;