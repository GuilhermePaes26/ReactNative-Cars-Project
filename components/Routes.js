import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"

import Home from "./Home"
import Charger from "./charger"
import SkyLine from "./slyline"
const Stack = createStackNavigator();

export default function rotasBotao(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="charger" component={Charger}/>
                <Stack.Screen name="skyline" component={SkyLine}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}