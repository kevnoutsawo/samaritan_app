import { Link, Redirect, Stack, useNavigation } from "expo-router";
import { ScrollView, View, TouchableOpacity, FlatList, Text, StyleSheet } from "react-native";
import { AuthStore } from "../../../store"

const recentActivities = [
  "🚀 Demande d'intervention effectuée",
  "✅ Confirmation de réservation",
  "💰 Paiement réussi",
  "🔐 Changement de mot de passe",
  "📦 Notification de livraison",
  "🔄 Mise à jour du profil",
  "👍 Nouvelle recommandation d'intervention",
  "🎁 Notification de remise spéciale",
  "📧 Activation du compte",
  "🏠 Changement d'adresse de livraison",
];

const newsUpdates = [
  "📢 Nouveau service disponible : Réparation d'appareils électroménagers",
  "🎉 Promotion spéciale : Réduction de 20% sur les services de plomberie",
  "🕒 Nouvelles heures d'ouverture : Maintenant ouvert 24/7",
  "🚀 Amélioration de la fonctionnalité de réservation en ligne",
  "👥 Nouveau partenaire : Ajout d'une entreprise de nettoyage à notre réseau",
  "🎁 Obtenez une remise de 10€ en parrainant un ami",
  "🌟 Avis clients : Consultez les témoignages de nos clients satisfaits",
  "🔑 Nouvelles compétences ajoutées : Équipe de spécialistes en serrurerie",
  "💨 Offre limitée : Obtenez une consultation gratuite pour les problèmes de climatisation",
  "🔒 Mise à jour des politiques de confidentialité",
];


const Tab1Index = () => {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Samaritan" }} />
      <Welcome />
      <Subscription />
      <RecentActivity />
      <NewsUpdates />
      {/* <Link href="/home/details">Go to Details</Link>
      <Link href="/home/new-entry-modal">Present modal</Link> */}
    </ScrollView>
  );
};

const Subscription = () => {
  const navigation = useNavigation()
  
  return (
    <View style={styles.subscription}>
      <Text style={styles.title}>Abonnement</Text>
      <Text style={styles.description}>Veuillez souscrire à une offre pour pouvoir commander une intervention.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('subscription')}
      >
        <Text style={styles.buttonText}>Souscrire</Text>
      </TouchableOpacity>
    </View>
  )
}

const Welcome = () => {
  const username = "John Doe"; // Replace with the actual username

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.wave}>👋</Text>
      <Text style={styles.greeting}>Bienvenue, {AuthStore.getRawState().user?.displayName} !</Text>
      <Text style={styles.message}>Commencez votre expérience Samaritan dès maintenant.</Text>
    </View>
  );
};

const RecentActivity = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Activités récentes</Text>
      <ScrollView horizontal>
        <View style={styles.listContainer}>
          {recentActivities.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemTitle}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};


const NewsUpdates = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Samaritan Actus</Text>
      {newsUpdates.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemTitle}>{item}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontSize: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10
  },
  subscription: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  section: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
    textAlign: "center",
  },
  item: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 16,
    color: "#555555",
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  wave: {
    fontSize: 48,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  message: {
    fontSize: 18,
    color: "#555555",
    textAlign: "center",
  },
})

export default Tab1Index;
