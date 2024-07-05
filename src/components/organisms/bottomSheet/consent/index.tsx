import { KeyboardTypeOptions, StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppColor } from '../../../../theme/appColor'
import { KeyboardType } from 'react-native'
import { AppFonts } from '../../../../theme/appFont'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import CalendarHorizontalStrip from '../../../molecules/calendarHorizontalStrip'
import CustomButton from '../../../atoms/customButton'
import { useTranslation } from 'react-i18next'
import CustomIcon from '../../../atoms/customIcon'
import PaperButton from '../../../atoms/paperButton'
import HeaderWithBackButton from '../../../atoms/header'
import { DEMO_GIRL_IMAGE } from '../../../../assets/helper/imagePath'
import CustomTextInput from '../../../molecules/customTextInput'
import CustomCheckBox from '../../../molecules/customCheckBox'

// interface SelectStylistComponentProps {
//     labelValue: string
//     onChangeText?: (text: string) => void
//     topMargin?: number
//     KeyboardType?: KeyboardType
//     multiline?: boolean
//     maxlength?: number,
//     numberOfLines?: number
//     placeholder?: string
//     borderStyle?: string
//     leftText?: string
//     backgroundColor?: string
//     isEditable?: boolean
// }

export default function ConsentRequiredComponent(params: ConsentRequiredComponentProps) {
    // const { onChangeText, labelValue, topMargin, KeyboardType, multiline, maxlength, numberOfLines, placeholder, borderStyle, leftText, backgroundColor = AppColor.WHITE_COLOR, isEditable = true } = params;

    const { t } = useTranslation();
    const firstOtpRef = useRef();
    const secondOtpRef = useRef();
    const thirdOtpRef = useRef();
    const forthOtpRef = useRef();
    const [firstOtp, setFirstOtp] = useState('')
    const [secondOtp, setSecondOtp] = useState('')
    const [thirdOtp, setThirdOtp] = useState('')
    const [forthOtp, setForthOtp] = useState('')


    return (

        <View style={{ marginBottom: 10 }}>

            <View style={{ margin: getCustomSize(15), flex: 1, marginBottom: getCustomSize(50) }}>

                <HeaderWithBackButton
                    // backHandle={() => navigation.goBack()}
                    headerTitle={'Consent Required'} />

                <View style={styles.serviceInfoMainView}>
                    <Image
                        source={{ uri: DEMO_GIRL_IMAGE }}
                        style={styles.serviceImageView} />

                    <View style={styles.serviceInfoView}>
                        <View style={styles.serviceView}>
                            <Text style={styles.serviceName}>Hair Color</Text>

                        </View>
                        <Text style={{ fontFamily: AppFonts.FontsRegular }}>Stylist : <Text style={{ fontFamily: AppFonts.FontsMedium }}>Rebecca Beck + Erica </Text></Text>
                        <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>120 min    |    11:30 AM to 1:15 PM</Text>
                    </View>


                </View>
                <Text style={{ fontFamily: AppFonts.FontsRegular, marginVertical: getCustomSize(10), fontSize: getCustomSize(15) }}>Lorem ipsum dolor sit amet consectetur. Fringilla est suscipit eget tincidunt. Aliquet quam est id scelerisque sit. Aliquam scelerisque leo non etiam vestibulum risus facilisi egestas netus. In tempor nunc phasellus sit eget at. Aliquam blandit purus adipiscing scelerisque. Tincidunt ultricies elementum sed elementum at. Maecenas hendrerit tempus bibendum dui morbi mattis eget fermentum. Tristique integer sed quis leo dignissim tempus amet nulla in. Gravida id interdum proin cursus vestibulum non sed dignissim orci. Odio et nisl est ac non. Egestas vel cras purus nulla massa. Feugiat leo dignissim hendrerit nulla integer lectus magna pellentesque. Fames fusce massa nulla feugiat.</Text>


                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <CustomCheckBox themeColor={AppColor.AZURE} />
                    <Text style={{ fontFamily: AppFonts.FontsRegular, marginVertical: getCustomSize(10), fontSize: getCustomSize(15) }}>Lorem ipsum dolor sit amet consectetur. Fringilla est </Text>
                </View>


                <Text style={{ fontFamily: AppFonts.FontsMedium, marginVertical: getCustomSize(10), color: AppColor.DEEP_SPACE_SPARKLE, fontSize: getCustomSize(15) }}>Digital </Text>
                <CustomTextInput

                    numberOfLines={5}
                />



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <CustomButton
                            textColor={AppColor.DEEP_SPACE_SPARKLE}
                            btnTitle='SHARE'
                            borderColor={AppColor.DEEP_SPACE_SPARKLE}
                        />
                    </View>

                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <CustomButton
                            btnTitle='ACCEPT'
                            backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                            textColor={AppColor.WHITE_COLOR}
                        // handlePress={() => navigation.navigate('ViewAppointmentDetailScreen')}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}
