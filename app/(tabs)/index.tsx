import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/react-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.subtitle}>UNISMUH Makassar</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>📍 Lokasi</Text>
          <Text style={styles.cardText}>
            Jl. Sultan Alauddin No.259, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>🎓 Tentang UNISMUH</Text>
          <Text style={styles.cardText}>
            Universitas Muhammadiyah Makassar (UNISMUH) adalah perguruan tinggi swasta 
            yang berdiri sejak tahun 1963. UNISMUH berkomitmen untuk menghasilkan 
            lulusan yang berkualitas, berakhlak mulia, dan berwawasan keislaman.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>🏛️ Fakultas</Text>
          <Text style={styles.cardText}>
            • Fakultas Teknik{'\n'}
            • Fakultas Ekonomi dan Bisnis{'\n'}
            • Fakultas Keguruan dan Ilmu Pendidikan{'\n'}
            • Fakultas Hukum{'\n'}
            • Fakultas Kedokteran{'\n'}
            • Fakultas Farmasi{'\n'}
            • Fakultas Agama Islam
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>🎯 Visi</Text>
          <Text style={styles.cardText}>
            "Menjadi universitas Islam yang unggul, berkualitas, dan berdaya saing 
            global pada tahun 2030"
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>🚀 Misi</Text>
          <Text style={styles.cardText}>
            • Menyelenggarakan pendidikan tinggi yang berkualitas{'\n'}
            • Mengembangkan penelitian dan pengabdian kepada masyarakat{'\n'}
            • Membangun karakter mahasiswa yang berakhlak mulia{'\n'}
            • Menciptakan lulusan yang kompeten dan berdaya saing
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
    tintColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
