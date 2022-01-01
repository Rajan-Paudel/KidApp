import React, { useState } from 'react'
import { StatusBar, View, Modal, Pressable, TouchableOpacity, Text, Dimensions, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ColorPallets } from '../hooks/ColorPallets'
import useStatusBar from '../hooks/useStatusBar'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fonts from '../hooks/Fonts'
import InputText from '../components/InputText'
import ButtonDefault from '../components/ButtonDefault'
const windowsWidth = Dimensions.get('window').width;
export default function AddHobbies({ navigation }) {
    useStatusBar("light-content");


    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <SafeAreaProvider style={{ flex: 1, backgroundColor: ColorPallets.BackgroundPrimary }} >
                <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 10, alignItems: 'center' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ borderRadius: 25, height: 50, width: 50, alignItems: 'center', backgroundColor: ColorPallets.Secondary, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="arrow-left" size={20} color="#fff" />

                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Heading, fontSize: 20, flex: 1, textAlign: 'center' }} >Add a Hobbie</Text>

                </View>
                <ScrollView style={{ height: '100%' }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <InputText iconName="signature" placeholderText="Habbit Name" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />

                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, }} >Text to display for total sessions</Text>
                                <InputText placeholderText="Attended" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, }} >Text to display for total sessions</Text>
                                <InputText placeholderText="Attended" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, }} >Text to display for total sessions</Text>
                                <InputText placeholderText="Attended" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, }} >Text to display for total sessions</Text>
                                <InputText placeholderText="Attended" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, }} >Text to display for total sessions</Text>
                                <InputText placeholderText="Attended" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, }} >Text to display for total sessions</Text>
                                <InputText placeholderText="Attended" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>







                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 14, }} >upvote color</Text>
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 14, }} >downvote color</Text>
                            </View>
                            <View style={{ paddingLeft: 10, }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 14, }} >header color</Text>
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                            </View>
                        </View>










                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 18, }} >Primary color</Text>
                            </View>
                            <View style={{ paddingLeft: 10, }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: ColorPallets.BackgroundSecondary, padding: 10, borderRadius: 10, elevation: 2, }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 18, }} >Secondary Color</Text>
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight, marginBottom: 10, }}>
                                </View>

                                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ColorPallets.SecondaryLight }}>
                                </View>

                            </View>
                        </View>





                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 14, }} >Tracker Start Date</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flex: 1 }}>
                                <InputText placeholderText="Date" iconName="calendar-alt" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 14, }} >Tracker End Date</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flex: 1 }}>
                                <InputText placeholderText="Date"  iconName="calendar-alt"  inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 14, }} >Minimum Session per tracker</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flex: 1 }}>
                                <InputText placeholderText="4"  inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 14, }} >Minimum Session per Week</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flex: 1 }}>
                                <InputText placeholderText="3" inputBorderColor={ColorPallets.borderLight} textColor={ColorPallets.textColor} />

                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center' }}>
                            <View style={{flex:1, padding:10}}>
                            <ButtonDefault bgColor={ColorPallets.Danger} textColor="#fff" buttonText="Reset"/>
                            </View>
                            <View style={{flex:1, padding:10}}>
                            <ButtonDefault bgColor={ColorPallets.Secondary} textColor="#fff" buttonText="Submit" />
                            </View>
                        </View>
                    </View>


                </ScrollView>


            </SafeAreaProvider>
        </>
    )
}

