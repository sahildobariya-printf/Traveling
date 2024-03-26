import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const JainTemple = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/NvVKKnSvygJgNw956';
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
                        <Image source={require('../assets/hutheesing-jain-temple-1.jpg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>Hutheesing Jain Temple</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About the location:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            Crafted from pristine white marble, this temple stands as a testament to timeless elegance and devotion, cherished by numerous generations of Jain families. Commissioned in 1848 AD at an estimated cost of 10 lakh rupees by the affluent merchant Sheth Hutheesing, it serves as a reverent dedication to the 15th Jain Tirthankara, Shri Dharmanatha. Skilled artisans from the Sonpura and Salat communities, renowned for their craftsmanship in stone, contributed to its creation. Among them, Premchand Salat is credited for his exceptional work on the Hutheesing Jain temple.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>Characterized by its harmonious proportions and meticulous design, the temple exudes a sense of grandeur and reverence. As one scholar aptly remarked, "Each part goes on increasing in dignity as we approach the sanctuary. Whether looked at from its courts or from the outside, it possesses variety without confusion and appropriateness of every part to the purpose for which it was intended."</Text>
                    </View>
                    <View>

                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            Located outside the Delhi Gate, the temple is spread over a sprawling courtyard, a mandapa surmounted by a large ridged dome, which is supported by 12 ornate pillars. The small garbhagruh (main shrine) on the east end reaches up into three stunningly carved spires and encircled by 52 small shrines dedicated to the various Tirthankars. There are large protruding porches with magnificently decorated columns and figural brackets on three outer sides. Also, a recently built 78 ft Mahavir stambha (tower) fashioned after the renowned tower at Chittor in Rajasthan, flanks the outer courtyard by the front entrance. Some of the motifs used in the design remind one of the Sultanate minarets of the Mughal period.</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/hutheesing-jain-temple-2.jpg')} style={styles.sidi} />
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

export default JainTemple;