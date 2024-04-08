import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextInter from "../styles/Text";
import colors from "../styles/colors";
import values from "../styles/values";
import icons from "../styles/icons";
import fonts from "../styles/fonsts";

const CardEvent = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topSize}>
        <TextInter text={"Simulação"} estilo={styles.titleCard} />
        <TouchableOpacity>
          <Image source={icons.next} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSize}>
        <View style={styles.cardInfo}>
          <Image source={icons.woman_black} style={styles.iconImage} />
          <TextInter estilo={styles.value} text={"1"} />
        </View>
        <View style={styles.cardInfo}>
          <Image source={icons.man_black} style={styles.iconImage} />
          <TextInter estilo={styles.value} text={"1"} />
        </View>
        <View style={styles.cardInfo}>
          <Image source={icons.kid_black} style={styles.iconImage} />
          <TextInter estilo={styles.value} text={"1"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 130,
    elevation: 7,
    backgroundColor: colors.white,
    borderRadius: values.borderRadius,
    padding: 20,
    marginVertical: 10,
    
  },
  topSize: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleCard: {
    color: colors.red_primary,
    fontWeight: fonts.semi,
    fontSize: fonts.md,
  },
  bottomSize: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  cardInfo: {
    width: 65,
    height: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    elevation: 4,
    backgroundColor: colors.white,
    marginRight: 20,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  value: {
    color: colors.black,
    fontWeight: fonts.semi,
    fontSize: fonts.md,
  },
});

export default CardEvent;
