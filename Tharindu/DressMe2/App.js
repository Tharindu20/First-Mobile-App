import React from 'react';
import { StyleSheet, Text, View ,Button, Alert ,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Image source={require('./sss.png')} style={{width: 200, height: 100}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

