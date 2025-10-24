import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0B132B",
          borderTopWidth: 0,
          height: 90,
          position: "absolute",
          paddingTop: 10
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={28}
              color={focused ? "#ffffff" : "#7F8C8D"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="ticket"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ticket" : "ticket-outline"}
              size={28}
              color={focused ? "#ffffff" : "#7F8C8D"}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={28}
              color={focused ? "#ffffff" : "#7F8C8D"}
            />
          ),
        }}
      />
    </Tabs>
  );
}