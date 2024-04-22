import { StyleSheet } from "react-native";
import TextInter from "../styles/Text";
import colors from "../styles/colors";

const ErrorMessage = ({ message }) => {
  return <TextInter text={message} estilo={styles.containerError} />;
};

const styles = StyleSheet.create({
  containerError: {
    width: "90%",
    height: "auto",
    color: colors.red_primary,
    borderWidth: 2,
    borderColor: colors.red_primary,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default ErrorMessage;
