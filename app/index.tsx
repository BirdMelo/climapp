import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Arrow_forward} from '../components/Icons'
import { useRouter } from "expo-router";
import colors from '../components/colors'
import { styles } from '@/components/Styles'
export default function Index() {
  const router = useRouter()
  return (
    <LinearGradient colors={[colors.gradienteStart,colors.gradienteEnd]} style={styles.container}>
      <Image source={require("../assets/images/Logo.png")}/>
      <Image source={require("../assets/images/Ilustra1.png")}/>
      <Text style={welcome_style.title}>Boas-vindas!</Text>
      <TouchableOpacity style={welcome_style.enterButton} onPress={()=>{
        router.push('/cities')
      }}>
        <Text style={welcome_style.textButton}>Entrar</Text>
        <Arrow_forward/>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const welcome_style = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: "Montserrat_400Regular"
  },
  enterButton: {
    backgroundColor: colors.highlight,
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
    color: colors.darkText,
    fontFamily: "Montserrat_600SemiBold"
  }
})