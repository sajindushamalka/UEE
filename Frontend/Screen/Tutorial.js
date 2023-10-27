import React from 'react';
import {styles} from '../stylesheets/Tutorialstyle';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';

const Tutorial = ({route}) => {
  const {exerciseName} = route.params;
  const firstTwoWords = exerciseName.split(' ').slice(0, 2).join(' ');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./image/thirdpage_image.png')}
        style={styles.backgroundImage}>
        <Text style={styles.text}>{firstTwoWords}</Text>
        <View style={styles.videoContainer}>
          <WebView
            source={{
              uri: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
            }}
            style={styles.video}
          />
        </View>
        <View style={styles.text2Container}>
          <Text style={styles.text2}>
            Exercise is an essential component of a healthy lifestyle. Regular
            physical activity offers a wide range of physical, mental, and
            emotional benefits. First and foremost, exercise helps to maintain
            and improve physical fitness. It strengthens muscles, enhances
            cardiovascular health, and promotes flexibility.
          </Text>
          {/* <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Tutorial;
