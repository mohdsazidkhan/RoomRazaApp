import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import { styles } from './styles'
import CustomIcon from '../../../components/atoms/customIcon'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont'
import DividerView from '../../../components/atoms/dividerView'
import { AppFontSize } from '../../../theme/appFontSize'
import CustomCheckBox from '../../../components/molecules/customCheckBox'
import CustomButton from '../../../components/atoms/customButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import CustomClick from '../../../components/customClick'


type Props = NativeStackScreenProps<RootStackParamList, 'AddStationRoom'>

export default function AddRoomStations({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Add Room/Stations'
                backHandle={() => navigation.goBack()} />

            <ScrollView>

                <View style={{ padding: 15 }}>
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
                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>120 min    |    11:30 AM to 1:15 PM</Text>
                            </View>
                        </View>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.DEEP_SPACE_SPARKLE, marginTop: 10 }}>Membership Discount Applied</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, marginTop: 5 }}>Ellen (Primary Member)</Text>
                    </Pressable>




                    <Pressable style={{ ...styles.serviceCard, marginTop: 20 }}>
                        <View style={styles.serviceInfoMainView}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={styles.serviceImageView} />

                            <View style={styles.serviceInfoView}>
                                <View style={styles.serviceView}>
                                    <Text style={styles.serviceName}>Vinit</Text>

                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>Hair Stylist Expert</Text>
                            </View>
                        </View>

                    </Pressable>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginVertical: 20, fontSize: AppFontSize.FontsSize_18, color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsBold }}>Select</Text>

                    </View>

                    <View style={{ elevation: 3, backgroundColor: AppColor.WHITE_COLOR, marginBottom: 10, paddingBottom: 15, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CustomCheckBox
                                themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                            <Text style={{ marginHorizontal: 20, flex: 1, fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: AppFontSize.FontsSize_20 }}>Room 1</Text>
                        </View>
                        <Text style={{ marginHorizontal: 50, fontFamily: AppFonts.FontsRegular, color: AppColor.EERIE_BLACK, fontSize: AppFontSize.FontsSize_15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                    </View>


                    <View style={{ elevation: 3, backgroundColor: AppColor.WHITE_COLOR, marginBottom: 10, paddingBottom: 15, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CustomCheckBox
                                themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                            <Text style={{ marginHorizontal: 20, flex: 1, fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: AppFontSize.FontsSize_20 }}>Room 2</Text>
                        </View>
                        <Text style={{ marginHorizontal: 50, fontFamily: AppFonts.FontsRegular, color: AppColor.EERIE_BLACK, fontSize: AppFontSize.FontsSize_15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='CANCEL'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                btnTitle=' ADD '
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                handlePress={() => navigation.navigate('TransferStylistScreen')} />
                        </View>
                    </View>

                </View>

                <CustomClick
                 handlePress={() => navigation.navigate('TransferStylistScreen')} 
                 title='Transfer stylist'/>
            </ScrollView>

        </SafeAreaWithStatusBar>
    )
}