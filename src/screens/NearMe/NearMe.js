import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default class NearMe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 30, fontWeight: "700" }}>
          Near Me s page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
