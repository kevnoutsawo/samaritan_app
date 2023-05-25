import { Tabs } from "expo-router";
import { Text } from "react-native";
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Accueil",
          tabBarIcon: () => <AntDesign name="home" size={34} color="black" />,
        }}
      />
      <Tabs.Screen
        name="intervention"
        options={{
          title: "Intervention",
          tabBarIcon: () => <Ionicons name="add-circle-outline" size={34} color="black" />,
        }}
      />
      <Tabs.Screen
        name="infos"
        options={{
          title: "Informations",
          tabBarIcon: () => <Ionicons name="ios-information-circle-outline" size={34} color="black" />,
          tabBarBadge: 7,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Paramètres",
          tabBarIcon: () => <Feather name="settings" size={30} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
