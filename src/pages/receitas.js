import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/header";
import colors from "../styles/colors";
import TextInter from "../styles/Text";
import VideoCard from "../components/videoCard";

const PageReceitas = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.boxInfo}>
          <TextInter text={"Receitas"} estilo={styles.title} />
          <TextInter
            text={"Aqui estão algumas receitas, fique à vontade:"}
            estilo={styles.subtitle}
          />
        </View>

        <View style={styles.videoCard}>
          <VideoCard url={'https://www.youtube.com/embed/L-DTcYqe4nI?si=_2au2NPBzg_MGlMu'}/>
          <VideoCard url={'https://www.youtube.com/embed/ebVV2_QauDY?si=sXZDcW3MZ4uYwTDM'}/>
          <VideoCard url={'https://www.youtube.com/embed/EHIy8IOZSpw?si=Y5k4AYmfC7hOcVJ6'}/>
          <VideoCard url={'https://www.youtube.com/embed/8Wu1emqypFg?si=vrV7tPK6oNDfwzl9'}/>
          <VideoCard url={'https://www.youtube.com/embed/XU4b2YxsrKg?si=c9TLjR1K-wYSdlwN'}/>
          <VideoCard url={'https://www.youtube.com/embed/0gClh5PO-Lk?si=CLskUUwEo0N4zEDB'}/>
          <VideoCard url={'https://www.youtube.com/embed/mtzHe6LbQcQ?si=NCrzd5OMLitE3RWS'}/>
          <VideoCard url={'https://www.youtube.com/embed/yurBZw-_1ws?si=7f2fRpQ9ihhJ6OeQ'}/>
          <VideoCard url={'https://www.youtube.com/embed/6fLPszVB3T4?si=KaM8dMlsmTvfPh1B'}/>
          
        </View>
      </ScrollView>
    </View>
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
  boxInfo: {
    margin: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
  },
  subtitle: {
    fontSize: 15,
  },
  videoCard: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PageReceitas;
