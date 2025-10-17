import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const StartScreen = () => {
  return (
    <View style={styles.safe}>
      <ImageBackground
        source={require("../assets/images/homescreen.jpg")}
        style={styles.background}
        imageStyle={styles.image}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Your Next Adventure Starts Here</Text>
          <Text style={styles.subtitle}>
            Life’s too short to stay in one place. Find your next favorite city,
            beach, or mountain and let's get moving!
          </Text>

          <Link
            href="/(drawer)/(tabs)"
            asChild
            style={{
              alignSelf: "flex-start",
              backgroundColor: "#00B8B0",
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 100,
            }}
          >
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Start Explore"
              hitSlop={8}
            >
              <Text style={styles.buttonText}>Start Explore</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "transparent" },
  background: { flex: 1 },
  image: { resizeMode: "cover" },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: { fontSize: 30, fontWeight: "700", color: "white", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "white", marginBottom: 20 },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonPressed: { opacity: 0.9, backgroundColor: "#00B8B0" },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: 'black',
  },
});

export default StartScreen;