import React, { useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Array gambar yang bisa Anda ubah sesuai keinginan
const customImages = [
  'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=300&h=300&fit=crop',
];

const generateImagePairs = () => {
  const altImages = [
    'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=300&h=300&fit=crop',
  ];
  
  return customImages.map((imageUrl, index) => ({
    main: imageUrl,
    alt: altImages[index]
  }));
};

const imagePairs = generateImagePairs();

export default function CustomImageGrid() {
  const [imageStates, setImageStates] = useState(
    imagePairs.map(() => ({ scale: 1, isAlt: false }))
  );

  const handlePress = (index: number) => {
    setImageStates((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newScale = item.scale < 2 ? item.scale * 1.2 : 1;
        return {
          scale: newScale,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grid Gambar Custom</Text>
      <Text style={styles.subtitle}>Tap gambar untuk memperbesar dan mengubah</Text>
      
      <ScrollView contentContainerStyle={styles.grid}>
        {imagePairs.map((pair, index) => (
          <Pressable key={index} onPress={() => handlePress(index)}>
            <Image
              source={{ uri: imageStates[index].isAlt ? pair.alt : pair.main }}
              style={[
                styles.image,
                {
                  transform: [{ scale: imageStates[index].scale }],
                },
              ]}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 16,
    height: Dimensions.get('window').width / 3 - 16,
    margin: 4,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
    borderWidth: 1,         
    borderColor: '#ccc',     
  },
});