import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthStore, appSignOut } from "../../../store";
import { useRouter } from "expo-router";

const Tab2Index = () => {
  const [language, setLanguage] = useState("english");
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  const handleLogout = async () => {
    const resp = await appSignOut();
    if (!resp?.error) {
      router.replace("/(auth)/login");
    } else {
      console.log(resp.error);
      Alert.alert("Logout Error", resp.error?.message);
    }
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    Alert.alert('Samaritan' ,'Cette fonction n\'est pas disponible dans ce prototype.')
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    Alert.alert('Samaritan' ,'Cette fonction n\'est pas disponible dans ce prototype.')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{AuthStore.getRawState().user?.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Nom de l'utilisateur</Text>
        <Text style={styles.text}>{AuthStore.getRawState().user?.displayName}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Langue de l'application</Text>
        <TouchableOpacity
          style={language === "english" ? styles.languageButtonSelected : styles.languageButton}
          onPress={() => handleLanguageChange("english")}
        >
          <Text style={styles.languageButtonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={language === "french" ? styles.languageButtonSelected : styles.languageButton}
          onPress={() => handleLanguageChange("french")}
        >
          <Text style={styles.languageButtonText}>Français</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Theme</Text>
        <TouchableOpacity
          style={theme === "light" ? styles.themeButtonSelected : styles.themeButton}
          onPress={() => handleThemeChange("light")}
        >
          <Text style={styles.themeButtonText}>Mode Clair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme === "dark" ? styles.themeButtonSelected : styles.themeButton}
          onPress={() => handleThemeChange("dark")}
        >
          <Text style={styles.themeButtonText}>Mode Sombre</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Version de l'application</Text>
        <Text style={styles.text}>Samaritan 0.0.1 (Prototype)</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleLogout}
          title="SE DECONNECTER"
          color="#455fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#455fff",
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  languageButton: {
    backgroundColor: "#455fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },
  languageButtonSelected: {
    backgroundColor: "#818181",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },
  languageButtonText: {
    color: "white",
    fontSize: 16,
  },
  themeButton: {
    backgroundColor: "#455fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },
  themeButtonSelected: {
    backgroundColor: "#818181",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },
  themeButtonText: {
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    width: "50%",
    marginTop: 20,
  },
});

export default Tab2Index;



// import { Redirect, Stack, useRouter } from "expo-router";
// import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
// import { AuthStore, appSignOut } from "../../../store";

// const Tab2Index = () => {
//   const router = useRouter();
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Stack.Screen options={{ headerShown: true, title: "Paramètres" }} />
//       {/* <Text style={{ fontFamily: "EncodeSansSemiCondensed_100Thin" }}>
//         EncodeSansSemiCondensed_100Thin
//       </Text>
//       <Text style={{ fontFamily: "EncodeSansSemiCondensed_300Light" }}>
//         EncodeSansSemiCondensed_300Light
//       </Text> */}
//       <Text style={{ fontFamily: "EncodeSansSemiCondensed_400Regular" }}>
//         {AuthStore.getRawState().user?.email}
//       </Text>
//       <Text style={{ fontFamily: "EncodeSansSemiCondensed_700Bold" }}>
//         {AuthStore.getRawState().user?.displayName}
//       </Text>
//       <Button
//         onPress={async () => {
//           const resp = await appSignOut();
//           if (!resp?.error) {
//             router.replace("/(auth)/login");
//           } else {
//             console.log(resp.error);
//             Alert.alert("Logout Error", resp.error?.message);
//           }
//         }}
//         title="LOGOUT"
//       />

//       <Pressable
//         onPress={() => {
//           alert("pressed");
//         }}
//         style={({ pressed }) => [
//           { backgroundColor: pressed ? "#920" : "#818" },
//           {
//             borderColor: "#920",
//             borderWidth: 1,
//             borderStyle: "solid",
//             borderRadius: 8,
//             paddingHorizontal: 12,
//             paddingVertical: 6,
//           },
//         ]}
//       >
//         <Text
//           style={{
//             fontFamily: "EncodeSansSemiCondensed_700Bold",
//             color: "white",
//           }}
//         >
//           Button
//         </Text>
//       </Pressable>
//     </View>
//   );
// };
// export default Tab2Index;
