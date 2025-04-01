import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Noti = ({ item }) => {
  return (
    <View
      style={[
        styles.NotiContainer,
        { backgroundColor: item.backgroundColor || "#FFFFFF" },
      ]}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NotiContainer: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: "#AAAAAA",
  },
});

export default Noti;
