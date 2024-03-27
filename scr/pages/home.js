import React from "react";
import { Image, StyleSheet, View,} from "react-native";
// import Button from "./scr/components/button";
// import Header from "../components/header";
import TextInter from "../styles/Text";
// import icons from "../styles/icons";
import colors from "../styles/colors";
import Button from "../components/button";
import values from "../styles/values";
import fonts from "../styles/fonsts";

const Home = () => {

    // const [modalVisible, setModalVisible] = useState(true);

    return( 
        
            <View style={styles.container}>
                <Image source={require('../assets/images/fundo.png')} style={styles.ImageBackground} >
                </Image>
                <View style={styles.containerInfo}>
                    <Image source={require('../assets/images/logo/logo_branco.png')} style={styles.logo}></Image>
                    <View style={styles.slogan}>
                        <TextInter estilo={styles.texto1} text={"Partiu,"}/>
                        <TextInter text={"Churras!"} estilo={styles.texto2} />
                    </View>
                    <View style={styles.subContainer}>
                        <Button text="Calcular" color={colors.red_primary} backgound={colors.white} border={colors.red_primary}/>
                        <Button text="Acessar" color={colors.white} backgound={colors.red_primary} border={colors.red_primary}/>
                    </View>
                </View>
                
            </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.black,
        width: "100%",
        

    },

    ImageBackground: {
        flex: 1,
        alignSelf: 'flex-end',


    },

    logo:{
        resizeMode:"contain",
        width: 300,
    },

    containerInfo:{
        position: "absolute",
        width:"100%",
        height:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-around'
    },

    texto1:{
        fontSize: 70,
        color: colors.white,
    },

    texto2:{
        fontSize: 70,
        color: colors.white,
        fontWeight: fonts.bold
    },

    slogan:{
        marginBottom: 200,
        alignItems: "flex-start",
        width: 300

    },

    subContainer:{
        gap: 8
    }
});

export default Home;