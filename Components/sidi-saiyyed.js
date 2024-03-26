import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking, TouchableOpacityBase, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const Sidisaiyyed = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/G5i6G3VhSHg1bM5F9';
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
                        <Image source={require('../assets/sidi.jpg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>Sidi Saiyyed Mosque</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About the location:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>The Sidi Sayed Mosque is famed for its exquisite jali windows, spider web fine, depicting the intricate intertwining branches of the ‘tree of life’ that is best seen from the road that runs along the back of the mosque. The central arch of the mosque is also bereft of the intricate latticework, making the eyes go straight to the main stunning work at the back wall. The mosque still functions as a place of prayer.</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Brief History:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            Popularly known as Sidi Sayed ni Jali, the mosque was constructed during the period of 1572–73 AD by Sidi Sayed. Remarkably, this period coincided with the Mughals' conquest of Gujarat. Sidi Sayed, an Abyssinian saint of African descent, served in Ahmed Shah's army. Hailing from a community distinguished by its unique culture and appearance, remnants of which endure in various parts of Gujarat to this day.</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Siddi-Sayed-Mosque-1.jpg')} style={styles.sidi} />
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
        // position: 'relative'
    },
    left: {
        height: 40,
        width: 40,
        // borderRadius: 15,
        margin: 5

        // position: ''
    },
    sidititle: {
        color: '#0B646B',
        fontSize: 30,
        marginStart: 15,
    },


})

export default Sidisaiyyed;