import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, Stack } from 'expo-router';

export default function TransactionSuccessScreen() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: "Avis Enregistré"}} />
      <FontAwesome name="check-circle" size={80} color="#57c75e" />
      <Text style={styles.title}>Votre avis a bien été pris en compte!</Text>
      <Text style={styles.subtitle}>Merci de nous faire confiance.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('index')}>
        <Text style={styles.buttonText}>Retourner à l'accueil</Text>
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
    marginVertical: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
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
