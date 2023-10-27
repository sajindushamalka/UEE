import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';


export default function App() {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.container}>
      <View style={styles.radioButtonContainer}>
        <Text style={styles.text}>Weight Gain</Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color="orange"
        />
        <Text style={styles.text}>Weight Loss</Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
          color="orange"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 26,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 26,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 16,
  },
});
