import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const BhadraFort = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/ihD6dABPGMFDtBE48';
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
                        <Image source={require('../assets/Bhadra-fort3.jpg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>Bhadra Fort</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About the location:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            Ascend the Bhadra Fort for a panoramic vista of the historic old city. Erected soon after the establishment of Ahmedabad in 1411, Bhadra Fort presently serves as home to government institutions and a revered Kali temple. Its gate once marked the eastern threshold of the Ahmedabad citadel, extending westward to the river. From the fort's rooftop, visitors can marvel at its formidable architecture and admire sweeping vistas of the surrounding streets.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>Situated between the fort and the Teen Darwaja (Triple Gateway) to its east lies the Maidan Shahi (Royal Square), a space where regal processions and exhilarating polo matches unfolded.</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Brief History:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            Constructed by Ahmed Shah, the esteemed founder of the city, in 1411 AD, Bhadra Fort bears a rich historical legacy. Its appellation is derived from the nearby Bhadrakali Temple. Centuries ago, the fort was alternatively known as Aark fort. Following the British conquest in 1817, the fort served as a prison until India gained independence. In 2014, the fort underwent extensive renovation, preserving its heritage and offering visitors a captivating glimpse into history.</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Bhadra-fort5.jpg')} style={styles.sidi} />
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

export default BhadraFort;