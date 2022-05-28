import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatorBasic from "./src/StackNavigator/StackNavigatorBasic";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigatorBasic/>
    </NavigationContainer>
  );
}