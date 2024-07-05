import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import CustomSearchView from '../../../components/organisms/searchView'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import { RadioButton } from 'react-native-paper'
import { AppColor } from '../../../theme/appColor'
import CustomIcon from '../../../components/atoms/customIcon'
import { styles } from './styles'
import DividerView from '../../../components/atoms/dividerView'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../../routes/authScreen'
import { useTranslation } from 'react-i18next';
import CustomClick from '../../../components/customClick'


type Props = NativeStackScreenProps<AuthRootStackParamList, 'SelectLanguageScreen'>

export const LANGUAGES = [
    { code: 'hi', label: 'हिन्दी' },
    { code: 'en', label: 'English' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'mr', label: 'मराठी' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'te', label: 'తెలుగు' },
];

export const langStatus = (status: boolean) => {
    return status
}


export default function SelectLanguageScreen({ navigation }: Props) {
    const { t, i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;





    const setLanguage = (code: string) => {

        return i18n.changeLanguage(code);
    };


    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('selectYourLanguage')} />

            <View style={styles.container}>
                <CustomSearchView
                    placeholder={t('search')} />


                {/* <Pressable style={styles.languageView}
                    onPress={() => navigation.navigate('TermAndPolicyScreen')}>
                    <View style={{ flexDirection: 'row' }}>
                        <CustomIcon
                            iconName='language'
                            iconColor={AppColor.EERIE_BLACK}
                            iconSize={getCustomSize(20)} />
                        <Text style={styles.languageText}>

                            and
                        </Text>
                    </View>

                    <RadioButton
                        status='checked'
                        color={AppColor.DEEP_SPACE_SPARKLE} />
                </Pressable> */}





                <Text style={styles.preferredLangText}>{t('selectPreferredLanguage')}</Text>



                {/* <View style={styles.languageView}>
                    <Text style={styles.languageText}>Hindi</Text>
                    <RadioButton
                        status='unchecked'
                        color={AppColor.DEEP_SPACE_SPARKLE} />
                </View>

                <DividerView marginVertical={getCustomSize(-8)} />

                <View style={styles.languageView}>
                    <Text style={styles.languageText}>বাংলা</Text>
                    <RadioButton
                        status='unchecked'
                        color={AppColor.DEEP_SPACE_SPARKLE} />
                </View>

                <DividerView marginVertical={getCustomSize(-8)} />


                <View style={styles.languageView}>
                    <Text style={styles.languageText}>తెలుగు</Text>
                    <RadioButton
                        status='unchecked'
                        color={AppColor.DEEP_SPACE_SPARKLE} />
                </View>

                <DividerView marginVertical={getCustomSize(-8)} />

                <View style={styles.languageView}>
                    <Text style={styles.languageText}>മലയാളം</Text>
                    <RadioButton
                        status='unchecked'
                        color={AppColor.DEEP_SPACE_SPARKLE} />
                </View> */}


                {LANGUAGES.map(language => {
                    const selectedLanguage = language.code === selectedLanguageCode;

                    return (
                        <View key={language.code}>
                            <Pressable
                                key={language.code}
                                style={styles.languageView}
                                // disabled={selectedLanguage}
                                onPress={() => { setLanguage(language.code), langStatus(false), navigation.navigate('TermAndPolicyScreen') }}

                            >
                                <Text style={[selectedLanguage ? styles.selectedText : styles.text]}>{language.label}</Text>


                                <RadioButton
                                    status={selectedLanguage ? 'checked' : 'unchecked'}
                                    color={AppColor.DEEP_SPACE_SPARKLE}
                                    onPress={() => { setLanguage(language.code), langStatus(false) }} />
                            </Pressable>

                            <DividerView marginVertical={getCustomSize(-8)} />

                        </View>
                    );
                })}


                <View style={{ marginTop: 30 }}>
                    <CustomClick
                        title='Next Screen'
                        handlePress={() => navigation.navigate('TermAndPolicyScreen')} />
                </View>
            </View>
        </SafeAreaWithStatusBar>
    )
}