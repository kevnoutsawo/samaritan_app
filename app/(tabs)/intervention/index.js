import { useNavigation, Stack } from "expo-router";
import { ScrollView, View, TextInput, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const Tab1Index = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [value, onChangeText] = useState('')
  const navigation = useNavigation()

  const cars = [
    { label: 'Toyota Corolla', value: 'corolla' },
    { label: 'Honda Civic', value: 'civic' },
    { label: 'Ford Mustang', value: 'mustang' },
    { label: 'Chevrolet Camaro', value: 'camaro' },
    { label: 'Volkswagen Golf', value: 'golf' },
    { label: 'BMW Série 3', value: 'bmw3' },
    { label: 'Mercedes-Benz Classe C', value: 'cclass' },
    { label: 'Audi A4', value: 'a4' },
    { label: 'Nissan Altima', value: 'altima' },
    { label: 'Hyundai Elantra', value: 'elantra' },
  ];

  const services = [
    { label: 'Remorquage', value: 'remorquage' },
    { label: "Vidange d'huile", value: 'vidange_huile' },
    { label: 'Rotation des pneus', value: 'rotation_pneus' },
    { label: 'Inspection des freins', value: 'inspection_freins' },
    { label: 'Réglage du moteur', value: 'reglage_moteur' },
    { label: 'Remplacement de batterie', value: 'remplacement_batterie' },
    { label: 'Alignement des roues', value: 'alignement_roues' },
    { label: 'Service de climatisation', value: 'service_climatisation' },
    { label: 'Flush de transmission', value: 'flush_transmission' },
    { label: 'Service de diagnostic', value: 'service_diagnostic' },
    { label: 'Lavage et detailing de voiture', value: 'lavage_detailing' },
  ];

  const renderServiceItems = () => {
    return services.map((service) => (
      <Picker.Item key={service.value} label={service.label} value={service.value} />
    ));
  };

  const renderCarItems = () => {
    return cars.map((car) => (
      <Picker.Item key={car.value} label={car.label} value={car.value} />
    ));
  };

  return (
    <ScrollView>
      <Stack.Screen options={{ headerShown: true, title: "Intervention" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Réservation d'Intervention</Text>
        <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL(`tel:698512900`)}>
          <Text style={styles.callButtonText}>Appel direct</Text>
        </TouchableOpacity>

        <View style={styles.fieldContainer}>
          <MaterialIcons name="directions-car" size={24} color="#333" style={styles.icon} />
          <Picker
            style={styles.picker}
            selectedValue={selectedCar}
            onValueChange={(value) => setSelectedCar(value)}
          >
            <Picker.Item label="Sélectionner la voiture" value="" />
            {renderCarItems()}
          </Picker>
        </View>

        <View style={styles.fieldContainer}>
          <MaterialIcons name="build" size={24} color="#333" style={styles.icon} />
          <Picker
            style={styles.picker}
            selectedValue={selectedService}
            onValueChange={(value) => setSelectedService(value)}
          >
            <Picker.Item label="Sélectionner le service" value="" />
            {renderServiceItems()}
          </Picker>
        </View>

        <View>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.details}
            placeholder="Entrez ici toutes remarques ou détails utils à l'intervention"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('suivi')}>
          <Text style={styles.buttonText}>Lancer l'intervention</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 40,
  },
  callButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  details: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 25,
  },
});

export default Tab1Index;