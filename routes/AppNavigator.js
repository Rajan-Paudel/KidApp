import React from 'react';
import {createStackNavigator,CardStyleInterpolators,} from '@react-navigation/stack';
import AppScreen from '../screens/AppScreen';
import AddHobbies from '../screens/AddHobbies';

const Stack = createStackNavigator();
export default function AppNavigator() {
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
cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
headerShown:false,
transitionSpec: {
open: config,
close: closeConfig,
},
}}>
<Stack.Screen name='AppScreen' component={AppScreen} />
<Stack.Screen name='AddHobbies' component={AddHobbies} />
</Stack.Navigator>
);
}