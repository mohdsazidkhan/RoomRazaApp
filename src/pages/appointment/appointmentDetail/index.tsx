import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import CustomIcon from '../../../components/atoms/customIcon'
import DividerView from '../../../components/atoms/dividerView'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont'
import { styles } from './styles'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import { AppFontSize } from '../../../theme/appFontSize'
import CustomButton from '../../../components/atoms/customButton'
import CustomClick from '../../../components/customClick'

type Props = NativeStackScreenProps<RootStackParamList, 'ViewAppointmentDetailScreen'>
export default function ViewAppointmentDetailScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='View Appointment Details'
                backHandle={() => navigation.goBack()}
            />

            <ScrollView>
                <View style={{ margin: 15 }}>
                    <Pressable style={{ elevation: 1, backgroundColor: AppColor.WHITE_COLOR, borderRadius: 15, marginBottom: 20 }}>
                        <Pressable style={{ backgroundColor: '#0078FD1A', borderRadius: 15 }}
                            onPress={() => navigation.navigate('ViewClientHistoryScreen')}>
                            <View style={{ padding: 20 }}>
                                <Text style={styles.profileName}>Today, 21st April, 2022 at 1:30pm</Text>

                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.EERIE_BLACK }}>1h 45min duration, ends at 3:15pm</Text>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <CustomButton
                                        btnTitle='Booking Confirmed'
                                        backgroundColor={AppColor.AZURE}
                                        textColor={AppColor.WHITE_COLOR}
                                        borderColor='#0078FD1A'
                                        handlePress={() => navigation.navigate('BookingConfirmedScreen')}
                                    />

                                    <CustomClick
                                        handlePress={() => navigation.navigate('BookingConfirmedScreen')}
                                        title='Booking confirm'
                                    />

                                    <Text style={{ fontFamily: AppFonts.FontsRegular, marginLeft: 15, color: AppColor.EERIE_BLACK }}>Booking ref: 3A0087OIPO</Text>
                                </View>
                            </View>

                            <CustomClick
                                handlePress={() => navigation.navigate('BookingConfirmedScreen')}
                                title='client history'
                            />
                            <View style={{ backgroundColor: AppColor.DEEP_SPACE_SPARKLE, borderBottomEndRadius: 15, borderBottomStartRadius: 15, paddingVertical: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: AppFonts.FontsBold, marginLeft: 15, color: AppColor.WHITE_COLOR }}>Salon Service</Text>

                                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                                    <Pressable style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: AppColor.WHITE_COLOR, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon
                                            iconColor={AppColor.DEEP_SPACE_SPARKLE}
                                            iconSize={20}
                                            iconName='call' />
                                    </Pressable>

                                    <Pressable style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: AppColor.WHITE_COLOR, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon
                                            iconColor={AppColor.DEEP_SPACE_SPARKLE}
                                            iconSize={20}
                                            iconName='call' />
                                    </Pressable>

                                </View>

                            </View>

                        </Pressable>







                    </Pressable>





                    <Pressable style={styles.profileImageCard}>
                        <View style={styles.profileInfoMainView}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={styles.profileImageView} />

                            <View style={styles.profilePersonalInfoView}>
                                <View style={styles.profilePersonalView}>
                                    <Text style={styles.profileName}>Suhana Singh</Text>
                                    <CustomIcon
                                        iconName={'logout'}
                                        iconSize={20}
                                        iconColor={AppColor.AZURE} />
                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular }}>+91-XXXXXX3219</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={30}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View>
                        </View>

                        <DividerView />
                        <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                            <Text style={{ backgroundColor: AppColor.PERSIAN_GREEN, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, fontSize: AppFontSize.FontsSize_17, color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsMedium, marginRight: 15 }}>Primary</Text>
                            <Text style={{ backgroundColor: AppColor.ATOMIC_TANGERINE, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, fontSize: AppFontSize.FontsSize_17, color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsMedium, marginRight: 15 }}>Influencer</Text>
                            <Text style={{ backgroundColor: AppColor.DarkKhaki, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, fontSize: AppFontSize.FontsSize_17, color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsMedium, marginRight: 15 }}>VIP</Text>
                        </View>
                    </Pressable>


                    <Pressable style={{ ...styles.serviceCard, marginTop: 20 }}>
                        <View style={styles.serviceInfoMainView}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={styles.serviceImageView} />

                            <View style={styles.serviceInfoView}>
                                <View style={styles.serviceView}>
                                    <Text style={styles.serviceName}>Hair Color</Text>

                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular }}>Stylist : <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR }}>Rebecca Beck + Erica </Text></Text>
                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>120 min    |    11:30 AM to 1:15 PM</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={30}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View>
                        </View>


                        <DividerView />

                        <View style={{ ...styles.serviceInfoMainView, marginTop: 10 }}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={styles.serviceImageView} />

                            <View style={styles.serviceInfoView}>
                                <View style={styles.serviceView}>
                                    <Text style={styles.serviceName}>Hair Color</Text>

                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular }}>Stylist : <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR }}>Rebecca Beck + Erica </Text></Text>
                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>120 min    |    11:30 AM to 1:15 PM</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={30}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View>
                        </View>
                    </Pressable>



                    <Pressable style={{ flexDirection: 'row', backgroundColor: AppColor.DEEP_SPACE_SPARKLE, paddingVertical: 18, alignItems: 'center', paddingHorizontal: 10, borderRadius: 10, marginVertical: 15 }}>

                        <CustomIcon
                            iconName='add'
                            iconSize={25}
                            iconColor={AppColor.WHITE_COLOR} />


                        <Text style={{ color: AppColor.WHITE_COLOR, fontSize: AppFontSize.FontsSize_15, fontFamily: AppFonts.FontsMedium, marginLeft: 10 }}>Create New Appointment For Client Name</Text>

                    </Pressable>


                    <Text style={{ marginVertical: 10, fontSize: AppFontSize.FontsSize_25, color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium }}>Suggested</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >

                        <Pressable style={{ width: 250, borderRadius: 10, elevation: 5, backgroundColor: AppColor.WHITE_COLOR, padding: 7, marginRight: 5, marginBottom: 10 }}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={{ height: 200, borderRadius: 10, }} />

                            <View style={styles.serviceInfoView}>
                                <View style={styles.serviceView}>
                                    <Text style={{ ...styles.serviceName, marginTop: 10 }}>Hair Color</Text>
                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular }}>Lorem ipsum dolor sit amet consectetur. Sed arcu sit at commodo sed phasellus duis velit.</Text>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                                    <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR, fontSize: AppFontSize.FontsSize_13 }}>Rs. 1200</Text>
                                    <Pressable style={{ borderWidth: 1, borderColor: AppColor.DEEP_SPACE_SPARKLE, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
                                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.DEEP_SPACE_SPARKLE }}>+ ADD </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Pressable>


                        <Pressable style={{ width: 250, borderRadius: 10, elevation: 5, backgroundColor: AppColor.WHITE_COLOR, padding: 7, marginLeft: 5, marginBottom: 10 }}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={{ height: 200, borderRadius: 10, }} />

                            <View style={styles.serviceInfoView}>
                                <View style={styles.serviceView}>
                                    <Text style={{ ...styles.serviceName, marginTop: 10 }}>Hair Color</Text>
                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular }}>Lorem ipsum dolor sit amet consectetur. Sed arcu sit at commodo sed phasellus duis velit.</Text>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                                    <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR, fontSize: AppFontSize.FontsSize_13 }}>Rs. 1200</Text>
                                    <Pressable style={{ borderWidth: 1, borderColor: AppColor.DEEP_SPACE_SPARKLE, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
                                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.DEEP_SPACE_SPARKLE }}>+ ADD </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Pressable>

                    </ScrollView>


                </View>

            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}