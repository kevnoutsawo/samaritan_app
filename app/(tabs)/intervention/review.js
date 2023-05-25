import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, Stack } from 'expo-router';

export default function ReviewScreen() {
  const [rating, setRating] = useState(0);
  const [remarks, setRemarks] = useState('');
  const navigation = useNavigation()

  const handleRating = (value) => {
    setRating(value);
  };

  const handleRemarksChange = (text) => {
    setRemarks(text);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: "Votre Avis"}} />
      <Text style={styles.heading}>Noter l'Intervention</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            style={[styles.starButton, value <= rating && styles.selectedStarButton]}
            onPress={() => handleRating(value)}
          >
            <FontAwesome name="star" size={32} color={value <= rating ? 'gold' : '#ccc'} />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Autres Observations :</Text>
      <TextInput
        style={styles.remarksInput}
        multiline
        placeholder="Vos observations nous permettent de nous ameliorer"
        value={remarks}
        onChangeText={handleRemarksChange}
      />
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('review-success')}>
        <Text style={styles.submitButtonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  starButton: {
    marginRight: 8,
  },
  selectedStarButton: {
    opacity: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  remarksInput: {
    height: 120,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 32,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
