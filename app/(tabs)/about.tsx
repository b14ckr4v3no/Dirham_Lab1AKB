import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📱 Tentang Aplikasi</Text>
        <Text style={styles.headerSubtitle}>
          Aplikasi Mobile dengan Expo Router
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 Tujuan Aplikasi</Text>
          <Text style={styles.sectionText}>
            Aplikasi ini dibuat untuk memenuhi tugas mata kuliah Aplikasi Komputer Bergerak (AKB). 
            Aplikasi ini mendemonstrasikan penggunaan Expo Router dengan navigasi tab bar 
            dan implementasi berbagai komponen React Native.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📋 Fitur Aplikasi</Text>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>🏠 Halaman Home</Text>
            <Text style={styles.featureText}>
              Menampilkan informasi lengkap tentang Universitas Muhammadiyah Makassar (UNISMUH), 
              termasuk lokasi, deskripsi, visi-misi, dan daftar fakultas yang tersedia.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>ℹ️ Halaman About</Text>
            <Text style={styles.featureText}>
              Berisi penjelasan mengenai tujuan pembuatan aplikasi, deskripsi fungsi 
              dari setiap halaman, dan teknologi yang digunakan dalam pengembangan.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>👤 Halaman Profile</Text>
            <Text style={styles.featureText}>
              Menampilkan data diri mahasiswa yang meliputi nama lengkap, NIM, 
              kelas, jurusan, fakultas, dan foto profil dari file lokal.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🛠️ Teknologi yang Digunakan</Text>
          <View style={styles.techList}>
            <Text style={styles.techItem}>• React Native</Text>
            <Text style={styles.techItem}>• Expo Router</Text>
            <Text style={styles.techItem}>• TypeScript</Text>
            <Text style={styles.techItem}>• Expo Icons</Text>
            <Text style={styles.techItem}>• StyleSheet API</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📚 Komponen yang Digunakan</Text>
          <View style={styles.techList}>
            <Text style={styles.techItem}>• ScrollView - untuk scroll konten</Text>
            <Text style={styles.techItem}>• View - sebagai container layout</Text>
            <Text style={styles.techItem}>• Text - untuk menampilkan teks</Text>
            <Text style={styles.techItem}>• Image - untuk menampilkan gambar</Text>
            <Text style={styles.techItem}>• Tabs - untuk navigasi tab bar</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Aplikasi ini dibuat untuk tugas AKB
          </Text>
          <Text style={styles.footerSubtext}>
            © 2025 - Universitas Muhammadiyah Makassar
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
    backgroundColor: '#4CAF50',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e8f5e9',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    textAlign: 'justify',
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  techList: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  techItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    paddingLeft: 10,
  },
  footer: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#bdc3c7',
    textAlign: 'center',
  },
});
