import { Stack } from "expo-router";

export default function RootLayout() {
    return (            // kalo mau tambahin screen atau tampilkan, tambahin di dalam Stack.Screen nya
        <Stack screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="tourist-destination/LabuanBajoScreen" options={{ headerShown: false}}/> */}
            <Stack.Screen name="start" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" options={{headerShown: false}} />
            <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
            <Stack.Screen name="screens/login" options={{ title: "Login" }} />
        </Stack>
    );
}