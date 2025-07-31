import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../colors";
import { WeatherIcon } from "../Icons";
import { useRouter } from "expo-router";

export default function CardCity({city, temp}) {
    const router = useRouter()
    return (
        <TouchableOpacity style={cardStyle.card} onPress={()=>{
            router.push(`/${city.city}`)
        }}>
            <WeatherIcon/>
            <Text style={cardStyle.cardText}>{city}</Text>
            <Text style={[cardStyle.cardText,cardStyle.cardTemp]}>{temp}°</Text>
        </TouchableOpacity>
    )
}

const cardStyle = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.lightText+'15',
        borderRadius: 16,
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardText: {
        color: colors.lightText,
        fontFamily: 'Montserrat_500Medium'
    },
    cardTemp: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 25
    }
})