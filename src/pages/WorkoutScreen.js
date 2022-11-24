import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import FitnessCards from "../components/FitnessCards";
import {FitnessItems} from '../context/FitnessContext'

//tela com os exercícios
const WorkoutScreen = () => {
  const route = useRoute();
  const navigate = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);


  useEffect(() => {
    <FitnessCards/>
  }, [])
  

  return (
    <View style={{flex:1}}>
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigate.goBack()}
          style={{ position: "absolute", top: 50, left: 20 }}
          name="arrow-back"
          size={24}
          color="white"
        />

      {/* Map */}
      <ScrollView>
      {route.params.excersises.map((item, key) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={key}
          >
            <Image
              style={{ height: 90, width: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", width:180}}>
                {item.name}
              </Text>

              <Text style={{ fontSize: 18, marginTop: 4, color: "grays" }}>
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? 
              <AntDesign style={{marginLeft:40}} name="checkcircle" size={24} color="green" />
            :
              null
            }
          </Pressable>
        ))}
      </ScrollView>
      
      <Pressable
        onPress={() => {
          navigate.navigate("FitScreen", {
            excersises: route.params.excersises,
          })
          setCompleted([]);
        }}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          borderRadius: 6,
          width: 120,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Iniciar
        </Text>
      </Pressable>
    </View>
  )
}

export default WorkoutScreen;

