import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const ScienceCity = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/E6kZ1LV6Vt9Pemzg7';
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
                        <Image source={require('../assets/sc.jpeg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>Science City</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About The Place:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            Situated along the Sarkhej Gandhinagar Highway, Science City represents a visionary endeavor by the government of Gujarat aimed at fostering curiosity and exploration of science among the general populace through engaging entertainment and hands-on experiences. Encompassing a vast area of more than 107 hectares, the objective is to present imaginative exhibits, virtual reality interactive zones, and live demonstrations in a manner easily comprehensible to all.</Text>
                        <Text style={{ fontSize: 15, color: "#000", textAlign: 'justify', margin: 10 }}>
                            Gujarat Science City stands as a bold initiative of the Government of Gujarat to realize this vision. Set to become a sprawling hub in Ahmedabad, it seeks to offer a seamless fusion of education and entertainment. The center will showcase contemporary exhibits, immersive experiences, functional models, virtual reality simulations, interactive activity zones, laboratories, and live demonstrations, all geared towards enhancing public understanding of science and technology.
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Attractions: </Text>

                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Robotics Gallery:  </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", marginStart: 10, marginEnd: 10 }}>An interactive gallery that demonstrates the development in the domain of robotics. A socially skilled humanoid robot welcomes guests and introduces them to the facility.</Text>

                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Aquatic Gallery: </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", marginStart: 10, marginEnd: 10 }}> It takes visitors on a memorable voyage to the aqua world that features India's largest public aquarium with a state-of-the-art life support system.</Text>

                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Nature Park:  </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", marginStart: 10, marginEnd: 10 }}>Spread over an area of more than 20 acres, the Nature Park is a crown to the adventures of Science City. It houses a Mist Bamboo Tunnel, an Oxygen Park, a Butterfly Garden, a Colour Garden, a Chess and play areas for children.</Text>

                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Amphitheatre:</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", marginStart: 10, marginEnd: 10 }}>Gujarat Science City's Amphitheater (Open Air Theater) has a total capacity of 1200 people and conducts scientific events, particularly science popularization. Learners and community leaders may promote an atmosphere where scientific facts and statistics meet the thrill, passion, and power of the stage for a little innovation.</Text>

                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Energy Park:  </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", marginStart: 10, marginEnd: 10 }}>Energy Education Park covers a total area of nearly 9000 square metres in a hexagonal grid pattern. The five elementary aspects (Panchbhuta) of ancient Indian philosophy are used to classify the exhibitions at Energy Park.
                        </Text>

                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Hall Of Science: </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", marginStart: 10, marginEnd: 10 }}>The Hall of Science is a large open research facility where guests can participate in practical learning displays and study science via exploration. It encourages visitors to interact with the displays by touching and operating them, as well as learning about the intriguing science underpinning them</Text>

                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>Visiting Hours </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", marginStart: 10, marginEnd: 10 }}>Tuesdays to Sundays - 10 AM to 8 PM (Closed on Mondays)</Text>

                    </View>

                    <View>
                        <Image source={require('../assets/aquaticsgallery.jpg')} style={styles.sidi2} />
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
    sidi2: {
        height: 350,
        width: '95%',
        borderRadius: 20,
        marginVertical: 0,
        marginStart: 10,
        marginEnd: 10,
        marginTop: 15,
        alignSelf: "center"
    }


})

export default ScienceCity;