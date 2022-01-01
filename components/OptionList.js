
import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { ColorPallets } from '../hooks/ColorPallets';
import { Fonts } from '../hooks/Fonts';

function ButtonDefault({ iconName, optionTitle, textColor, onOptionPress, bgColor}) {
    return (
        <View style={{backgroundColor:bgColor, marginVertical:10, borderRadius:10,}}>
        <TouchableNativeFeedback onPress={onOptionPress} background={TouchableNativeFeedback.Ripple("red",true,)} >
            <View style={{ padding: 20 ,alignItems: 'center', width:'100%', flexDirection:'row' }} >
                    <Icon name={iconName} size={20} color={ColorPallets.subtextColor}/>
                     <Text style={{ color:ColorPallets.subtextColor, textTransform: 'uppercase', marginHorizontal:20, fontFamily:Fonts.Heading}}>
                    {optionTitle}
                </Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    );
}

export default ButtonDefault;