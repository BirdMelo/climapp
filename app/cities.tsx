import colors from "@/components/colors"
import { styles } from "@/components/Styles"
import { LinearGradient } from "expo-linear-gradient"
import { TextInput, View, FlatList, StyleSheet } from "react-native"
import CardCity from '@/components/CardCities'
import citiesData from '@/data/cities.json'
const Cities = () => {
    return (
        <LinearGradient
            colors={[colors.gradienteStart, colors.gradienteEnd]} 
            style={[styles.container, cities_style.container]}
        >
            <TextInput
                style={cities_style.input}
                placeholder="Digite a cidade"
            />
            <FlatList
                style={cities_style.cardList}
                data = {citiesData}
                renderItem={({item}) => 
                    <CardCity city={item.city} temp={item.temp}/>
                }
                keyExtractor={item => item.city}
                ItemSeparatorComponent={() => <View style={{height:16}} ></View>}
            />
        </LinearGradient>
    )
}
const cities_style = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 60
    },
    cardList: {
        width: '100%'
    },
    input: {
        backgroundColor: colors.lightText+'15',
        width: '100%',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})
export default Cities