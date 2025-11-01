import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ProductDetail() {
	const params = useLocalSearchParams();
	const { id } = params as { id?: string };



	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 20 }}>Product Detail</Text>
			<Text style={{ marginTop: 8 }}>ID: {id ?? "unknown"}</Text>
			<Link href="/" style={{ marginTop: 20 }}>
				Go to Home (Drawer)
			</Link>
		</View>
	);
}