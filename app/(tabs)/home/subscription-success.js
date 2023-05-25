import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, Stack } from 'expo-router';

export default function TransactionSuccessScreen() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: "Confirmation de Transaction"}} />
      <FontAwesome name="check-circle" size={80} color="#57c75e" />
      <Text style={styles.title}>Transaction Réussie!</Text>
      <Text style={styles.subtitle}>Merci pour votre paiement.</Text>
      {/* <Image source={require('../assets/success-image.png')} style={styles.image} /> */}
      {/* <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.
        Suspendisse potenti. Mauris id facilisis enim.
      </Text> */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('index')}>
        <Text style={styles.buttonText}>Retourner à l'accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('intervention')}>
        <Text style={styles.buttonText}>Commander une intervention</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
