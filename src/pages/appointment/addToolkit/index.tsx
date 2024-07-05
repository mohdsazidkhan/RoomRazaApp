import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { AppFonts } from '../../../theme/appFont'
import { AppColor } from '../../../theme/appColor'
import { AppFontSize } from '../../../theme/appFontSize'
import CustomTextInput from '../../../components/molecules/customTextInput'
import { styles } from './styles'
import * as appMessage from '../../../assets/messages'
import { DEMO_GIRL_IMAGE, SvgImagePath } from '../../../assets/helper/imagePath';
import CustomIcon from '../../../components/atoms/customIcon'
import DividerView from '../../../components/atoms/dividerView'
import CustomButton from '../../../components/atoms/customButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import CustomClick from '../../../components/customClick'


type Props = NativeStackScreenProps<RootStackParamList, 'AddToolkitScreen'>

export default function AddToolkitScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Add Tool Kits' />

            <ScrollView>
                <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsMedium, color: AppColor.DEEP_SPACE_SPARKLE, fontSize: AppFontSize.FontsSize_17 }}>At Home</Text>

                <View style={{ margin: 15 }}>
                    <CustomTextInput
                        placeholder='Search'
                        labelValue='' />

                    <View style={styles.filterSortView}>
                        <View style={styles.filterSortSubView}>

                            <SvgImagePath.Filter />

                            <Text style={styles.filterSortText}>{appMessage.filter}</Text>
                        </View>

                        <View style={styles.filterSortSubView}>
                            <SvgImagePath.Sort />
                            <Text style={styles.filterSortText}>{appMessage.sort}</Text>
                        </View>
                    </View>



                    <View style={{ backgroundColor: AppColor.WHITE_COLOR, borderRadius: 10, padding: 10, marginVertical: 10, elevation: 5 }}>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_18 }}>General Tool Kit</Text>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_14 }}>Items : 3</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={30}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View>
                        </View>

                        <DividerView marginVertical={20} />


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={{ height: 80, width: 80, borderRadius: 10 }} />

                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Tool Name : Trim Scissor</Text>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Category : Hair</Text>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Brand : Cartini</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={{ height: 80, width: 80, borderRadius: 10 }} />

                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Tool Name : Trim Scissor</Text>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Category : Hair</Text>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Brand : Cartini</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={{ height: 80, width: 80, borderRadius: 10 }} />

                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Tool Name : Trim Scissor</Text>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Category : Hair</Text>
                                <Text style={{ color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15 }}>Brand : Cartini</Text>
                            </View>
                        </View>

                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.AZURE, marginVertical: 15, fontSize: AppFontSize.FontsSize_17 }}>+ Add More Tools</Text>

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
                                btnTitle='ADD'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                handlePress={() => navigation.navigate('AddStylistScreen')} />
                        </View>
                    </View>

                </View>

                <CustomClick
                 handlePress={() => navigation.navigate('AddStylistScreen')} 
                 title='Add Stylist'/>
            </ScrollView>
        </SafeAreaWithStatusBar >
    )
}