import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the
        Contact Page!</Text>
      <Link style={styles.link} href="/">Go to Home Page</Link>
      <Link style={styles.link} href="about">Go to About Page</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  }
})