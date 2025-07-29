import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Arrow_forward} from '../components/Icons'
export default function Index() {
  return (
    <LinearGradient colors={["#00457D","#05051F"]} style={style.container}>
      <Image source={require("../assets/images/Logo.png")}/>
      <Image source={require("../assets/images/Ilustra1.png")}/>
      <Text style={style.title}>Boas-vindas!</Text>
      <TouchableOpacity style={style.enterButton}>
        <Text style={style.textButton}>Entrar</Text>
        <Arrow_forward/>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 64
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: "Montserrat"
  },
  enterButton: {
    backgroundColor: '#7693FF',
    width: "65%",
    padding: 8,
    alignItems: 'center',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#01080E',
    fontFamily: "Montserrat"
  }
})