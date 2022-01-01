import React from 'react';
import { View, TextInput, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ColorPallets } from '../hooks/ColorPallets';
function InputText({InputButtonPress,RightIconColor,rightIconName,placeholderText, iconName, inputBorderColor, ...otherProps}) {
    return (
        <View style={{
          borderRadius: 40, borderWidth: 2, borderColor: inputBorderColor, marginVertical:10,
        flexDirection:'row', width:"100%",
        alignItems:'center', paddingHorizontal:5,
        }}>
        <Icon size={20} color="#aaa" name={iconName} style={{marginLeft:15}}/>
        <TextInput style={{ 
          flex:1, paddingHorizontal:10,
        color: ColorPallets.textColor,
        }} placeholderTextColor="#aaa" placeholder={placeholderText} {...otherProps}/>
         <TouchableOpacity onPress={InputButtonPress}>
         <Icon size={40} color={RightIconColor} name={rightIconName}/>
        </TouchableOpacity>
        </View>

    );
}

export default InputText;