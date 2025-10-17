import { Drawer } from "expo-router/drawer";
import React from "react";

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{ headerShown: true }}
        >
            <Drawer.Screen 
                name="(tabs)" 
                options={{ 
                    title: "Home",
                    drawerLabel: "Home",
                    headerStyle: { backgroundColor: '#f4511e' }
                }} 
            />

            <Drawer.Screen 
                name="profile" 
                options={{ 
                    title: "Profile",
                    drawerLabel: "Profile"
                }} 
            />
        </Drawer>
    );
}