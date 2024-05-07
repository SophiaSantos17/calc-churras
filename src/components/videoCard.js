import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView} from 'react-native-webview';

const VideoCard = ({url}) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview: {
    width: 350,
    height: 200,
    marginTop: 20,
  },
});

export default VideoCard;
