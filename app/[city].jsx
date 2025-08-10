import colors from "@/components/colors"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { LinearGradient } from "expo-linear-gradient"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import TagDay from "@/components/TagDay"
const CityDetails = () => {
    const searchParams = useLocalSearchParams()
    const [cityDetails, setCityDetails] = useState(null)

    const handleData = async () => {
        try {
            const response = await fetch("https://climapp-api.vercel.app/api")
            const responseJSON = await response.json()
            const city = await responseJSON.find(
                (cityData) => cityData.city === searchParams.city
            )
            setCityDetails(city)
        }catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        handleData()
    }, [])
    return(
        <LinearGradient
            colors={[colors.gradienteStart, colors.gradienteEnd]}
            style={[detailsStyle.container]}
        >
            {cityDetails ? (
                <View style={detailsStyle.bodyDetails}>
                    <View>
                        <MaterialIcons name="chevron-left" size={24} color={colors.lightText} style={detailsStyle.backArrow}/>
                        <Text style={detailsStyle.headerTitle}>
                            {cityDetails.city}
                        </Text>
                    </View>

                    <View style={detailsStyle.detailsCard}>
                        <Text style={detailsStyle.detailsCard__day}>Hoje ({cityDetails.forecast[0].date})</Text>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('@/assets/images/tempIcon.png')} style={detailsStyle.img}/>
                            <Text style={detailsStyle.detailsCard__temp}>{cityDetails.temp}°</Text>
                            <Text style={detailsStyle.detailsCard__description}>{cityDetails.forecast[0].description}</Text>
                        </View>
                        <View style={detailsStyle.detailsCard__addonsContainer}>
                            <View style={detailsStyle.detailsCard__addons}>
                                <Image source={require('@/assets/images/Ícone umidade.png')}/>
                                <Text style={detailsStyle.detailsCard__addons__layout}>Humidity:</Text>
                                <Text style={detailsStyle.detailsCard__addons__values}>{cityDetails.forecast[0].humidity}%</Text>
                            </View>
                            <View style={detailsStyle.detailsCard__addons}>
                                <Image source={require('@/assets/images/Ícone Temperatura.png')}/>
                                <Text style={detailsStyle.detailsCard__addons__layout}>Min/Max:</Text>
                                <Text style={detailsStyle.detailsCard__addons__values}>{cityDetails.forecast[0].min}/{cityDetails.forecast[0].max}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={detailsStyle.tagDays__container}>
                        <TagDay isTomorrow={true} forecast={cityDetails.forecast[1]}/>
                        <TagDay forecast={cityDetails.forecast[2]}/>
                        <TagDay forecast={cityDetails.forecast[3]}/>
                    </View>
                </View>
            ):(
                <View></View>
            )}
        </LinearGradient>
    )
}
const detailsStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40
    },
    headerTitle: {
        color: colors.lightText,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 20,
        textAlign: 'center'
    },
    backArrow: {
        position: 'absolute',
        left: 0
    },
    bodyDetails: {
        gap: 40
    },
    detailsCard: {
        backgroundColor: colors.highlightHover,
        padding: 16,
        borderRadius: 24,
        alignItems:'center',
        gap: 24
    },
    detailsCard__day: {
        color: colors.lightText,
        fontFamily: 'Montserrat_500Medium'
    },
    detailsCard__temp: {
        fontSize: 43,
        color: colors.lightText,
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center'
    },
    detailsCard__description: {
        fontFamily: 'Montserrat_400Regular',
        color: colors.lightText
    },
    detailsCard__addonsContainer: {
        width: '100%',
        gap: 8
    },
    detailsCard__addons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsCard__addons__layout: {
        flex: 1,
        paddingLeft: 8,
        fontFamily: 'Montserrat_600SemiBold',
        color: colors.lightText
    },
    detailsCard__addons__values: {
        fontFamily: 'Montserrat_400Regular',
        color: colors.lightText
    },
    tagDays__container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gab: 8,

    }
})

export default CityDetails