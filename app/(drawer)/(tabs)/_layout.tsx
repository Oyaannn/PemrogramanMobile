import { Tabs } from "expo-router";
import React from "react";

export default function DrawerLayout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}

        >
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Tabs.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
        </Tabs>
    );
}