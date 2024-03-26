import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';
// import { tailwind } from "react-native-tailwindcss";
// import FontAwesome from 'react-native-AntDesign'


const Homescreen = (Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ marginBottom: 10 }}>
                <View>
                    <View style={{ padding: 15 }}>
                        <Text style={styles.title}>Discover</Text>
                        <Text style={styles.title2}>the Beauty today</Text>
                    </View>
                    <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                        <Image
                            style={styles.avatar}
                            source={require('../assets/Karnavati.png')}
                        />
                    </View>
                    <View>
                        <View >
                            <Text style={styles.trip}>
                                Top Tips
                            </Text>
                            {/* <TouchableOpacity >
                                <Text style={styles.explore}>
                                    Explore
                                </Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => Props.navigation.navigate("sidi")}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center' }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/sidisaiyyed.jpg')} style={styles.image1}></Image>
                                <Text style={styles.sidititle}>sidi saiyyed mosque</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Props.navigation.navigate("jama")}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/jama-masjid.jpg')} style={styles.image1}></Image>
                                <Text style={styles.jamatitle}>jama Masjid</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Props.navigation.navigate("ashram")}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/Sabarmati-Ashram-cover.webp')} style={styles.image1}></Image>
                                <Text style={styles.jamatitle}>Sabarmati Ashram</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Props.navigation.navigate('vav')}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/adalaj-ni-vav.jpg')} style={styles.image1}></Image>
                                <Text style={styles.jamatitle}>Adalaj Ni Vav</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Props.navigation.navigate('atal')}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/Sabarmati-Riverfront.jpeg')} style={styles.image1}></Image>
                                <Text style={styles.jamatitle}>Atal Bridge Riverfront</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Props.navigation.navigate('Sciencecity')} >
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/Science-City-Banner.jpg')} style={styles.image1}></Image>
                                <Text style={styles.jamatitle}>Science City</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Props.navigation.navigate('bhadra')}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/bhadra-fort-ahmedabad.jpg')} style={styles.image1}></Image>
                                <Text style={styles.jamatitle}>Bhadra Fort</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Props.navigation.navigate('hutheesing')}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ height: 350, width: '95%', backgroundColor: '#fff', marginStart: 10, marginEnd: 10, borderRadius: 10 }}>
                                <Image source={require('../assets/Hathee_singh_Jain_temple.jpg')} style={styles.image1}></Image>
                                <Text style={styles.jamatitle}>Hutheesing Jain Temple</Text>
                                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap' }}>
                                    <Image source={require('../assets/location.png')} style={{ height: 20, width: 20, marginStart: 15, marginTop: 9 }} />
                                    <Text style={{ fontSize: 20, color: '#4B6C7C', marginStart: 5, marginTop: 5 }}>Ahmedabad,Gujarat</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>


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
    title: {
        fontSize: 30,
        color: '#0E676E',
        fontWeight: "bold",
    },
    title2: {
        fontSize: 31,
        color: '#4B6C7C'
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 7,
        alignSelf: 'flex-end',
        marginEnd: 15,
        marginTop: -80
    },
    trip: {
        color: '#2C7379',
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10
    },
    explore: {
        color: '#A0C4C7',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        alignSelf: "flex-end",
        marginEnd: 25,
        marginTop: -40
    },
    image1: {
        height: 225,
        width: 325,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,

    },
    sidititle: {
        color: '#0B646B',
        fontSize: 30,
        marginStart: 15,
        marginTop: 10
    },
    jamatitle: {
        color: '#0B646B',
        fontSize: 30,
        marginStart: 15,
        marginTop: 10
    }


})


export default Homescreen;