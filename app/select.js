import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import moods from "../moods.json";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const Select = () => {
  return (
    <View style={styles.MainView}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Moods />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const Moods = () => {
  return (
    <View>
      {moods.map((mood, index) => {
        const randomWidth = Math.floor(Math.random() * (width - 140));
        console.log(randomWidth);
        return <Mood key={index} id={mood.id} mood={mood.mood} randomWidth={randomWidth}/>;
      })}
    </View>
  );
};

const Mood = ({ id, mood, randomWidth }) => (
  <View style={[styles.moodCard, {marginLeft: randomWidth}]}>
    <Text>{mood}</Text>
  </View>
);

export default Select;

const styles = StyleSheet.create({
  MainView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#6E72CB",
  },
  moodCard: {
    opacity: 0.8,
    backgroundColor: "white",
    borderRadius: 100,
    padding: 30,
    margin: 10,
    width: 140,
    alignItems: "center",
    elevation: 10,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,

  },
});
