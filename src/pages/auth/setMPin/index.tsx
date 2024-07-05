import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../../routes/authScreen'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import PaperButton from '../../../components/atoms/paperButton'
import { AppColor } from '../../../theme/appColor'
import { styles } from './styles'
import { AppFonts } from '../../../theme/appFont'
import { Modal, Portal } from 'react-native-paper'
import PinConfirmModal from '../../../components/organisms/modal/pinConfirm'
import * as message from '../../../assets/messages'
import { useAuth } from '../../../routes/context/Auth';
import { getCustomSize } from '../../../theme/appFontSize'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<AuthRootStackParamList, 'SetMPinScreen'>

export default function SetMPinScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const [pinConfirmModal, setPinConfirmModal] = useState(false)
    const auth = useAuth();

    const authLogin = async () => {
        await auth.signIn('ankur@gmail.com');
    }

    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('createYourMPin')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={{ margin: getCustomSize(15), flex: 1, marginBottom: getCustomSize(50) }}>
                    <Text style={styles.mPinDesText}>{t('createYourLoginPin')}</Text>
                    <View style={{ flex: 1, }}>


                        <Text style={{ ...styles.mPinDesText, marginTop: getCustomSize(30) }}>{t('enterYourPin')}</Text>
                        <View style={styles.otpView}>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                            </View>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                            </View>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                            </View>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                                <Text style={styles.showText}>{t('show')}</Text>
                            </View>
                        </View>





                        <Text style={{ ...styles.mPinDesText, marginTop: getCustomSize(30) }}>{t('enterYourPin')}</Text>
                        <View style={styles.otpView}>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                            </View>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                            </View>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                            </View>
                            <View>
                                <TextInput
                                    numberOfLines={1}
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={styles.otpTextInput} />
                                <Text style={styles.showText}>{t('show')}</Text>
                            </View>
                        </View>


                    </View>
                    <PaperButton
                        buttonName={t('save')}
                        buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                        uppercase={true}
                        topMargin={getCustomSize(50)}
                        OnPress={() => setPinConfirmModal(true)}
                    />
                </View>

            </ScrollView>
            <Portal>
                <Modal
                    visible={pinConfirmModal}
                    dismissable={true}
                    onDismiss={() => setPinConfirmModal(false)}
                    contentContainerStyle={styles.loaderModalContainer}
                    style={{ justifyContent: 'center' }}>
                    <PinConfirmModal
                        title={t('congratulations')}
                        description={t('yourLoginPinSuccessfully')}
                        confirmText={t('confirm')}
                        confirmPress={() => { setPinConfirmModal(false), navigation.navigate('SetMPinScreen'), authLogin() }}
                    />
                </Modal>


            </Portal>

        </SafeAreaWithStatusBar>
    )
}