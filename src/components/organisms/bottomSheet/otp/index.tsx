import { KeyboardTypeOptions, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
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

export default function OtpComponent(params: OtpComponentProps) {
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
                    headerTitle={'OTP Verification'} />

                <Text style={styles.otpSentText}>{t('otpSendTo')} +91 9876543210</Text>
                <View style={{ flex: 1, }}>


                    <View style={styles.otpView}>
                        <TextInput
                            ref={firstOtpRef}
                            numberOfLines={1}
                            maxLength={1}
                            value={firstOtp}
                            keyboardType='number-pad'
                            style={styles.otpTextInput}
                            onChangeText={(otp) => { setFirstOtp(otp), secondOtpRef.current.focus() }} />
                        <TextInput
                            ref={secondOtpRef}
                            numberOfLines={1}
                            maxLength={1}
                            value={secondOtp}
                            keyboardType='number-pad'
                            style={styles.otpTextInput}
                            onChangeText={(otp) => { setSecondOtp(otp), thirdOtpRef.current.focus() }} />
                        <TextInput
                            ref={thirdOtpRef}
                            numberOfLines={1}
                            maxLength={1}
                            value={thirdOtp}
                            keyboardType='number-pad'
                            style={styles.otpTextInput}
                            onChangeText={(otp) => { setThirdOtp(otp), forthOtpRef.current.focus() }} />
                        <TextInput
                            ref={forthOtpRef}
                            numberOfLines={1}
                            maxLength={1}
                            value={forthOtp}
                            keyboardType='number-pad'
                            style={styles.otpTextInput}
                            onChangeText={(otp) => { setForthOtp(otp), Keyboard.dismiss() }} />
                    </View>


                    <View style={styles.resendView}>
                        <CustomIcon
                            iconName='sync'
                            iconColor={AppColor.DEEP_SPACE_SPARKLE}
                            iconSize={getCustomSize(22)} />
                        <Text style={styles.notAMemberText}>{t('resendCodeIn')}
                            <Text style={styles.registerNowText}> 00:50</Text>
                        </Text>
                    </View>
                </View>
                <PaperButton
                    buttonName={t('continue')}
                    buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                />
            </View>

        </View>
    )
}
