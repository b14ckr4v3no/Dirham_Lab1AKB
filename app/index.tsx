import React, { useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Array gambar yang bisa Anda ubah sesuai keinginan
const customImages = [
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fwww.olx.co.id%2Fnews%2Fwp-content%2Fuploads%2F2024%2F09%2FHewan-peliharaan-bisa-menjadikan-suasana-rumah-lebih-seru.-Simak-rekomendasi-hewan-mudah-dipelihara-dan-memiliki-tampilan-menarik-berikut.-Keyword_-hewan-peliharaan.webp&imgrefurl=https%3A%2F%2Fwww.olx.co.id%2Fnews%2F10-rekomendasi-hewan-peliharaan-yang-unik-dan-mudah-dirawat%2F&docid=l0xUxm0JxhtpmM&tbnid=Xo1vK0YoquzcYM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCYQAA..i&w=800&h=533&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCYQAA',
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fakcdn.detik.net.id%2Fct-arsa%2Fcover_yuk_bertemu_dengan_5_hewan_gemas_paling_murah_hati_ini_1670486163.webp%3Fq%3D90%26w%3D800&imgrefurl=https%3A%2F%2Fwww.berbuatbaik.id%2Fberbagi-kabar%2F62%2Fyuk-bertemu-dengan-5-hewan-gemas-paling-murah-hati-ini&docid=YUoWLsLmm6IvIM&tbnid=iKeoxLi_dnvvpM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECB8QAA..i&w=800&h=534&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECB8QAA', 
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F47547%2Fsquirrel-animal-cute-rodents-47547.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-47547.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fid-id%2Fpencarian%2Fhewan%2F&docid=fLqws4X-puzuGM&tbnid=SlfL-rBeyNr4KM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECBkQAA..i&w=2939&h=2583&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECBkQAA',
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fcdnwpedutorenews.gramedia.net%2Fwp-content%2Fuploads%2F2022%2F06%2F03065248%2F615c5f08bd530.jpg&imgrefurl=https%3A%2F%2Fwww.gramedia.com%2Fliterasi%2Fmanfaat-hewan-bagi-lingkungan-di-sekitarnya%2F%3Fsrsltid%3DAfmBOopalKJmo__W6kHMCGt578wsHUPH_i7Tm-sRNFYvOinIk-0DtyRk&docid=0jiZ1GHE7WPGSM&tbnid=W_c7cqAHBSHEoM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECB4QAA..i&w=750&h=500&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECB4QAA',
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F45170%2Fkittens-cat-cat-puppy-rush-45170.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-45170.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fid-id%2Fpencarian%2Fbinatang%2F&docid=8_zhKWhesp7JFM&tbnid=1EtJwRTq8D54XM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCkQAA..i&w=2400&h=1334&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCkQAA',
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fmedia.tampang.com%2Ftm_images%2Farticle%2Fdesain-tanpa0uazpjs4ieyk5k24.jpg&imgrefurl=https%3A%2F%2Ftampang.com%2Fberita%2Fcerita-unik%2Fmengenal-hewan-zebra-asal-usul-dan-keunikannya-0s6olz0kcp4j8jx21u&docid=u_w44KC1XbV_HM&tbnid=6qSxvSL468mTKM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCgQAA..i&w=800&h=534&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCgQAA',
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fcdn.antaranews.com%2Fcache%2F1200x800%2F2016%2F09%2F20160927Burung_Merak_Hijau.jpg&imgrefurl=https%3A%2F%2Fmegapolitan.antaranews.com%2Fberita%2F24383%2Fhewan-langka-yang-nyasar-ini-diselamatkan-warga-sukabumi&docid=JWekiAsXOn2xhM&tbnid=TU45DiIsOGVvCM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECBoQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECBoQAA',
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fasset.kompas.com%2Fcrops%2F_3MbuO9xXEieTRI-ZJsGEgoolzw%3D%2F11x0%3A952x627%2F1200x800%2Fdata%2Fphoto%2F2021%2F08%2F20%2F611f4004e06a2.jpg&imgrefurl=https%3A%2F%2Fwww.kompas.com%2Fsains%2Fread%2F2021%2F12%2F18%2F140000823%2F5-hewan-paling-cantik-di-dunia&docid=9p8IYLoYIitnzM&tbnid=VCUaGYl8CbzP_M&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCAQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCAQAA',
  'https://www.google.com/imgres?q=foto%20hewan&imgurl=https%3A%2F%2Fcdn0-production-images-kly.akamaized.net%2FlOxQB6VoveyLPbBCkNkJPNe_TCk%3D%2F1200x900%2Fsmart%2Ffilters%3Aquality(75)%3Astrip_icc()%3Aformat(webp)%2Fkly-media-production%2Fmedias%2F4560074%2Foriginal%2F097324700_1693563240-dan-dennis-5ESfIy0yjZY-unsplash.jpg&imgrefurl=https%3A%2F%2Fwww.fimela.com%2Flifestyle%2Fread%2F5386447%2Finilah-hewan-hewan-khas-yang-banyak-ditemukan-di-indonesia&docid=oLa-aNsmnu9aFM&tbnid=cOIPfRpbNthSHM&vet=12ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCoQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwjhmOXD5O6OAxVjfGwGHephCVoQM3oECCoQAA',
];

const generateImagePairs = () => {
  const altURL = 'https://via.placeholder.com/300/FF6B6B/FFFFFF?text=Clicked';
  
  return customImages.map(imageUrl => ({
    main: imageUrl,
    alt: altURL
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
    width: Dimensions.get('window').width / 4 - 15,
    height: Dimensions.get('window').width / 4 - 15,
    margin: 3,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
    borderWidth: 1,         
    borderColor: '#ccc',     
  },
});