import { View, Text, Image, ImageBackground, ScrollView, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar';
import { AppColor } from '../../../../theme/appColor';
import { ImagePath } from '../../../../assets/helper/imagePath';
import PaperTextInput from '../../../../components/molecules/paperTextInput';
import PaperButton from '../../../../components/atoms/paperButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from '../../../../routes/authScreen';
import { styles } from './styles';
import { getCustomSize } from '../../../../theme/appFontSize';
import { useTranslation } from 'react-i18next';
import Snack from '../../../../components/Snack/Snack';
import { AppFonts } from '../../../../theme/appFont';
import { API_BASE_URL, API_HEADERS } from '../../../../routes/context/GlobalUrl'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { confirmPassword } from '../../../../assets/messages';
import HeaderWithBackButton from '../../../../components/atoms/header';

type Props = NativeStackScreenProps<AuthRootStackParamList, 'NewPassword'>;

export default function NewPassword({ navigation, route }: Props) {
    const { id, body } = route.params || {};

    // console.log('route.params?.body?.otp====', route.params?.body?.otp)
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [ConPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
        if (!ConPassword || !password) {
            Snack("Please enter field");
            return;
        }
        if (password !== ConPassword) {
            Snack("Passwords do not match");
            return;
        }
        setIsLoading(true);
        const token = await AsyncStorage.getItem('token');
        const contact = await AsyncStorage.getItem('contact');
        console.log('contact', contact)
        console.log('token', token)
        const requestBody = {
            otp: body?.otp,
            token: token,
            contactType: body?.contactType,
            salonUserReferenceId: id,
            newPassword: password,
            updatedBy: 0,
            updatedOn: "2024-05-02T13:38:47.699Z"
        };

        const apiUrl = `${API_BASE_URL}/Salon/forgotpassword/changepassword/${contact}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: API_HEADERS,
                body: JSON.stringify(requestBody),
            });
            const responseData = await response.json();
            console.log('responseData last se aya =========>', responseData);
            if (responseData?.success === true) {
                Alert.alert('Password changed successfully!');
                navigation.navigate('LoginScreen')
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
                <HeaderWithBackButton
                    backHandle={() => navigation.goBack()}
                    headerTitle={t('New Password')} />
                <View style={{ margin: getCustomSize(20) }}>
                    <View style={{ marginTop: getCustomSize(50) }}>
                        <ImageBackground
                            source={ImagePath.AppLogo}
                            style={styles.logoImage}
                            resizeMode='contain'>
                            <View style={styles.loginAccView}>
                                <Text style={styles.loginAccText}>{t('Set Your New Password')}</Text>
                            </View>
                        </ImageBackground>

                        <PaperTextInput
                            label={t('New Password')}
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

                        />
                        <PaperTextInput
                            label={t('Confirm New Password')}
                            topMargin={getCustomSize(20)}
                            isPassword={true}
                            labelValue={ConPassword}
                            onChangeText={(text: string) => setConfirmPassword(text)}
                            right={ // Pass right prop for the show/hide password button
                                <Text
                                    style={{ fontFamily: AppFonts.FontsMedium, color: 'red' }}
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showPassword ? t('hide') : t('show')}
                                </Text>
                            }

                        />
                        <PaperButton
                            buttonName={t('SET NEW PASSWORD')}
                            uppercase={true}
                            buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                            onPress={handleLogin}
                            isLoading={isLoading}
                            topMargin={60}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    );
}
