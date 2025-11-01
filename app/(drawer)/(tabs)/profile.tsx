import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9F9E0" }}>
      <View
        style={{
          backgroundColor: "#0B132B",
          paddingVertical: 60,
          paddingHorizontal: 25,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 26, fontWeight: "bold" }}>Profile</Text>
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: -40,
          marginBottom: 20,
        }}
      >
        <Image source={require("../../../assets/images/foto.png")}
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
            borderWidth: 4,
            borderColor: "#fff",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>Arroyan</Text>
        <Text style={{ color: "#555" }}>muhammad.irpan_ti23@nusaputra.ac.id</Text>
      </View>

      <View style={{ paddingHorizontal: 25, gap: 15 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Ionicons name="notifications-outline" size={22} color="#0B132B" />
          <Text style={{ marginLeft: 15, fontSize: 16, color: "#0B132B" }}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Ionicons name="language-outline" size={22} color="#0B132B" />
          <Text style={{ marginLeft: 15, fontSize: 16, color: "#0B132B" }}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Ionicons name="lock-closed-outline" size={22} color="#0B132B" />
          <Text style={{ marginLeft: 15, fontSize: 16, color: "#0B132B" }}>Privacy & Security</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Ionicons name="help-circle-outline" size={22} color="#0B132B" />
          <Text style={{ marginLeft: 15, fontSize: 16, color: "#0B132B" }}>Help Center</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", marginTop: 40, marginBottom: 60 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF6B3D",
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600", marginLeft: 10 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}