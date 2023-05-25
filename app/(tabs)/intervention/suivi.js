import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, Stack } from 'expo-router';

const Suivi = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: "Suivi d'Intervention"}} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/map.jpeg')} // Replace with your image source
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Délai d'arrivée de la patrouille</Text>
        <Text style={styles.subtitle}>Environ: 15 minutes</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('review')}>
          <FontAwesome name="star" size={24} color="gold" />
          <Text style={styles.buttonText}>Noter l'intervention</Text>
          <FontAwesome name="star" size={24} color="gold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '80%',
    borderRadius: 20,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    flexDirection: "row"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Suivi;