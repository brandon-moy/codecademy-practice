import React from 'react';
import { View } from 'react-native';

const App = () => (
  // eslint-disable-next-line
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Box color="red" />
    <Box color="green" />
    <Box color="blue" />
  </View>
);

export default App;

export const Box = props => (
  // Move a box `View` component here
  // eslint-disable-next-line
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);
