import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Settings</Text>
            <Button title="Go to Profile" onPress={() => router.push("/profile")} />
            <TouchableOpacity
                onPress={() => router.replace("/")}
                style={{ 
                    marginTop: 20, 
                    padding: 10, 
                    backgroundColor: "rgba(0,0,255,0.1)" 
                }}
            >
                <Text style={{ color: "blue" }}>Go to Setting (Tab)</Text>
            </TouchableOpacity>
        </View>
    );
}