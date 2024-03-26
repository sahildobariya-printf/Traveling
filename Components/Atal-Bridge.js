import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ImageBackground, ScrollView, Linking, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";

const AtalBridge = (Props) => {
    const openWebsite = () => {
        const url = 'https://maps.app.goo.gl/VdAqLV8XC9vt2SrR8';
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
                        <Image source={require('../assets/ab1.jpg')} style={styles.sidi} />
                    </View>
                    <Text style={styles.sidititle}>Atal Bridge Riverfront</Text>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                        <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} onPress={openWebsite} />
                        <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }} onPress={openWebsite}>Ahmedabad,Gujarat</Text>
                    </View>
                    <View>
                        {/* <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>About the location:</Text> */}
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>
                            The groundbreaking Atal bridge stands as a pioneering feat, marking the first of its kind in the country. Serving as a vital link between the western and eastern sections of the Sabarmati Riverfront, this iconic structure draws inspiration from the vibrant tradition of kite flying during the Uttrayan festival. Its design and color palette pay homage to the spirited hues of kites soaring high in the sky.</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', margin: 10 }}>Crafted entirely from glass, the Atal bridge offers pedestrians a unique experience, allowing them to stroll above the river and revel in the joy of its flowing waters. Positioned between the Sardar Bridge and Ellis Bridge, this architectural marvel is dedicated solely to pedestrian traffic, featuring ample seating arrangements for visitors to admire the scenic beauty of the river below.</Text>

                        <Text style={{ fontSize: 15, color: '#000', textAlign: "justify", margin: 10 }}>
                            Further enhancing its allure, the bridge boasts lush greenery through the plantation of various trees, ensuring a refreshing green cover amidst the urban landscape. The Atal bridge not only serves as a functional connector but also stands as a symbol of innovation, beauty, and celebration of local culture.</Text>
                        <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginStart: 10, marginTop: 0 }}>
                            Key Features:
                        </Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>1. Total Length: 300 m, Middle span 100 m.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>2. Width:10 m at both ends and 14 m at middle portion</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>3. Entry from both Upper and lower promenades of Riverfront on both sides east and west.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>4. Design: Weight of Structural Steel 2600 MT., RCC Pile foundation, Spherical Bearings at supports and Tensile Fabric Roofing.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>5. Seating, Plantation and Food kiosks in the Middle span.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>6. Dynamic color changing LED Lights.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>7.  F & B Kiosks, Sit outs with Planters at the center of the bridge.</Text>
                        <Text style={{ fontSize: 15, color: '#000', textAlign: 'justify', marginStart:10, marginEnd:10 }}>8. Recreational facility in the middle of the River Body where citizens can enjoy nature with peace and tranquility.</Text>

                        <Text style={{fontSize:17, color:"#000", fontWeight:'bold', marginStart:10, marginTop:5 }}>Visiting Hours:</Text>
                        <Text style={{fontSize:15, color:'#000', textAlign:'justify', margin:10 }}>09:00 AM to 09:00 PM</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Foot-Over-Bridge-Inside-View-5.jpeg')} style={styles.sidi} />
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

export default AtalBridge;