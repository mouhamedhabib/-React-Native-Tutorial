import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the
        About Page!</Text>
      <Link style={styles.link} href="/">Go to Home Page</Link>
    </View>
  )
}

export default About

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