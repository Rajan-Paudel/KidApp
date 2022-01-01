import React from 'react'
import { StyleSheet, Text, View, StatusBar , Dimensions} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ColorPallets } from '../hooks/ColorPallets'
import useStatusBar from '../hooks/useStatusBar'
import LottieView from 'lottie-react-native';
import Fonts from '../hooks/Fonts'
const windowWidth = Dimensions.get('window').width;
export default function OnBoarding({navigation: { replace }}) {
    useStatusBar(ColorPallets.statusBar)
    return (
            <SafeAreaProvider style={{flex:1,backgroundColor:ColorPallets.BackgroundPrimary}} >
            <StatusBar translucent backgroundColor="transparent" />
            <View style={{flex:1, justifyContent:"flex-end", alignItems:'center'}}>
            <LottieView source={require('../assets/animations/Welcome.json')} autoPlay loop style={{width:windowWidth, height:windowWidth-100}}/>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{marginVertical:20, fontFamily:Fonts.Heading }}> KidApp</Text>
            <LottieView 
            source={require('../assets/animations/Loading.json')} 
            autoPlay loop 
            loop={false}
                    speed={1}
                    onAnimationFinish={() => {
                            replace('AppScreen')
                    }}
            
            style={{width:windowWidth/2, height:windowWidth/2}}/>
            </View>
            </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({})
