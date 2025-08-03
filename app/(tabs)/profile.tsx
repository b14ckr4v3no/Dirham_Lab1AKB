import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={require('../../assets/images/adaptive-icon.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.headerTitle}>Profil Mahasiswa</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>👤 Nama Lengkap</Text>
            <Text style={styles.value}>Muh. Dirham Rahim</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>🆔 NIM</Text>
            <Text style={styles.value}>105841105622</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>🎓 Kelas</Text>
            <Text style={styles.value}>6.B</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>💻 Jurusan</Text>
            <Text style={styles.value}>Teknik Informatika</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>🏛️ Fakultas</Text>
            <Text style={styles.value}>Fakultas Teknik</Text>
          </View>
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.additionalTitle}>📋 Informasi Tambahan</Text>
          
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>📧 Email</Text>
            <Text style={styles.cardText}>105841105622@unismuh.ac.id</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>📱 Program Studi</Text>
            <Text style={styles.cardText}>
              S1 Teknik Informatika - Fakultas Teknik{'\n'}
              Universitas Muhammadiyah Makassar
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>🎯 Minat & Keahlian</Text>
            <Text style={styles.cardText}>
              • Cyber Security{'\n'}
              • Computer Network{'\n'}
              • UI/UX Design{'\n'}
              • Web Development
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>🏆 Status Akademik</Text>
            <Text style={styles.cardText}>
              Mahasiswa Aktif - Semester 6{'\n'}
              Tahun Akademik 2025/2026
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            "Berusaha menjadi mahasiswa yang berprestasi dan berkontribusi positif"
          </Text>
          <Text style={styles.footerQuote}>
            - Muh. Dirham Rahim -
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
    backgroundColor: '#FF9800',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoRow: {
    paddingVertical: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF9800',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
  additionalInfo: {
    marginBottom: 20,
  },
  additionalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 8,
    lineHeight: 20,
  },
  footerQuote: {
    fontSize: 12,
    color: '#bdc3c7',
    textAlign: 'center',
  },
});
