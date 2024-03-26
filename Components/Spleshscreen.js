import React from "react";
import { ImageBackground, View, StyleSheet, Dimensions, TouchableOpacity, Text, Image, Animated, BackHandler, Linking, LogBox, Alert } from "react-native";
import { TabRouter, useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';
import LottieView from "lottie-react-native";
import GifImage from '@lowkey/react-native-gif';
import { useNavigationState } from '@react-navigation/native';

LogBox.ignoreAllLogs();

const Spleshscreen = (Props) => {
    // const navigation = useNavigation()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate('Home')
    //     }, 3000);
    // })
    const navigationState = useNavigationState(state => state);

    useEffect(() => {
        const backExit = () => {
            Alert.alert("Hold on!", "Are you sure you went to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: 'cancel'
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        }

        if (navigationState.index === 1) { // Assuming home is the first screen in the navigator
            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backExit
            );

            return () => backHandler.remove();
        }
    }, [navigationState]);
    const openWebsite = () => {
        const url = 'https://rajappdev.github.io/karnavati-tour-privacy.html';
        Linking.openURL(url);
    };
    return (

        <View>
            <ImageBackground source={require('../assets/backgraund.png')} style={styles.imagebackground}>
                <View>
                    <Text style={styles.title}>Enjoy the trip with</Text>
                    <Text style={styles.title2}>Good Moments</Text>

                </View>
                <Text style={styles.texttitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <View>
                    <Image source={require('../assets/hero.png')} style={styles.image}></Image>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => Props.navigation.navigate("Home")}>
                    <Text style={styles.text}>Go</Text>
                </TouchableOpacity>

                <View style={{ flex: 1, height: 50, width: '100%', backgroundColor: '#00C0CD', position: 'absolute', marginVertical: '188%' }}>
                    <Text style={styles.text1}>By using Tourism app you agree to our</Text>
                    <View>
                        <Text style={styles.text2} >read to </Text>
                    </View>
                    <View style={{ alignSelf: 'center',  marginTop:'-6.2%' }} >
                        <Text style={styles.text3} onPress={openWebsite}>Privacy Policy</Text>
                    </View>
                </View>

            </ImageBackground>
        </View>



    )
}

const styles = StyleSheet.create({
    imagebackground: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    lottieview: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: '170%',
        position: 'relative'

    },
    button: {
        height: 100,
        width: 100,
        backgroundColor: '#00C0CD',
        borderRadius: 50,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        bottom: "17%",

    },
    text: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        bottom: "29%",
        fontWeight: 'bold'

    },
    title: {
        color: '#446779',
        fontSize: 30,
        marginStart: 30,
        marginTop: 30
        // fontFamily:require('../assets/arial-font/arial.ttf')
    },
    title2: {
        fontSize: 28,
        color: '#00C0CD',
        marginStart: 30,
        fontWeight: 'bold'
    },
    texttitle: {
        color: "black",
        fontSize: 20,
        marginStart: 30,
        marginTop: 5
    },
    image: {
        height: "70%",
        width: "100%",
        marginStart: 0,
        marginTop: "35%"
    },
    textview1: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginStart: '11%',
        marginBottom: '10%',
        // position: 'relative',
        resizeMode: 'contain',
        marginVertical: '190%',
    },
    text1: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        position: "absolute",
        alignSelf: 'center'

    },

    text2: {
        fontSize: 18,
        color: '#fff',
        // textAlign: 'center',
        marginTop: 20,
        marginStart: 135
    },

    text3: {
        fontSize: 18,
        color: '#000',
        textAlign: "center",
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginStart: 120,
        marginBottom: 20,
        position: 'relative',

    },


})


export default Spleshscreen;