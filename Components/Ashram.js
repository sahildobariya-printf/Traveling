import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const Ashram = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/EFXk3vJrCu1BtbkG7';
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
                        <Image source={require('../assets/SabarmatiAshram14.jpg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>Sabarmati Ashram</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About the location:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            Situated north of Ahmedabad in Gujarat, the Sabarmati Ashram originally served as the home of Mahatma Gandhi and his wife, Kasturba. Nestled alongside the tranquil banks of the Sabarmati River, the ashram holds profound historical significance. It was from here that Gandhi embarked on his iconic Dandi March. Positioned between a prison and a cemetery, Gandhi saw this location as symbolic, believing that a Satyagrahi (practitioner of nonviolent resistance) would likely face either incarceration or death. A visit to the Sabarmati Ashram evokes a profound sense of independence and introspection. Among its various institutions, the museum stands out as the most renowned, offering invaluable insights into Gandhi's life and teachings.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            Throughout the premises, visitors can explore a wealth of personal letters and photographs belonging to Gandhi. Among the ashram's structures are notable landmarks such as Upasana Mandir, Magan Niwas, Vinoba, Nandini, and Kutir. Over time, the ashram has evolved into a significant historical site, bearing witness to countless pivotal moments. A visit to this revered destination offers a unique opportunity to delve into India's rich heritage and glean insights into its ancient past.
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Brief History:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            Established in May 1915 at Jivanlal Desai's Kochrab Bungalow, approximately 10 kilometers from its current location, the original ashram was initially named Satyagraha Ashram. Jivanlal Desai, a barrister and associate of Gandhi, played a significant role in its foundation. However, as Mahatma Gandhi's activities expanded to include farming and animal husbandry, necessitating more space, the ashram was relocated to a sprawling 36-acre site along the banks of the Sabarmati River on June 17, 1917.</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/SabarmatiAshram7.jpg')} style={styles.sidi} />
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

export default Ashram;