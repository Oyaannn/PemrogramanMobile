import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9F9E0", padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Hi, Haikal</Text>
        <TouchableOpacity style={{ backgroundColor: "#FF6B3D", borderRadius: 20, padding: 10 }}>
          <Ionicons name="heart" size={20} color="#fff" />
          <View style={{ position: "absolute", top: -2, right: -2, backgroundColor: "#000", borderRadius: 8, paddingHorizontal: 4 }}>
            <Text style={{ color: "#fff", fontSize: 10 }}>8</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#FF6B3D",
          borderRadius: 15,
          padding: 20,
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>Plan Your{"\n"}Summer!</Text>
        <View style={{ backgroundColor: "#FF8B5B", borderRadius: 10, padding: 10, alignSelf: "center" }}>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#EFEFEF",
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Ionicons name="search" size={20} color="#555" />
          <TextInput placeholder="Search destination..." style={{ marginLeft: 8, flex: 1 }} />
        </View>
        <View style={{ backgroundColor: "#0B132B", padding: 12, borderRadius: 12, marginLeft: 10 }}>
          <Ionicons name="options" size={20} color="#fff" />
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 15 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>Popular Destination</Text>
        <Text style={{ color: "#888" }}>View All</Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/tourist-destination/LabuanBajoScreen")}
        style={{ borderRadius: 15, overflow: "hidden", marginBottom: 15 }}
      >
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200" }}
          style={{ width: "100%", height: 200 }}
        />

        <TouchableOpacity
        style={{ position: "absolute", top: 15, right: 15, backgroundColor: "rgba(255,255,255,0.8)",
            padding: 8, borderRadius: 20, }}
        >
            <Ionicons name="heart" size={20} color="#FF6B3D" />
        </TouchableOpacity>

        <View style={{ position: "absolute", bottom: 15, left: 15, right: 15 }}>
          <View>
            <Text style={{ color: "#fff" }}>🇮🇩 Indonesia</Text>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Labuan Bajo</Text>
          </View>
          <View
            style={{
              position: "absolute", right: 0, bottom: 0, flexDirection: "row", alignItems: "center", }}
          >
            <Text style={{ color: "#fff", marginRight: 5 }}>⭐ 5.0</Text>
            <Text style={{ color: "#fff" }}>· $4.000/pax</Text>
          </View>
        </View>
      </TouchableOpacity>

       <TouchableOpacity
        onPress={() => router.push("/tourist-destination/LabuanBajoScreen")}
        style={{ borderRadius: 15, overflow: "hidden", marginBottom: 15 }} >
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400" }}
          style={{ width: "100%", height: 200 }}
        />
        <TouchableOpacity
        style={{ position: "absolute", top: 15, right: 15, backgroundColor: "rgba(255,255,255,0.8)",
            padding: 8, borderRadius: 20, }}
        >
            <Ionicons name="heart-outline" size={20} color="#FF6B3D" />
        </TouchableOpacity>

        <View style={{ position: "absolute", bottom: 15, left: 15, right: 15 }}>
          <View>
            <Text style={{ color: "#fff" }}>🇮🇩 Indonesia</Text>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Bali</Text>
          </View>
          <View
            style={{
              position: "absolute", right: 0, bottom: 0, flexDirection: "row", alignItems: "center", }}
          >
            <Text style={{ color: "#fff", marginRight: 5 }}>⭐ 5.0</Text>
            <Text style={{ color: "#fff" }}>· $6.000/pax</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}