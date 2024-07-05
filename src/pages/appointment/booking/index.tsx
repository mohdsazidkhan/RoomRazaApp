import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import { AppColor } from '../../../theme/appColor'
import { styles } from './styles'
import { AppFonts } from '../../../theme/appFont'
import CustomButton from '../../../components/atoms/customButton'
import CustomIcon from '../../../components/atoms/customIcon'
import DividerView from '../../../components/atoms/dividerView'
import { DEMO_GIRL_IMAGE, SvgImagePath } from '../../../assets/helper/imagePath'
import CustomTextInput from '../../../components/molecules/customTextInput'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import CustomClick from '../../../components/customClick'


type Props = NativeStackScreenProps<RootStackParamList, 'BookingConfirmedScreen'>
export default function BookingConfirmedScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='View Appointment Details'
                backHandle={() => navigation.goBack()}
            />

            <ScrollView>
                <View style={{ padding: getCustomSize(15) }}>

                    <Pressable style={{ elevation: 1, backgroundColor: AppColor.WHITE_COLOR, borderRadius: 15, marginBottom: 20 }}>
                        <Pressable style={{ backgroundColor: '#0078FD1A', borderRadius: 15 }}
                            onPress={() => navigation.navigate('ViewClientHistoryScreen')}>
                            <View style={{ padding: 20 }}>
                                <Text style={styles.profileName}>Today, 21st April, 2022 at 1:30pm</Text>

                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.EERIE_BLACK }}>1h 45min duration, ends at 3:15pm</Text>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <CustomButton
                                        btnTitle='Service Completed'
                                        backgroundColor={AppColor.MAY_GREEN_COLOR}
                                        textColor={AppColor.WHITE_COLOR}
                                        borderColor='#0078FD1A'
                                        borderRadius={getCustomSize(20)}
                                        handlePress={() => navigation.navigate('BookingConfirmedScreen')}
                                    />

                                    <Text style={{ fontFamily: AppFonts.FontsRegular, marginLeft: 15, color: AppColor.EERIE_BLACK }}>Booking ref: 3A0087OIPO</Text>
                                </View>
                            </View>


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

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <CustomButton
                                btnTitle='Service Completed'
                                backgroundColor={AppColor.MAY_GREEN_COLOR}
                                textColor={AppColor.WHITE_COLOR}
                                borderColor='#0078FD1A'
                                borderRadius={getCustomSize(20)}
                                handlePress={() => navigation.navigate('BookingConfirmedScreen')}
                            />
                        </View>
                        <DividerView />



                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.DEEP_SPACE_SPARKLE, marginTop: 10 }}>Membership Discount Applied</Text>

                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, marginTop: 5 }}>Ellen (Primary Member)</Text>


                        <Pressable style={{ flexDirection: 'row', backgroundColor: AppColor.WHITE_COLOR, elevation: 3, marginTop: 16, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <CustomIcon
                                iconName='add'
                                iconColor={AppColor.AZURE}
                                iconSize={26} />
                            <Text style={{ color: AppColor.AZURE, fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_17, marginLeft: 15 }}>Add Consumables</Text>
                        </Pressable>

                        <CustomButton
                            btnTitle='Upload Images'
                            backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                            textColor={AppColor.WHITE_COLOR}
                        />


                    </Pressable>



                    <Pressable style={{ ...styles.serviceCard, backgroundColor: AppColor.WHITE_COLOR, marginTop: 20 }}>

                        <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_20), color: AppColor.EERIE_BLACK }}>Add Tip</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: getCustomSize(20) }}>

                            <Pressable style={{ paddingHorizontal: getCustomSize(20), paddingVertical: getCustomSize(15), borderColor: AppColor.PHILIPPINE_SILVER, borderWidth: 1, borderRadius: getCustomSize(15) }}>
                                <Text>Rs. 10</Text>
                            </Pressable>
                            <Pressable style={{ paddingHorizontal: getCustomSize(20), paddingVertical: getCustomSize(15), borderColor: AppColor.PHILIPPINE_SILVER, borderWidth: 1, borderRadius: getCustomSize(15) }}>
                                <Text>Rs. 10</Text>
                            </Pressable>
                            <Pressable style={{ paddingHorizontal: getCustomSize(20), paddingVertical: getCustomSize(15), borderColor: AppColor.PHILIPPINE_SILVER, borderWidth: 1, borderRadius: getCustomSize(15) }}>
                                <Text>Rs. 10</Text>
                            </Pressable>
                            <Pressable style={{ paddingHorizontal: getCustomSize(20), paddingVertical: getCustomSize(15), borderColor: AppColor.PHILIPPINE_SILVER, borderWidth: 1, borderRadius: getCustomSize(15) }}>
                                <Text>Custom</Text>
                            </Pressable>
                        </View>


                        <PaperTextInput
                            label='Additional Amount' />

                    </Pressable>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='Add Items'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                borderRadius={getCustomSize(25)}
                            />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='Redeem'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                borderRadius={getCustomSize(25)}

                            />
                        </View>
                    </View>


                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginVertical: getCustomSize(20) }} />

                    <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgImagePath.Coupon />
                            <Text style={{ fontFamily: AppFonts.FontsMedium, marginLeft: getCustomSize(20), color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>Apply Coupons</Text>
                        </View>

                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginVertical: getCustomSize(20) }} />

                    <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgImagePath.Discount />
                            <Text style={{ fontFamily: AppFonts.FontsMedium, marginLeft: getCustomSize(20), color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>Apply Discount</Text>
                        </View>

                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>

                    <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20), marginTop: getCustomSize(30) }}>Summary</Text>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Hair Colour</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Stylist Charge</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginTop: getCustomSize(13) }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.SPANISH_GRAY, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Tip</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.SPANISH_GRAY, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginTop: getCustomSize(13) }} />

                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginTop: getCustomSize(13) }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.SPANISH_GRAY, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Gold Card</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.SPANISH_GRAY, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginTop: getCustomSize(13) }} />


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20), marginTop: getCustomSize(13) }}>Net Service Value</Text>
                        <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Advance</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Discount</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>


                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginTop: getCustomSize(13) }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.APPLE_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Discount Card (Auto Applied)</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.APPLE_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: AppColor.PHILIPPINE_SILVER, borderStyle: 'dashed', borderRadius: 4, marginTop: getCustomSize(13) }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20), marginTop: getCustomSize(13) }}>Amount Payable Pre GST</Text>
                        <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>GST to charge @18%</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>

                    <DividerView />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_25), marginTop: getCustomSize(13) }}>Total Payable Amount</Text>
                        <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_25), marginTop: getCustomSize(13) }}>Rs 1500</Text>
                    </View>

                    <CustomButton
                        btnTitle='Take Payment'
                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                        textColor={AppColor.WHITE_COLOR} />


                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: getCustomSize(20) }}>

                        <SvgImagePath.ShareBooking />
                        <Text style={{ fontFamily: AppFonts.FontsBold, color: AppColor.DEEP_SPACE_SPARKLE, fontSize: getCustomSize(AppFontSize.FontsSize_15), marginLeft: getCustomSize(13), textAlignVertical: 'center' }}>Share Booking</Text>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: getCustomSize(40) }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='Delete'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE}
                            />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                textColor={AppColor.WHITE_COLOR}
                                btnTitle='Split Bill'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}

                            />
                        </View>
                    </View>


                    <CustomButton
                        textColor={AppColor.WHITE_COLOR}
                        btnTitle='Payment Method'
                        borderColor={AppColor.DEEP_SPACE_SPARKLE}
                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                        handlePress={() => navigation.navigate('PaymentMethodScreen')}
                    />


                </View>

                <CustomClick
                 handlePress={() => navigation.navigate('PaymentMethodScreen')}
                 title='Payment method'/>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}