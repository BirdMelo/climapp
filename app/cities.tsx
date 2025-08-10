import colors from "@/components/colors"
import { styles } from "@/components/Styles"
import { LinearGradient } from "expo-linear-gradient"
import { TextInput, View, FlatList, StyleSheet } from "react-native"
import CardCity from '@/components/CardCities'
import citiesData from '@/data/cities.json'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from "react"
const Cities = () => {

    const [search, setSearch] = useState("")
    const [filteredCities, setFilteredCities] = useState(citiesData)

    useEffect(() => {
        console.log(search)
        const newFilteredCities = citiesData.filter(
            city => city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        setFilteredCities(newFilteredCities)
    }, [search])

    return (
        <LinearGradient
            colors={[colors.gradienteStart, colors.gradienteEnd]} 
            style={[styles.container, cities_style.container]}
        >
            <TextInput
                style={cities_style.input}
                placeholder="Digite a cidade"
                onChangeText={(value) => setSearch(value)}
                placeholderTextColor={colors.lightText}
            />
            <MaterialIcons style={cities_style.inputIcon} name="search" size={16} color={colors.lightText}/>
            <FlatList
                style={cities_style.cardList}
                data = {filteredCities}
                renderItem={({item}) => 
                    <CardCity city={item} temp={item.temp}/>
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
        position: 'relative',
        backgroundColor: colors.lightText+'15',
        width: '100%',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 8,
        paddingRight: 35
    },
    inputIcon: {
        position: 'absolute',
        top: 70,
        right: 30
    }
})
export default Cities