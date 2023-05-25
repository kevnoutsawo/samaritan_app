import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

export default function InformationsScreen({ navigation }) {
    const carMaintenanceTips = [
        {
          title: "Vérifier régulièrement la pression des pneus",
          details: "Maintenir une pression adéquate dans vos pneus améliore la durée de vie des pneus, la consommation de carburant et la tenue de route de votre voiture."
        },
        {
          title: "Effectuer des vidanges d'huile régulières",
          details: "Changer l'huile et le filtre à huile à intervalles réguliers permet de protéger le moteur et d'assurer un bon fonctionnement du véhicule."
        },
        {
          title: "Contrôler le niveau de liquide de refroidissement",
          details: "Veillez à maintenir le niveau de liquide de refroidissement dans les limites recommandées pour éviter la surchauffe du moteur."
        },
        {
          title: "Vérifier et remplacer les balais d'essuie-glace",
          details: "Des balais d'essuie-glace en bon état assurent une visibilité optimale par temps de pluie et prolongent la durée de vie du pare-brise."
        },
        {
          title: "Nettoyer régulièrement l'intérieur et l'extérieur du véhicule",
          details: "Un nettoyage régulier aide à préserver l'apparence de votre voiture et à protéger la peinture ainsi que les surfaces intérieures."
        },
        {
          title: "Vérifier les feux de signalisation et les ampoules",
          details: "Assurez-vous que tous les feux de signalisation fonctionnent correctement pour garantir votre sécurité et celle des autres usagers de la route."
        },
        {
          title: "Contrôler le niveau et la qualité des liquides de frein",
          details: "Des liquides de frein propres et à un niveau adéquat sont essentiels pour assurer un freinage efficace et sécuritaire."
        },
        {
          title: "Entretenir la batterie du véhicule",
          details: "Vérifiez régulièrement l'état de charge de la batterie et nettoyez les bornes pour éviter les problèmes de démarrage du moteur."
        },
        {
          title: "Vérifier l'usure des plaquettes de frein",
          details: "Des plaquettes de frein en bon état garantissent un freinage optimal et préviennent l'usure prématurée des disques de frein."
        },
        {
          title: "Effectuer des révisions périodiques chez un mécanicien qualifié",
          details: "Faites entretenir votre véhicule régulièrement par un professionnel pour détecter et résoudre les problèmes avant qu'ils ne deviennent plus graves."
        }
    ];

    const trafficAlerts = [
        {
          title: "Congestion du trafic sur l'autoroute A1",
          details: "Le trafic est actuellement dense sur l'autoroute A1 en raison de travaux routiers. Prévoyez des retards supplémentaires lors de vos déplacements."
        },
        {
          title: "Accident sur la route principale",
          details: "Un accident s'est produit sur la route principale près de la sortie 12. Soyez prudent et suivez les indications des autorités sur place."
        },
        {
          title: "Fermeture temporaire d'une voie sur l'avenue principale",
          details: "En raison de travaux d'entretien, une voie de l'avenue principale sera fermée pendant les prochains jours. Préparez-vous à des déviations et à des ralentissements."
        },
        {
          title: "Avertissement météorologique : Fortes pluies attendues",
          details: "Des pluies torrentielles sont prévues dans la région cet après-midi. Soyez vigilant sur la route et réduisez votre vitesse si nécessaire."
        },
        {
          title: "Travaux de construction sur le boulevard X",
          details: "Des travaux de construction sont en cours sur le boulevard X, ce qui peut entraîner des modifications temporaires de la circulation. Suivez les panneaux de signalisation pour vous guider."
        },
        {
          title: "Événement sportif majeur : Affluence de trafic attendue",
          details: "En raison d'un événement sportif majeur dans le stade local, une forte affluence de trafic est prévue dans les environs. Prévoyez plus de temps pour vos déplacements."
        },
        {
          title: "Avertissement de brouillard épais",
          details: "Une couche de brouillard épais recouvre actuellement la région. Allumez vos feux de croisement et conduisez avec prudence en maintenant une distance de sécurité avec les autres véhicules."
        },
        {
          title: "Travaux de réparation des routes sur l'autoroute A4",
          details: "Des travaux de réparation des routes sont en cours sur l'autoroute A4. Des voies de circulation réduites peuvent entraîner des retards. Respectez les panneaux de signalisation."
        },
        {
          title: "Avertissement de conditions glissantes",
          details: "En raison des conditions météorologiques, les routes peuvent être glissantes. Réduisez votre vitesse et augmentez la distance de freinage pour éviter les accidents."
        },
        {
          title: "Événement local : Fermeture de rues",
          details: "En raison d'un événement local, certaines rues du centre-ville seront fermées à la circulation pendant quelques heures. Utilisez des itinéraires alternatifs."
        }
      ];

      const drivingRegulations = [
        {
          title: "Permis de conduire",
          details: "Pour conduire au Cameroun, vous devez être en possession d'un permis de conduire valide délivré par les autorités compétentes. Assurez-vous d'avoir votre permis sur vous lorsque vous conduisez."
        },
        {
          title: "Âge minimum",
          details: "L'âge minimum légal pour conduire au Cameroun est de 18 ans. Assurez-vous d'avoir l'âge requis avant de prendre le volant."
        },
        {
          title: "Limitations de vitesse",
          details: "Respectez les limitations de vitesse en vigueur. Sur les routes urbaines, la vitesse maximale autorisée est généralement de 50 km/h, tandis que sur les autoroutes, elle peut atteindre 100 km/h. Soyez attentif aux panneaux de signalisation indiquant les limites de vitesse spécifiques."
        },
        {
          title: "Ceinture de sécurité",
          details: "Le port de la ceinture de sécurité est obligatoire pour tous les occupants du véhicule. Assurez-vous que tous les passagers sont correctement attachés avant de démarrer."
        },
        {
          title: "Téléphone portable",
          details: "L'utilisation du téléphone portable sans dispositif mains libres est interdite pendant la conduite. Évitez d'utiliser votre téléphone portable tout en conduisant pour assurer votre sécurité et celle des autres usagers de la route."
        },
        {
          title: "Alcool au volant",
          details: "La conduite en état d'ivresse est strictement interdite. La limite légale d'alcoolémie est de 0,08 % pour les conducteurs. Ne conduisez pas si vous avez consommé de l'alcool."
        },
        {
          title: "Priorité et signalisation",
          details: "Respectez les règles de priorité et les panneaux de signalisation. Donnez la priorité aux véhicules qui ont la priorité de passage et suivez les indications des panneaux de signalisation pour assurer une circulation fluide et sécurisée."
        },
        {
          title: "Feux de croisement",
          details: "Utilisez les feux de croisement la nuit et pendant les périodes de faible visibilité. Assurez-vous que vos feux sont en bon état de fonctionnement avant de prendre la route."
        },
        {
          title: "Transport de passagers",
          details: "Respectez les règles concernant le transport de passagers. Assurez-vous que votre véhicule est en bon état et dispose des sièges nécessaires pour transporter le nombre de passagers autorisés."
        },
        {
          title: "Véhicules d'urgence",
          details: "Lorsque vous rencontrez un véhicule d'urgence avec des lumières et des sirènes en service, cédez-leur le passage en vous rangeant sur le côté droit de la route. Ne bloquez pas leur chemin et facilitez leur progression."
        }
      ];
      
      const carNews = [
        {
          title: "Nouvelle technologie de sécurité routière",
          details: "Découvrez la dernière technologie de sécurité routière qui aide à prévenir les accidents et à améliorer la sécurité des conducteurs et des passagers. Cette innovation promet de réduire les risques sur les routes.",
        },
        {
          title: "Nouvelle réglementation sur les émissions",
          details: "Une nouvelle réglementation sur les émissions de gaz d'échappement des véhicules entrera en vigueur le mois prochain. Soyez informé sur les normes à respecter et les implications pour votre véhicule.",
        },
        {
          title: "Lancement d'une nouvelle voiture électrique",
          details: "Une marque renommée annonce le lancement d'une nouvelle voiture entièrement électrique. Découvrez les caractéristiques écologiques et les avantages de cette voiture révolutionnaire.",
        },
        {
          title: "Conseils pour économiser du carburant",
          details: "Découvrez des astuces pratiques pour économiser du carburant et réduire les coûts de votre véhicule. Ces conseils vous aideront à adopter une conduite plus économe en carburant.",
        },
        {
          title: "Rappel de sécurité pour certains modèles de voitures",
          details: "Certains modèles de voitures ont fait l'objet d'un rappel de sécurité en raison d'un problème identifié. Vérifiez si votre véhicule est concerné et prenez les mesures nécessaires.",
        },
        {
          title: "Nouvelles règles de stationnement en centre-ville",
          details: "Le conseil municipal a adopté de nouvelles règles de stationnement en centre-ville. Soyez au courant des zones de stationnement désignées et des heures de restriction pour éviter les amendes.",
        },
        {
          title: "Nouvelle application mobile pour les conducteurs",
          details: "Une nouvelle application mobile spécialement conçue pour les conducteurs est maintenant disponible. Elle offre des fonctionnalités pratiques telles que la navigation en temps réel, les alertes de trafic et bien plus encore.",
        },
        {
          title: "Sécurité des enfants en voiture",
          details: "Apprenez les meilleures pratiques pour assurer la sécurité des enfants en voiture, y compris l'utilisation appropriée des sièges d'auto et les mesures de prévention des accidents.",
        },
        {
          title: "Événement automobile annuel",
          details: "Un événement automobile annuel se tiendra le mois prochain, offrant une exposition aux derniers modèles de voitures, des démonstrations de conduite et des offres spéciales. Ne manquez pas cette occasion de découvrir les nouveautés de l'industrie automobile.",
        },
        {
          title: "Promotion spéciale sur les pneus",
          details: "Profitez d'une promotion spéciale sur les pneus de haute qualité. Obtenez des pneus neufs à des prix réduits pour assurer une conduite sûre et optimale.",
        }
      ];
      
      
      
  const sections = [
    {
      title: 'Alertes',
      contents: trafficAlerts,
    },
    {
      title: 'Astuces maintenance',
      contents: carMaintenanceTips,
    },
    {
      title: 'Conduire au Cameroun',
      contents: drivingRegulations,
    },
    {
      title: 'Annonces',
      contents: carNews,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDetails}>{item.details}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
        <Stack.Screen options={{ headerShown: true, title: "Infos Diverses" }} />
        {sections.map((section) => (
            <View key={section.title} style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('Samaritan' ,'Cette fonction n\'est pas disponible dans ce prototype.')}
                    >
                        <Text style={styles.buttonText}>Voir+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={section.contents}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
      backgroundColor: '#fff',
    },
    sectionContainer: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    listContainer: {
      paddingBottom: 8,
    },
    itemContainer: {
      width: 280,
      marginRight: 16,
      paddingHorizontal: 18,
      paddingVertical: 16,
      borderRadius: 8,
      backgroundColor: '#f2f2f2',
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    itemDetails: {
      fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        padding: 5
      },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    }
  });