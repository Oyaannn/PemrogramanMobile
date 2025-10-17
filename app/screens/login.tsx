import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Login() {
	const router = useRouter();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 20, marginBottom: 12 }}>Login Screen</Text>
			<Button title="Sign in (mock)" onPress={() => router.replace("/")} />
		</View>
	);
}