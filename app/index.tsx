import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      {/* Segitiga */}
      <View style={{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderLeftWidth: 40,
        borderRightWidth: 40,
        borderBottomWidth: 80,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "purple",
        marginBottom: 20,
      }}></View>

      {/* Persegi Panjang dengan Nama */}
      <View style={{
        backgroundColor: "green",
        padding: 15,
        marginBottom: 20,
      }}>
        <Text style={{
          fontSize: 16,
          color: "white",
          textAlign: "center",
        }}>Muh. Dirham rahim</Text>
      </View>

      {/* Pil dengan NIM */}
      <View style={{
        backgroundColor: "brown",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
      }}>
        <Text style={{
          fontSize: 14,
          color: "white",
          textAlign: "center",
        }}>105841105622</Text>
      </View>

    </View>
  );
}
