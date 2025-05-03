import React from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";

const AppLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
 
});
