import React from 'react';
import { View } from 'react-native';

const App = () => (
  // eslint-disable-next-line
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
  </View>
);

export default App;
