import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }} >
      <Stack.Screen name="index" option={{ title: 'Home' }} /> 
      <Stack.Screen name="about" option={{ title: 'About' }} />
      <Stack.Screen name="contact" option={{ title: 'Contact' }} />
    </Stack>
   
  )
}

export default RootLayout

const styles = StyleSheet.create({})