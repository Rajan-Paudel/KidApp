import React from 'react';
import {createStackNavigator,CardStyleInterpolators,} from '@react-navigation/stack';
import AppScreen from '../screens/AppScreen';
import OnBoarding from '../screens/OnBoarding';
const Stack = createStackNavigator();
export default function FirstNavigator() {
const closeConfig = {
config: {
 duration: 200,
}
 };
 const config = {
config: {
duration: 600,  
},
};
return (
<Stack.Navigator screenOptions={{
cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
headerShown:false,
transitionSpec: {
open: config,
close: closeConfig,
},
}}>
<Stack.Screen name='OnBoarding' component={OnBoarding} />
<Stack.Screen name='AppScreen' component={AppScreen} />
</Stack.Navigator>
);
}