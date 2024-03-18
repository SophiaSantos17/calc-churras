import React from "react";
import { ImageBackground, StyleSheet, View,} from "react-native";
// import Button from "./scr/components/button";
// import Header from "../components/header";
import TextInter from "../styles/Text";
// import icons from "../styles/icons";
import colors from "../styles/colors";

const Home = () => {

    // const [modalVisible, setModalVisible] = useState(true);

    return( 
        
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/fundo.png')} resizeMode="contain" style={styles.ImageBackground} >
                        <TextInter>oiiiiiiii</TextInter>
                </ImageBackground>
            </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.black,
        // justifyContent: 'flex-end',

    },

    ImageBackground: {
        flex: 1,
        // width: "99%",
        justifyContent: "flex-end", // Alinhar a imagem à direita
        alignItems: "flex-end", // Alinhar a imagem à direita
        
    },
});

export default Home;