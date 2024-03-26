import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const Adalaj = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/KW1SrMPW7zNVGSCX6';
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
                        <Image source={require('../assets/AdalajniVav.jpg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>Adalaj Ni Vav</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About the location:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            The majestic 15th-century stepwell, though centuries have passed, retains much of its splendor. Adorned with intricate carvings, the pillars supporting its five storeys stand largely unblemished. Serving as resting spots for pigeons in motion, the beams continue to draw awe from throngs of visitors. This architectural marvel epitomizes the fusion of Indo-Islamic styles prevalent in many stepwells of the era, boasting unique features that underscore its significance.</Text>
                        <Text style={{ fontSize: 15, color: "#000", textAlign: "justify", margin: 10 }}>
                            One striking aspect of the vav is its design facilitating natural light and ventilation. Openings in the ceilings above the landings allow for the ingress of light and air, yet prevent direct sunlight from touching the steps, except at noon. As a result, the temperature inside the well remains notably cooler, approximately six degrees, than its surroundings.
                        </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            With three entrances and stairs leading to an underground level, the vav reveals ornately carved walls depicting mythological and village scenes. Notable carvings include the Ami khumbor (pot of life-giving water) and the Kalp vriksha (tree of life), both meticulously crafted from single stone slabs. Additionally, a frieze featuring the Navagraha (nine planets) adorns the edge of the well, believed to safeguard the monument from ill omens.
                        </Text>
                        <Text style={{ fontSize: 15, color: "#000", textAlign: "justify", margin: 10 }}>
                            Despite the passage of time, this stepwell continues to stand as a testament to superior architecture, captivating all who behold its enduring beauty and historical significance.
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Brief History:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            Constructed in 1411 by Mahmud Begada, the stepwell stands as a tribute to Queen Rudabai, consort of Veersinh, the Vaghela chieftain. This architectural marvel served a dual purpose, catering to both utilitarian and spiritual needs of the surrounding populace. Villagers from nearby settlements frequented the stepwell to draw water, while also finding solace and spiritual nourishment within its serene confines.</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Adalaj-ni-Vav1.jpg')} style={styles.sidi} />
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

export default Adalaj;