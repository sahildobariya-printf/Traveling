import React from "react";
import { Text, View } from "react-native";
// import { SafeAreaFrameContext } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./Components/Homescreen";
import Spleshscreen from "./Components/Spleshscreen";
import Sidisaiyyed from "./Components/sidi-saiyyed";
import Jamamasjid from "./Components/jama-masjid";
import Ashram from "./Components/Ashram";
import Adalaj from "./Components/Adalaj";
import AtalBridge from "./Components/Atal-Bridge";
import ScienceCity from "./Components/Science-City";
import BhadraFort from "./Components/Bhadra-Fort";
import JainTemple from "./Components/Jain-Temple";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName={"Splash"}
                screenOptions={{ headerShown: false }}>
               
                <Stack.Screen name="Splash" component={Spleshscreen} />
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="sidi" component={Sidisaiyyed} />
                <Stack.Screen name="jama" component={Jamamasjid} />
                <Stack.Screen name="ashram" component={Ashram} />
                <Stack.Screen name="vav" component={Adalaj} />
                <Stack.Screen name="atal" component={AtalBridge} />
                <Stack.Screen name="Sciencecity" component={ScienceCity} />
                <Stack.Screen name="bhadra" component={BhadraFort} />
                <Stack.Screen name="hutheesing" component={JainTemple} />



            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default App;