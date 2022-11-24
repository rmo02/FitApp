import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable onPress={() => navigation.navigate('Workout', {
          image: item.image,
          excersises: item.excersises,
          id: item.id,
        })}
        style={{ margin: 10 }} key={key}>
          <Image
            style={{ with: "95%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 10,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15, left:10 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;