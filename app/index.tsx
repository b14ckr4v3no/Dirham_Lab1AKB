import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'AlegreyaSC-Regular': require('../assets/fonts/AlegreyaSC-Regular.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'ManufacturingConsent-Regular': require('../assets/fonts/ManufacturingConsent-Regular.ttf'),
    'MontserratAlternates-Regular': require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    'Inter-Italic': require('../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
    'Merriweather': require('../assets/fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf'),
    'PlayfairDisplay': require('../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
    'RobotoFlex': require('../assets/fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf'),
  });

  const students = [
    { name: "Syauqiyah Mujahidah Yahya", nim: "105841105122", font: "AlegreyaSC-Regular" },
    { name: "Mar'atul Azizah", nim: "105841105222", font: "Lato-Regular" },
    { name: "Fikrah Lejahtegis", nim: "105841105322", font: "ManufacturingConsent-Regular" },
    { name: "Alya Anandha", nim: "105841105422", font: "MontserratAlternates-Regular" },
    { name: "M.Fikri Haikal Ayatullah", nim: "105841105522", font: "Poppins-Regular" },
    { name: "Muh.Dirham Rahim", nim: "105841105622", font: "AlegreyaSC-Regular" },
    { name: "Zaskya Aulia Ashar", nim: "105841105722", font: "Montserrat-Italic" },
    { name: "Muh.Ilham Akbar", nim: "105841105822", font: "Inter-Italic" },
    { name: "Zelvia", nim: "105841105922", font: "Merriweather" },
    { name: "ANDI DIFTA RAMEYZA KAILAH", nim: "105841106022", font: "PlayfairDisplay" },
    { name: "Arsifah ainun amalia", nim: "105841106122", font: "RobotoFlex" },
  ];

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Mahasiswa AKB</Text>
      
      {students.map((student, index) => (
        <View key={index} style={styles.studentCard}>
          <Text style={[styles.name, { fontFamily: student.font }]}>{student.name}</Text>
          <Text style={styles.nim}>{student.nim}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  studentCard: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  nim: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '500',
  },
});