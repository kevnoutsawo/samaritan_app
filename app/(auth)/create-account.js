import React from 'react';
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRef } from 'react';
import { AuthStore, appSignUp } from '../../store.js';
import { Stack, useRouter } from 'expo-router';

export default function CreateAccount() {
  const router = useRouter();
  const emailRef = useRef('');
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const passwordRef = useRef('');

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerShown: "true" ,title: 'Creation de Compte', headerLeft: () => <></> }}
      />
      <View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="mail" size={24} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Email"
            nativeID="email"
            onChangeText={(text) => {
              emailRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Prenom</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Prenom"
            nativeID="firstName"
            onChangeText={(text) => {
              firstNameRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Nom</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Nom"
            nativeID="lastName"
            onChangeText={(text) => {
              lastNameRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Mot De Passe</Text>
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock1"
            size={24}
            color="#555"
            style={styles.icon}
          />
          <TextInput
            placeholder="Mot De Passe"
            secureTextEntry={true}
            nativeID="password"
            onChangeText={(text) => {
              passwordRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
      </View>

      <Text
        style={styles.saveButton}
        onPress={async () => {
          const resp = await appSignUp(
            emailRef.current,
            passwordRef.current,
            firstNameRef.current + ' ' + lastNameRef.current
          );
          if (resp?.user) {
            router.replace('/(tabs)/home');
          } else {
            console.log(resp.error);
            Alert.alert('Sign Up Error', resp.error?.message);
          }
        }}
      >
        CREER MON COMPTE
      </Text>

      <Text
        style={styles.cancelButton}
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false;
          });
          router.back();
        }}
      >
        ME CONNECTER
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  label: {
    marginBottom: 4,
    color: '#455fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#455fff',
    marginBottom: 8,
    width: 300
  },
  icon: {
    marginHorizontal: 8,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  saveButton: {
    backgroundColor: '#455fff',
    color: '#fff',
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
    marginTop: 18,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    color: '#455fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
