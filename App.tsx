import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {useFonts, DMSans_400Regular} from '@expo-google-fonts/dm-sans'
import {DMSerifDisplay_400Regular} from '@expo-google-fonts/dm-serif-display'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme'
import { SignIn } from '@src/screens/SignIn';

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular

  
  });

  // keeps the splash screen on 'till the fonts aren't yet loaded

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme} >
      <StatusBar style='light' translucent  />
      <SignIn/>
    </ThemeProvider >
  );
}
