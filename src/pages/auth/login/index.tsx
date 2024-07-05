import { View, Text, Image, ImageBackground, ScrollView, Alert, Pressable } from 'react-native';
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
import { TextInput } from 'react-native-paper';
import { AppFonts } from '../../../theme/appFont';
import { API_BASE_URL, API_HEADERS } from '../../../routes/context/GlobalUrl'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<AuthRootStackParamList, 'LoginScreen'>;

export default function LoginScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
        if (!email || !password) {
            Snack("Please enter field");
            return;
        }
        setIsLoading(true);
        const requestBody = {
            userIdentifier: email,
            password: password,
        };
        const apiUrl = `${API_BASE_URL}/Auth/MobileApp/Login`;
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: API_HEADERS,
                body: JSON.stringify(requestBody),
            });
            const responseData = await response.json();
            console.log('Response=========>', responseData);
            if (responseData?.success === true) {
                Snack('Login successful')
                AsyncStorage.setItem('token', responseData?.otpToken);
                AsyncStorage.setItem('salonReferenceId', responseData?.salonReferenceId);
                AsyncStorage.setItem('employeeReferenceId', responseData?.employeeReferenceId);
                navigation.navigate('EntreOtpScreen', { number: responseData?.userIdentifier })
                setIsLoading(false);
            } else {
                Snack(responseData?.message)
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaWithStatusBar>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ margin: getCustomSize(20) }}>
                    <View style={{ marginTop: getCustomSize(50) }}>
                        <ImageBackground
                            source={ImagePath.AppLogo}
                            style={styles.logoImage}
                            resizeMode='contain'>
                            <Text style={styles.welcomeToText}>{t('welcomeTo')}</Text>
                            <View style={styles.loginAccView}>
                                <Text style={styles.loginAccText}>{t('loginToAccount')}</Text>
                            </View>
                        </ImageBackground>

                        <PaperTextInput
                            label={t('emailPhone')}
                            labelValue={email}
                            onChangeText={(text: string) => setEmail(text)}

                        />

                        <PaperTextInput
                            label={t('password')}
                            topMargin={getCustomSize(20)}
                            isPassword={true}
                            labelValue={password}
                            onChangeText={(text: string) => setPassword(text)}
                            right={ // Pass right prop for the show/hide password button
                                <Text
                                    style={{ fontFamily: AppFonts.FontsMedium, color: 'red' }}
                                    onPress={() => setShowPassword(!showPassword)}>
                                    {showPassword ? t('hide') : t('show')}
                                </Text>
                            }

                        // right={<TextInput.Affix text={t('show')} />}
                        />
                        <Pressable style={{ width: '30%', alignSelf: 'center', marginVertical: 10 }} onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.forgotPasswordText}>{t('forgotPassword')}</Text>
                        </Pressable>
                        <PaperButton
                            buttonName={t('login')}
                            uppercase={true}
                            buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                            onPress={handleLogin}
                            isLoading={isLoading}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    );
}
