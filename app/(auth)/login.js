import React from 'react';
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AuthStore, appSignIn } from '../../store.js';
import { Stack, useRouter } from 'expo-router';
import { useRef } from 'react';

export default function LogIn() {
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerShown: "true" ,title: 'Connexion', headerLeft: () => <></> }}
      />
      <View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="mail" size={24} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            nativeID="email"
            onChangeText={(text) => {
              emailRef.current = text;
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
        onPress={async () => {
          const resp = await appSignIn(emailRef.current, passwordRef.current);
          if (resp?.user) {
            router.replace('/(tabs)/home');
          } else {
            console.log(resp.error);
            Alert.alert('Login Error', resp.error?.message);
          }
        }}
        style={styles.loginButton}
      >
        Connexion
      </Text>
      <Text
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = true;
          });
          router.push('/create-account');
        }}
        style={styles.createAccountButton}
      >
        CREER MON COMPTE
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
    padding: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#455fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#455fff',
    paddingHorizontal: 8,
    width: 300
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#555',
  },
  loginButton: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#455fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  createAccountButton: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#455fff',
  },
});
