import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';





const Stack = createNativeStackNavigator();

const StackNavigator = () => {    

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="Productscreen" component={ProductScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;