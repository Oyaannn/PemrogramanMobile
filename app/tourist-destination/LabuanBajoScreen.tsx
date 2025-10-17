import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LabuanBajoScreen() {
    const [count, setCount] = useState(1);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
                }}
                style={styles.headerImage}
            >
                <LinearGradient
                    colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.5)"]}
                    style={StyleSheet.absoluteFill}
                />
                <View style={styles.headerTop}>
                    <TouchableOpacity style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.weatherBox}>
                        <Ionicons name="sunny-outline" size={18} color="white" />
                        <Text style={styles.weatherText}>24°C</Text>
                    </View>
                </View>

                <View style={styles.headerContent}>
                    <View style={styles.ratingBox}>
                        <Ionicons name="star" size={16} color="white" />
                        <Text style={styles.ratingText}>5.0</Text>
                    </View>
                    <Text style={styles.title}>Labuan Bajo</Text>
                    <Text style={styles.subtitle}>
                        From crystal-clear waters to breathtaking sunsets, Labuan Bajo is
                        calling! Explore hidden islands, swim with manta rays, and create
                        memories that last a lifetime.
                    </Text>
                </View>
            </ImageBackground>

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
            >
                <Text style={styles.country}>
                    🇮🇩 <Text style={styles.countryText}>Indonesia</Text>
                </Text>

                <Text style={styles.sectionTitle}>
                    Discover the Beauty of Labuan Bajo
                </Text>

                <View style={styles.reviewBox}>
                    <View style={styles.reviewHeader}>
                        <Image
                            source={{
                                uri: "https://randomuser.me/api/portraits/men/45.jpg",
                            }}
                            style={styles.avatar}
                        />
                        <Text style={styles.reviewName}>By Rifqi starboy</Text>
                    </View>
                    <Text style={styles.reviewText}>
                        Wow amazing yahh, best experience in my life very very worth it i
                        like it! Very good very well
                    </Text>
                </View>

                <TouchableOpacity style={styles.viewAllBtn}>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Recomendation in Bajo</Text>

                <View style={styles.recommendCard}>
                    <Image
                        source={{
                            uri: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
                        }}
                        style={styles.recommendImage}
                    />
                    <View style={styles.recommendInfo}>
                        <Text style={styles.recommendTitle}>Phinisi Luxury Private Trip</Text>
                        <Text style={styles.recommendDesc}>
                            Complimentary pick-up included. Destination:Labuan Bajo is also the administrative center of Komodo District.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <BlurView intensity={80} tint="dark" style={styles.bottomContainer}>
                <View style={styles.bottomContent}>
                    <View style={styles.counterSection}>
                        <TouchableOpacity
                            style={styles.plusButton}
                            onPress={() => setCount(count + 1)}
                        >
                            <Text style={styles.plusText}>+</Text>
                        </TouchableOpacity>

                        <Text style={styles.countText}>{count}</Text>

                        <TouchableOpacity
                            style={styles.minusButton}
                            onPress={() => setCount(Math.max(1, count - 1))}
                        >
                            <Text style={styles.minusText}>−</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.totalSection}>
                        <Text style={styles.totalLabel}>Total Amount</Text>
                        <Text style={styles.totalAmount}>
                            ${(count * 10000).toLocaleString()}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
            </BlurView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8f6ef" },
    headerImage: { width: "100%", height: 330, justifyContent: "flex-end" },
    headerTop: {
        position: "absolute",
        top: Platform.OS === "android" ? 45 : 55,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backButton: {
        backgroundColor: "rgba(255,255,255,0.3)",
        padding: 8,
        borderRadius: 50,
    },
    weatherBox: {
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: "center",
    },
    weatherText: { color: "white", fontWeight: "600", marginLeft: 5 },
    headerContent: { paddingHorizontal: 20, paddingBottom: 30 },
    ratingBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        paddingHorizontal: 8,
        width: 58,
        height: 25,
    },
    ratingText: { color: "white", marginLeft: 5, fontWeight: "600" },
    title: { color: "white", fontSize: 32, fontWeight: "700", marginTop: 5 },
    subtitle: {
        color: "white",
        fontSize: 11,
        lineHeight: 18,
        marginTop: 5,
        opacity: 0.9,
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 180,
    },
    country: { fontSize: 16, marginBottom: 5 },
    countryText: { color: "#333", fontWeight: "600" },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginVertical: 10,
        color: "#111",
    },
    reviewBox: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        marginTop: 10,
    },
    reviewHeader: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
    avatar: { width: 30, height: 30, borderRadius: 15, marginRight: 8 },
    reviewName: { fontWeight: "600", color: "#444" },
    reviewText: { color: "#555", fontSize: 14 },
    viewAllBtn: {
        alignSelf: "center",
        backgroundColor: "#ecead9",
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 20,
        marginVertical: 10,
    },
    viewAllText: { color: "#333", fontWeight: "600" },
    recommendCard: {
        backgroundColor: "#182f40",
        borderRadius: 18,
        flexDirection: "row",
        overflow: "hidden",
        marginTop: 10,
    },
    recommendImage: { width: 100, height: 100 },
    recommendInfo: { flex: 1, padding: 10, justifyContent: "center" },
    recommendTitle: { color: "white", fontSize: 15, fontWeight: "700" },
    recommendDesc: { color: "white", fontSize: 12, marginTop: 4 },

    bottomContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(131, 133, 137, 0.85)",
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 30,
        overflow: "hidden",
    },
    bottomContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },

    counterSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    minusButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#4a5568",
        alignItems: "center",
        justifyContent: "center",
    },
    minusText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: -3,
    },
    countText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 16,
    },
    plusButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ff6347",
        alignItems: "center",
        justifyContent: "center",
    },
    plusText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: -3,
    },

    totalSection: {
        alignItems: "flex-start",
    },
    totalLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 13,
        marginBottom: 2,
    },
    totalAmount: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    },

    bookButton: {
        backgroundColor: "#ff6347",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
    },
    bookButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});