import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import {Colors} from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
      <StatusBar value="auto" style={colorScheme === 'dark' ? 'light' : 'dark'} />
    <Stack screenOptions={{
      headerStyle: { backgroundColor: theme.navBackground },
      headerTintColor: theme.title,
      headerTitleStyle: { fontWeight: 'bold' },
    }} >
      <Stack.Screen name="index" option={{ title: 'Home' }} /> 
      <Stack.Screen name="about" option={{ title: 'About' }} />
      <Stack.Screen name="contact" option={{ title: 'Contact' }} />
      </Stack>
      </>
   
  )
}

export default RootLayout

const styles = StyleSheet.create({})