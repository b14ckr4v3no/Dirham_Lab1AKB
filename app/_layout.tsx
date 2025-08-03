import { Ionicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    
    //Static Fonts
    "AlegreyaSC-Regular": require("../assets/fonts/AlegreyaSC-Regular.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "ManufacturingConsent-Regular": require("../assets/fonts/ManufacturingConsent-Regular.ttf"),
    "MontserratAlternates-Regular": require("../assets/fonts/MontserratAlternates-Regular.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),

    //Variable Fonts
    "Montserrat-Italic-VariableFont_wght": require("../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "Inter-Italic-VariableFont_opsz,wght": require("../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
    "Merriweather-VariableFont_opsz,wdth,wght": require("../assets/fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf"),
    "PlayfairDisplay-VariableFont_wght": require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    "RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght": require("../assets/fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Universitas Muhammadiyah Makassar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerTitle: 'Tentang Aplikasi',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: 'Profil Mahasiswa',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}