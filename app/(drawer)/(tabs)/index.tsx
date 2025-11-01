import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Destination, getDestinations } from "../../utils/api";

export default function HomeScreen() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getDestinations()
      .then(setDestinations)
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FF6B3D" />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9F9E0", padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Hi, Arroyan</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF6B3D",
            borderRadius: 20,
            padding: 10,
            position: "relative",
          }}
        >
          <Ionicons name="heart" size={20} color="#fff" />
          <View
            style={{
              position: "absolute",
              top: -2,
              right: -2,
              backgroundColor: "#000",
              borderRadius: 8,
              paddingHorizontal: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 10 }}>0</Text>
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
        <Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold", }}
        >
          Plan Your{"\n"}Summer!
        </Text>
        <View style={{ backgroundColor: "#FF8B5B", borderRadius: 10, padding: 10, alignSelf: "center", }} >
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
          <TextInput
            placeholder="Search destination..."
            style={{ marginLeft: 8, flex: 1 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#0B132B",
            padding: 12,
            borderRadius: 12,
            marginLeft: 10,
          }}
        >
          <Ionicons name="options" size={20} color="#fff" />
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 15, }} >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Popular Destination
        </Text>
        <Text style={{ color: "#888" }}>View All</Text>
      </View>

      {destinations.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            router.push({ pathname: "../tourist-destination/LabuanBajoScreen", params: { id: item.id }, })
          }
          style={{
            borderRadius: 15,
            overflow: "hidden",
            marginBottom: 15,
            position: "relative",
          }}
        >
          <Image source={{ uri: item.images }}
          style={{ width: "100%", height: 200 }}
          />

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 15,
              right: 15,
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: 8,
              borderRadius: 20,
            }}
          >
            <Ionicons name="heart-outline" size={20} color="#FF6B3D" />
          </TouchableOpacity>

          <View
            style={{
              position: "absolute",
              bottom: 15,
              left: 15,
              right: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View>
              <Text style={{ color: "#fff", fontSize: 13 }}>
                🇮🇩 {item.country}
              </Text>
              <Text
                style={{ fontSize: 20, color: "#fff", fontWeight: "bold", marginTop: 2,}}
              >
                {item.name}
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="star" size={14} color="#FFD700" />
                <Text
                  style={{
                    color: "#fff",
                    marginLeft: 4,
                    fontWeight: "600",
                    fontSize: 13,
                  }}
                >
                  {item.rating}
                </Text>
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                  marginTop: 3,
                }}
              >
                ${item.price.toLocaleString()}/pax
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}