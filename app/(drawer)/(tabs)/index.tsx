
import { Link, useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/" style={{ marginTop: 20, backgroundColor: 'lightblue', padding: 10 }}>
        Go to Home (Drawer)
      </Link>
      <Link href="/product/123" style={{ marginTop: 20 }}>
        Go to Product 123
      </Link>
      <Link href="/screens/login" style={{ marginTop: 20 }}>
        Go to Login
      </Link>
      <TouchableOpacity
        onPress={() => {
          router.replace("/");
        }}
        style={{ marginTop: 20, padding: 10, backgroundColor: "rgba(0,0,255,0.1)" }}
      >
        <Text style={{ color: "blue" }}>Go to Settings (Tab)</Text>
      </TouchableOpacity>
      <Link href="/" asChild>
        <Pressable style={{ marginTop: 20, padding: 10 }}>
          <Text style={{ color: "blue" }}>Go to Settings (Tab)</Text>
        </Pressable>
      </Link>
      <Link href="/start" asChild>
        <Pressable style={{ marginTop: 20, padding: 10, backgroundColor: "rgba(0,0,255,0.1)" }}>
          <Text style={{ color: "blue" }}>Kembali ke Start</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}