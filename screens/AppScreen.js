import React, { useState } from 'react'
import { StyleSheet, Text, StatusBar, View, Modal, Pressable, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ColorPallets } from '../hooks/ColorPallets'
import useStatusBar from '../hooks/useStatusBar'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fonts from '../hooks/Fonts'
import * as Animatable from 'react-native-animatable'

const windowsWidth = Dimensions.get('window').width;
export default function AppScreen({navigation}) {
    useStatusBar(ColorPallets.statusBar);

    const [loginModal, setloginModal] = useState(false
    );

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    var Item = ({ title }) => (
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Text style={{ flex: 1, fontFamily: Fonts.Default, color: ColorPallets.subtextColor }}>{title}</Text>
            <Icon name='trash-alt' size={20} color={ColorPallets.Danger} style={{ marginRight: 10 }} />
            <Icon name='pencil-alt' size={20} color={ColorPallets.Secondary} />
        </View>
    );

    var renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <>
            <Modal
                transparent={true}
                visible={loginModal}
                onRequestClose={() => {
                    setloginModal(!loginModal);
                }}
            >
                <Pressable onPress={() => setloginModal(false)} style={{
                    flex: 1,
                }}>
                    <Animatable.View animation='bounceInLeft' duration={500} delay={0} style={{ elevation: 5, padding: 20, width: '60%', height: "100%", backgroundColor: ColorPallets.BackgroundPrimary, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: ColorPallets.textColor, fontFamily: Fonts.Heading, fontSize: 20, flex: 1, }} >Habbits</Text>

                            <Pressable onPress={() => setloginModal(false)} style={{ paddingBottom: 30, }}>
                                <Icon name='window-close' size={30} color={ColorPallets.textColor} />
                            </Pressable>
                        </View>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                        <Pressable onPress={() => {setloginModal(false), navigation.navigate('AddHobbies')} }  style={{ flexDirection: 'row', marginTop: 45, paddingHorizontal: 10, alignItems: 'center' }}>

                            <View  style={{ borderRadius: 25, height: 50, width: 50, alignItems: 'center', backgroundColor: ColorPallets.Secondary, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="plus" size={20} color="#fff" />
                            </View>

                            <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Heading, fontSize: 14, flex: 1, textAlign: 'center' }} >Create New Habbit</Text>

                        </Pressable>

                    </Animatable.View>
                </Pressable>
            </Modal>

            <SafeAreaProvider style={{ flex: 1, backgroundColor: ColorPallets.BackgroundPrimary }} >

                <StatusBar translucent backgroundColor="transparent" />
                <View style={{ flexDirection: 'row', marginTop: 45, paddingHorizontal: 10, alignItems: 'center' }}>

                    <TouchableOpacity onPress={() => setloginModal(true)} style={{ borderRadius: 25, height: 50, width: 50, alignItems: 'center', backgroundColor: ColorPallets.Primary, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="tablets" size={20} color="#fff" />

                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, color: ColorPallets.textColor, fontFamily: Fonts.Heading, fontSize: 20, flex: 1, textAlign: 'center' }} >GYM Session</Text>

                </View>

                <ScrollView style={{ flex: 1, padding: 15 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: windowsWidth - 30, paddingVertical: 30, backgroundColor: ColorPallets.BackgroundCard, borderRadius: 10, borderWidth: 2, borderColor: ColorPallets.SecondaryLight }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: windowsWidth / 3, height: windowsWidth / 3, backgroundColor: ColorPallets.Secondary, borderRadius: windowsWidth / 6, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ marginHorizontal: 10, color: "#fff", fontFamily: Fonts.Heading, fontSize: 16, }} >Attended</Text>

                            </View>
                            <Text style={{ marginHorizontal: 10, color: "#111", fontFamily: Fonts.Heading, fontSize: 20, backgroundColor: ColorPallets.SecondaryLight, padding: 10, borderRadius: 10, }}>30</Text>

                        </View>



                        <View style={{ flexDirection: 'row', paddingTop: 20 }}>



                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                                <View style={{ width: windowsWidth / 6, height: windowsWidth / 6, backgroundColor: ColorPallets.Secondary, borderRadius: windowsWidth / 12, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ marginHorizontal: 10, color: "#fff", fontFamily: Fonts.Heading, fontSize: 10, textAlign: 'center' }} >Good Session</Text>

                                </View>
                                <View style={{ alignItems: 'center' }}>

                                    <Icon name="chevron-up" size={25} color={ColorPallets.Secondary} />
                                    <Icon name="chevron-down" size={25} color={ColorPallets.Danger} />
                                    <Text style={{ marginHorizontal: 5, color: "#111", fontFamily: Fonts.Heading, fontSize: 12, backgroundColor: ColorPallets.SecondaryLight, padding: 5, borderRadius: 10, }}>30</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                                <View style={{ width: windowsWidth / 6, height: windowsWidth / 6, backgroundColor: ColorPallets.Secondary, borderRadius: windowsWidth / 12, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ marginHorizontal: 10, color: "#fff", fontFamily: Fonts.Heading, fontSize: 10, textAlign: 'center' }} >Bad Session</Text>

                                </View>
                                <View style={{ alignItems: 'center' }}>

                                    <Icon name="chevron-up" size={25} color={ColorPallets.Secondary} />
                                    <Icon name="chevron-down" size={25} color={ColorPallets.Danger} />
                                    <Text style={{ marginHorizontal: 5, color: "#111", fontFamily: Fonts.Heading, fontSize: 12, backgroundColor: ColorPallets.SecondaryLight, padding: 5, borderRadius: 10, }}>30</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                                <View style={{ width: windowsWidth / 6, height: windowsWidth / 6, backgroundColor: ColorPallets.Secondary, borderRadius: windowsWidth / 12, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ marginHorizontal: 10, color: "#fff", fontFamily: Fonts.Heading, fontSize: 10, textAlign: 'center' }} >Neutral</Text>

                                </View>
                                <View style={{ alignItems: 'center' }}>

                                    <Icon name="chevron-up" size={25} color={ColorPallets.Secondary} />
                                    <Icon name="chevron-down" size={25} color={ColorPallets.Danger} />
                                    <Text style={{ marginHorizontal: 5, color: "#111", fontFamily: Fonts.Heading, fontSize: 12, backgroundColor: ColorPallets.SecondaryLight, padding: 5, borderRadius: 10, }}>30</Text>
                                </View>
                            </View>




                        </View>





                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                            <View style={{ width: windowsWidth / 4, height: windowsWidth / 4, backgroundColor: ColorPallets.Secondary, borderRadius: windowsWidth / 8, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ marginHorizontal: 10, color: "#fff", fontFamily: Fonts.Heading, fontSize: 14, textAlign: 'center' }} >Skipped</Text>

                            </View>
                            <View style={{ alignItems: 'center' }}>

                                <Icon name="chevron-up" size={25} color={ColorPallets.Secondary} />
                                <Icon name="chevron-down" size={25} color={ColorPallets.Danger} />
                                <Text style={{ marginHorizontal: 5, color: "#111", fontFamily: Fonts.Heading, fontSize: 12, backgroundColor: ColorPallets.SecondaryLight, padding: 5, borderRadius: 10, }}>30</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                            <View style={{ width: windowsWidth / 4, height: windowsWidth / 4, backgroundColor: ColorPallets.Secondary, borderRadius: windowsWidth / 8, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ marginHorizontal: 10, color: "#fff", fontFamily: Fonts.Heading, fontSize: 14, textAlign: 'center' }} >I was Blocked</Text>

                            </View>
                            <View style={{ alignItems: 'center' }}>

                                <Icon name="chevron-up" size={25} color={ColorPallets.Secondary} />
                                <Icon name="chevron-down" size={25} color={ColorPallets.Danger} />
                                <Text style={{ marginHorizontal: 5, color: "#111", fontFamily: Fonts.Heading, fontSize: 12, backgroundColor: ColorPallets.SecondaryLight, padding: 5, borderRadius: 10, }}>30</Text>
                            </View>
                        </View>


                    </View>
                    <View style={{ width: windowsWidth - 30, height: 3, backgroundColor: ColorPallets.borderLight, marginVertical: 10 }}>

                    </View>

                    <View style={{ flexDirection: 'row', padding: 10, }}>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>Tracker Start Date</Text>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>25th jan</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, }}>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>Tracker End Date</Text>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>25th Feb</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, }}>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>Minimum Session Per Tracker</Text>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>40</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, }}>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>Number of Sessions So far</Text>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>39</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, }}>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>Min Session Per Week</Text>
                        <Text style={{ marginHorizontal: 5, color: ColorPallets.textColor, fontFamily: Fonts.Default, fontSize: 12, flex: 1 }}>3</Text>
                    </View>

                </ScrollView>
            </SafeAreaProvider>
        </>
    )
}

const styles = StyleSheet.create({})
