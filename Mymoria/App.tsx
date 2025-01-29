
import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainContainer/>
    </GestureHandlerRootView>
  );
}