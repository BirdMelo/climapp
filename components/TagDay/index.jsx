import { Image, StyleSheet, Text, View } from "react-native"
import colors from "../colors"

const TagDay = ({forecast, isTomorrow = false}) => {
    const weekdays = {
        Dom: 'Domingo',
        Seg: 'Segunda-feira',
        Ter: 'Terça-feira',
        Qua: 'Quarta-feira',
        Qui: 'Quinta-feira',
        Sex: 'Sexta-feira',
        Sáb: 'Sábado'
    }
    return (
        <View style={TagDay__style.container}>
            <View>
                <Text style={TagDay__style.day}>{isTomorrow?"Amanhã": weekdays[forecast.weekday]}</Text>
                <Text style={TagDay__style.day}>({forecast.date})</Text>
            </View>
            <Image style={TagDay__style.img} source={require('@/assets/images/tempIcon.png')}/>
            <Text style={TagDay__style.minMax}>{forecast.min}/{forecast.max}°</Text>
        </View>
    )
}
const TagDay__style = StyleSheet.create({
    container: {
        backgroundColor: colors.lightText+'15',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        gap: 16
    },
    day: {
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
        color: colors.lightText,
        alignSelf: 'center'
    },
    img: {
        width: 30,
        height: 30
    },
    minMax: {
        fontSize: 20,
        color: colors.lightText,
        fontFamily: 'Montserrat_600SemiBold'
    }
})
export default TagDay