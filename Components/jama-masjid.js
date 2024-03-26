import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking,TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const Jamamasjid = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/eid6BogrDVzbGoC46';
        Linking.openURL(url);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                <View style={{ position: 'relative' }}>
                    <View>
                    <TouchableOpacity onPress={() => Props.navigation.navigate("Home")}>
                            <Image source={require('../assets/left-arrow.png')} style={styles.left} />
                        </TouchableOpacity>
                        <Image source={require('../assets/jama-masjid-2.jpeg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>jama Masjid</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About the location:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            Constructed by Ahmed Shah in 1423, the Jama Masjid, situated on Mahatma Gandhi (MG) Road, stands as one of India's most magnificent mosques, boasting a vast and serene courtyard. This architectural masterpiece exhibits a fusion of styles from Hindu and Jain traditions, evident in the lotus-like carvings adorning some of its domes, reminiscent of Jain temple architecture. Within the prayer hall, 260 columns provide support to 15 principal domes, each at varying elevations. Originally, the mosque featured two 'shaking' minarets; however, they suffered significant damage in the great earthquake of 1819, losing half of their height. Nonetheless, their lower segments still flank the central portico of the prayer hall.</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Brief History:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            During the reign of Ahmed Shah in the 15th century, the Jama Masjid emerged as the primary sanctuary for Muslim prayers. It purportedly held the distinction of being the largest mosque across the Indian subcontinent. Constructed as an integral component of the city's broader urban plan, the mosque occupies a position south of the ceremonial axis originating from the Maidan-i Shah, featuring three arches known as Teen Darwaza within the old city. Adjacent to the mosque's western periphery stand the mausoleums of Ahmed Shah, his son, and his grandson. A brief stroll away lies Rani no Hajiro, housing the tombstones of queens and wives from the dynasty.</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/jama-masjid-1.jpg')} style={styles.sidi} />
                    </View>


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    imagebackground: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    sidi: {
        height: 350,
        width: '95%',
        borderRadius: 20,
        marginVertical: 0,
        marginStart: 10,
        marginEnd: 10,
        alignSelf: "center"
    },
    left: {
        height: 40,
        width: 40,
        margin: 5
    },
    sidititle: {
        color: '#0B646B',
        fontSize: 30,
        marginStart: 15,
    },


})

export default Jamamasjid;