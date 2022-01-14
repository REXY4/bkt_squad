import React from 'react';
import { View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'; 
import  {Provider as PaperProvider} from 'react-native-paper';
import  Navigation  from './src/routers';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import { store } from './src/redux/store';

export default function App() {
  return (    
    <Provider store={store}>
    <NavigationContainer>
    <PaperProvider>
    <NativeBaseProvider>
        <Navigation/>
    </NativeBaseProvider>
    </PaperProvider>
    </NavigationContainer>
    </Provider>
  );
}