import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg' }} style={styles.image} />
      <Text style={styles.title}>home</Text>
      <Text>Welcome to the React Native App!</Text>
      
      <View style={styles.card}>
        
        <Text>
          This is a simple React Native application that demonstrates the basic structure and components of a mobile app built using React Native. You can customize this app by adding more features, screens, and styles as needed.
        </Text>
      </View>
      <Link style={styles.link} href="about">Go to About Page</Link>
      <Link style={styles.link} href="contact">Go to Contact Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
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
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  }


})
