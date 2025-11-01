// components/DestinationCard.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Destination } from "../utils/api";

interface Props {
  item: Destination;
  onPress: () => void;
}

export default function DestinationCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 15,
      }}
    >
      <Image source={{ uri: item.images }} style={{ width: "100%", height: 200 }} />

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

      <View style={{ position: "absolute", bottom: 15, left: 15, right: 15 }}>
        <Text style={{ color: "#fff" }}>🇮🇩 {item.country}</Text>
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
          {item.name}
        </Text>
        <Text style={{ color: "#fff" }}>
          ⭐ {item.rating} · ${item.price}/pax
        </Text>
      </View>
    </TouchableOpacity>
  );
}
