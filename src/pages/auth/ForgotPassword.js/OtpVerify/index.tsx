import { View, Text, TextInput, Keyboard, StyleSheet, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { getHash, removeListener, startOtpListener } from 'react-native-otp-verify';
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar';
import HeaderWithBackButton from '../../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../../../routes/authScreen'
import PaperButton from '../../../../components/atoms/paperButton'
import { AppColor } from '../../../../theme/appColor'
import { styles } from './styles'
import CustomIcon from '../../../../components/atoms/customIcon'
import * as message from '../../../../assets/messages'
import { getCustomSize } from '../../../../theme/appFontSize'
import { useTranslation } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL, API_HEADERS } from '../../../../routes/context/GlobalUrl';
import Snack from '../../../../components/Snack/Snack';
import { useAuth } from '../../../../routes/context/Auth';
import axios from 'axios';

type Props = NativeStackScreenProps<AuthRootStackParamList, 'ForgotPasswordOtp'>

export default function ForgotPasswordOtp({ navigation, route }: Props) {
    const { body } = route.params || {};
    console.log('body?.contact-------->', body?.contact)
    const [otpErr, setOtpErr] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [isLoading, setIsLoading] = useState(false);
    const [contactType, setContactType] = useState(1);

    const { t } = useTranslation();
    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    }, [seconds]);

    const resendOTP = async () => {

        setIsLoading(true);

        const isEmail = /\S+@\S+\.\S+/.test(body?.contact); // Check if the input is an email address
        setContactType(isEmail ? 2 : 1);

        const requestBody = {
            contact: body?.contact,
            contactType: isEmail ? 2 : 1, // Set contactType based on the input type
        };
        console.log('body=============>', requestBody?.contact)
        const apiUrl = `${API_BASE_URL}/Salon/forgotpassword`;
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: API_HEADERS,
                body: JSON.stringify(requestBody),
            });
            const responseData = await response.json();
            console.log('Response=========>', responseData);
            const token = responseData.data[0]; // Accessing the token from response data
            const contact = requestBody?.contact;
            if (responseData?.success === true) {
                AsyncStorage.setItem('token', token);
                AsyncStorage.setItem('contact', contact);
                Snack('Otp resend successfully')

            } else {
                Snack(responseData?.message)
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setIsLoading(false);
    }


    const [OtpValue, setOtpValue] = useState({
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
    });

    const ref0 = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    const handleLogin = async () => {
        const newOtpVal =
            OtpValue.value1 +
            OtpValue.value2 +
            OtpValue.value3 +
            OtpValue.value4 +
            OtpValue.value5 +
            OtpValue.value6;
        if (!newOtpVal) {
            Snack("Please enter otp");
            return;
        }
        setIsLoading(true)
        const token = await AsyncStorage.getItem('token');
        console.log('token', token);

        const requestBody = {
            otp: newOtpVal,
            token: token,
            contactType: body?.contactType
        };
        console.log('body', requestBody);


        // const API_BASE_URL = "https://dev-salon-operation-api.azurewebsites.net/api/";
        const phoneNumber = body?.contact;
        const apiUrl = `${API_BASE_URL}/Salon/forgotpassword/verifyotp/${phoneNumber}/otp`;


        try {

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: API_HEADERS,
                body: JSON.stringify(requestBody),
            });
            const responseData = await response.json();
            console.log('Response=========>', responseData);
            console.log('responseData?.data?.token=========>', responseData?.data);
            // console.log('responseData?.userIdentifier=========>', responseData?.userIdentifier);
            if (responseData?.success === true) {
                Snack('OTP verified')
                navigation.navigate('NewPassword', {
                    id: responseData?.data,
                    body: requestBody,

                })
                setIsLoading(false)

            } else {
                Snack(responseData?.message)
                setIsLoading(false)


            }
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false)

        }
    }

    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                backHandle={() => navigation.goBack()}
                headerTitle={t('enterOtp')} />

            <View style={{ margin: getCustomSize(15), flex: 1, marginBottom: getCustomSize(50) }}>
                <Text style={styles.otpSentText}>{t('otpSendTo')} {body?.contact}</Text>
                <View style={{ flex: 1, }}>


                    <View style={styles.otpView}>
                        {/* <OTPTextView
          autoFocus
          handleTextChange={(e) => {
            setOtpValue(e);
            if (!e) {
              setOtpErr(true);
            } else {
              setOtpErr(false);
            }
            if (e.length === 6) {
              Keyboard.dismiss();
            }
          }}
        /> */}

                        <View style={styles.container}>
                            <TextInput
                                autoFocus
                                ref={ref0}
                                style={styles.otpTextInput}
                                value={OtpValue.value1}
                                onChangeText={(value) => {
                                    setOtpValue((prev) => ({
                                        ...prev,
                                        value1: value,
                                    }));
                                    if (value) {
                                        ref1.current.focus();
                                    }
                                }}
                                returnKeyType="next"
                                keyboardType="numeric"
                                maxLength={1}
                                onKeyPress={(e) => {
                                    // ref1.current.focus();
                                }}
                            />
                            <TextInput
                                ref={ref1}
                                style={styles.otpTextInput}
                                value={OtpValue.value2}
                                onChangeText={(value) => {
                                    setOtpValue((prev) => ({
                                        ...prev,
                                        value2: value,
                                    }));
                                    if (value) {
                                        ref2.current.focus();
                                    } else if (!value) {
                                        ref0.current.focus();
                                    }
                                }}
                                returnKeyType="next"
                                keyboardType="numeric"
                                maxLength={1}
                                onKeyPress={(e) => {
                                    if (e.nativeEvent.key === 'Backspace') {
                                        ref0.current.focus();
                                    } else {
                                        ref2.current.focus();
                                    }
                                }}
                            />
                            <TextInput
                                ref={ref2}
                                style={styles.otpTextInput}
                                value={OtpValue.value3}
                                onChangeText={(value) => {
                                    setOtpValue((prev) => ({
                                        ...prev,
                                        value3: value,
                                    }));
                                    if (value) {
                                        ref3.current.focus();
                                    } else if (!value) {
                                        ref1.current.focus();
                                    }
                                }}
                                returnKeyType="next"
                                keyboardType="numeric"
                                maxLength={1}
                                onKeyPress={(e) => {
                                    if (e.nativeEvent.key === 'Backspace') {
                                        ref1.current.focus();
                                    } else {
                                        ref3.current.focus();
                                    }
                                }}
                            />
                            <TextInput
                                ref={ref3}
                                style={styles.otpTextInput}
                                value={OtpValue.value4}
                                onChangeText={(value) => {
                                    setOtpValue((prev) => ({
                                        ...prev,
                                        value4: value,
                                    }));
                                    if (value) {
                                        ref3.current.focus();
                                    } else if (!value) {
                                        ref2.current.focus();
                                    }
                                }}
                                returnKeyType="next"
                                keyboardType="numeric"
                                maxLength={1}
                                // onKeyPress={(e) => {
                                //   console.log('check key press', e.cancelable());
                                // }}
                                onKeyPress={(e) => {
                                    if (e.nativeEvent.key === 'Backspace') {
                                        ref2.current.focus();
                                    } else {
                                        ref3.current.focus();
                                    }
                                }}
                            />

                        </View>
                    </View>

                    {/* <View
                    style={{
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                    }}
                > */}
                    <View>
                        {seconds !== 0 && <Text style={styles.notAMemberText}>Resend code in {seconds} sec</Text>}

                        {seconds == 0 && (
                            <Pressable
                                style={{ width: '64%', alignSelf: 'flex-end' }}

                                onPress={() => {
                                    setSeconds(60);
                                    resendOTP();
                                }}
                            >
                                <Text style={styles.registerNowText}>Resend OTP</Text>
                            </Pressable>
                        )}
                    </View>
                    {/* <View style={styles.resendView}>
                        <CustomIcon
                            iconName='sync'
                            iconColor={AppColor.DEEP_SPACE_SPARKLE}
                            iconSize={getCustomSize(22)} />
                        <Text style={styles.notAMemberText}>{t('resendCodeIn')}
                            <Text style={styles.registerNowText}> 00:50</Text>
                        </Text>
                    </View> */}
                    <View />
                    {/* </View> */}
                </View>
                <PaperButton
                    buttonName={t('continue')}
                    buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                    onPress={handleLogin}
                    isLoading={isLoading}

                />
            </View>

        </SafeAreaWithStatusBar>
    )
}

