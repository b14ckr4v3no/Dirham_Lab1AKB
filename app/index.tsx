import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface IconData {
  library: any;
  name: string;
  color: string;
}

export default function Index() {
  const icons: IconData[] = [
    { library: AntDesign, name: "home", color: "#3498db" },
    { library: AntDesign, name: "user", color: "#e74c3c" },
    { library: Entypo, name: "camera", color: "#2ecc71" },
    { library: Entypo, name: "music", color: "#9b59b6" },
    { library: Feather, name: "settings", color: "#f39c12" },
    { library: Feather, name: "mail", color: "#1abc9c" },
    { library: FontAwesome, name: "heart", color: "#e91e63" },
    { library: FontAwesome, name: "star", color: "#ff9800" },
    { library: MaterialIcons, name: "favorite", color: "#f44336" },
    { library: MaterialIcons, name: "search", color: "#607d8b" },
  ];

  const renderIcon = (icon: IconData, index: number) => {
    const IconComponent = icon.library;
    return (
      <View key={index} style={styles.iconContainer}>
        <IconComponent name={icon.name} size={35} color={icon.color} />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Koleksi 10 Ikon Menarik</Text>
      
      <View style={styles.iconGrid}>
        {icons.map((icon, index) => renderIcon(icon, index))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 15,
    margin: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});