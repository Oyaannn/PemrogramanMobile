import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function TicketScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F4F1E8",
        paddingHorizontal: 20,
        paddingTop: 60,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 25,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Tickets</Text>
        <Ionicons name="ellipsis-vertical" size={20} color="black" />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: "#777", fontSize: 14 }}>Current locations</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Netherlands</Text>
          <Ionicons
            name="chevron-down"
            size={18}
            color="black"
            style={{ marginLeft: 5, marginTop: 3 }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        {["Hotel", "Aircraft", "Villa", "Attraction"].map((label, index) => {
          const active = label === "Aircraft";
          return (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: active ? "#FF6B3D" : "#E7E4D9",
                paddingVertical: 10,
                paddingHorizontal: 18,
                borderRadius: 25,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: active ? "#fff" : "#000",
                  fontWeight: active ? "700" : "500",
                  fontSize: 15,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ marginBottom: 25 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>June, 2025</Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="black"
            style={{ marginLeft: 5, marginTop: 3 }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[
            { day: "S", date: "22" },
            { day: "M", date: "23", active: true },
            { day: "T", date: "24" },
            { day: "W", date: "25" },
            { day: "T", date: "26" },
            { day: "F", date: "27" },
            { day: "S", date: "28" },
          ].map((item, i) => (
            <View
              key={i}
              style={{
                backgroundColor: item.active ? "#FF6B3D" : "#E7E4D9",
                borderRadius: 15,
                width: 40,
                alignItems: "center",
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  color: item.active ? "#fff" : "#000",
                  fontWeight: "600",
                }}
              >
                {item.day}
              </Text>
              <Text
                style={{
                  color: item.active ? "#fff" : "#000",
                  fontWeight: "600",
                }}
              >
                {item.date}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 15 }}>4 Tickets Found</Text>

      {Array.from({ length: 4 }).map((_, i) => (
        <View
          key={i}
          style={{
            backgroundColor: "#fff",
            borderRadius: 25,
            marginBottom: 20,
            overflow: "hidden",
            flexDirection: "row",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
          }}
        >

          <View
            style={{
              backgroundColor: "#FF6B3D",
              width: 60,
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 15,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <Text
              style={{
                transform: [{ rotate: "-90deg" }],
                color: "#fff",
                fontWeight: "600",
                letterSpacing: 1,
              }}
            >
              AIR LINES
            </Text>
            <View
              style={{
                backgroundColor: "#0B132B",
                borderRadius: 20,
                padding: 8,
                marginBottom: 5,
              }}
            >
              <Ionicons name="airplane" size={16} color="#fff" />
            </View>
          </View>

          <View style={{ flex: 1, padding: 15, justifyContent: "space-between" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 26, fontWeight: "bold" }}>NL</Text>
                <Text style={{ color: "#777" }}>Rotterdam</Text>
              </View>

              <Ionicons name="airplane" size={22} color="black" />

              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontSize: 26, fontWeight: "bold" }}>IDN</Text>
                <Text style={{ color: "#777" }}>Labuan Bajo</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View>
                <Text style={{ fontWeight: "bold" }}>5:30pm</Text>
                <Text style={{ color: "#777" }}>Mon, 23 Jun</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontWeight: "bold" }}>3:30am</Text>
                <Text style={{ color: "#777" }}>Tue, 24 Jun</Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginTop: 10,
              }}
            >
              $1.700
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}