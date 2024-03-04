import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Index = ({ navigation }) => {
  return (
    <View style={styles.MainView}>
      <MainButton navigation={navigation}/>
    </View>
  );
};

const MainButton = ({ navigation }) => (
  <Pressable onPress={() => navigation.navigate("Select")}>
    <View style={styles.container}>
      <Text>How's Life</Text>
    </View>
  </Pressable>
);

export default Index;

const styles = StyleSheet.create({
  MainView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#6E72CB",
  },
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 100,
    elevation: 10,
  },
});
