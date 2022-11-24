import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../context/FitnessContext";

//tela do exercício ao clicar em iniciar

const FitScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  console.log(current, "primeiro exercicio");
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FitnessItems);

  useEffect(() => {
    <FitnessCards/>
  }, [])
  
  return (
    <SafeAreaView style={{flex:1}}>
      {/* Imagem do exercício */}
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: current.image }}
      />
      {/* Nome do exercicio */}
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
      {current.name}
      </Text>
      {/* repetições dos exercicio */}
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>

    {/* map */}
    {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Done
          </Text>
        </Pressable>
      ) : (
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("RestScreen");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Done
          </Text>
        </Pressable>
      )}

      {/* Map */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("RestScreen");

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            width: 100,
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Prev
          </Text>
        </Pressable>

        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            style={{
              width: 100,
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Skip
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("RestScreen");
              setTimeout(() => {
                setIndex(index - 1);
              }, 2000);
            }}
            style={{
              width: 100,
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Skip
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  )
}

export default FitScreen;
