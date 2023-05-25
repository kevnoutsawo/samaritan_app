import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, Stack } from 'expo-router';

export default function Subscription() {
  const navigation = useNavigation()

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const paymentMethods = [
    { label: 'Orange Money', value: 'om' },
    { label: 'MTN Mobile Money', value: 'momo' },
    { label: 'Carte Bancaire', value: 'credit' },
  ];

  const subscriptions = [
    { label: 'Intervention Unique', value: 'unic' },
    { label: 'Abonnement Mensuel', value: 'monthly' },
    { label: 'Abonnement Annuel', value: 'yearly' },
  ];

  const renderPaymentMethodItems = () => {
    return paymentMethods.map((method) => (
      <Picker.Item key={method.value} label={method.label} value={method.value} />
    ));
  };

  const renderSubscriptionItems = () => {
    return subscriptions.map((subscription) => (
      <Picker.Item key={subscription.value} label={subscription.label} value={subscription.value} />
    ));
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: "Souscription"}} />
      <Text style={styles.title}>Souscription</Text>
      <Text style={styles.subtitle}>Veuillez choisir votre mode de paiement</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedPaymentMethod}
          onValueChange={(itemValue) => setSelectedPaymentMethod(itemValue)}
        >
          {renderPaymentMethodItems()}
        </Picker>
      </View>
      <Text style={styles.subtitle}>Veuillez choisir votre forfait</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedSubscription}
          onValueChange={(itemValue) => setSelectedSubscription(itemValue)}
        >
          {renderSubscriptionItems()}
        </Picker>
      </View>
      {selectedPaymentMethod !== 'credit' ? (
        <View>
          <Text style={styles.subtitle2}>Entrer le numero de compte</Text>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('subscription-success')}>
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.ccard}>
          <Text style={styles.subtitle2}>Paiement par carte</Text>
          <TextInput style={styles.input} placeholder="Numero de carte" keyboardType="numeric" />
          <TextInput
            style={styles.input}
            placeholder="Date D'Expiration (MM/AA)"
            keyboardType="numeric"
          />
          <TextInput style={styles.input} placeholder="CVV" secureTextEntry keyboardType="numeric" />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('subscription-success')}>
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
    textAlign: 'center',
  },
  subtitle2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -7 }],
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  ccard: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
