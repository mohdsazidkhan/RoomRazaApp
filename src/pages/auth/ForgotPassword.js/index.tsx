import { View, Text, Image, ImageBackground, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar';
import { AppColor } from '../../../theme/appColor';
import { ImagePath } from '../../../assets/helper/imagePath';
import PaperTextInput from '../../../components/molecules/paperTextInput';
import PaperButton from '../../../components/atoms/paperButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from '../../../routes/authScreen';
import { styles } from './styles';
import { getCustomSize } from '../../../theme/appFontSize';
import { useTranslation } from 'react-i18next';
import Snack from '../../../components/Snack/Snack';
import { API_BASE_URL, API_HEADERS } from '../../../routes/context/GlobalUrl'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderWithBackButton from '../../../components/atoms/header';

type Props = NativeStackScreenProps<AuthRootStackParamList, 'ForgotPassword'>;

export default function ForgotPassword({ navigation }: Props) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [contactType, setContactType] = useState(1); // Default to 1 for phone number

    const handleLogin = async () => {
        if (!email) {
            Snack("Please enter field");
            return;
        }
        setIsLoading(true);

        const isEmail = /\S+@\S+\.\S+/.test(email); // Check if the input is an email address
        setContactType(isEmail ? 2 : 1);

        const requestBody = {
            contact: email,
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
            console.log('Response?.[data0]=========>', responseData?.data[0]);
            if (responseData?.success === true) {
                Snack('Otp Sent successfully')
                const token = responseData.data[0]; // Accessing the token from response data
                const contact = requestBody?.contact;
                console.log('')
                AsyncStorage.setItem('token', token);
                AsyncStorage.setItem('contact', contact);
                navigation.navigate('ForgotPasswordOtp', {
                    body: requestBody,
                });
            } else {
                Snack(responseData?.message)
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setIsLoading(false);
    }


    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('Forgot Password')}
                backHandle={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ margin: getCustomSize(20) }}>
                    <View style={{ marginTop: getCustomSize(50) }}>
                        <ImageBackground
                            source={ImagePath.AppLogo}
                            style={styles.logoImage}
                            resizeMode='contain'>
                            <View style={styles.loginAccView}>
                                <Text style={styles.loginAccText}>{t('Enter your registered email or phone number associated with your Salon account')}</Text>
                            </View>
                        </ImageBackground>

                        <PaperTextInput
                            label={t('Enter Email or Phone Number')}
                            labelValue={email}
                            onChangeText={(text: string) => setEmail(text)}

                        />


                        <PaperButton
                            buttonName={t('Request otp')}
                            uppercase={true}
                            buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                            onPress={handleLogin}
                            isLoading={isLoading}
                            topMargin={90}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    );
}
