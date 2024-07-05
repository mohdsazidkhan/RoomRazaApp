import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../../routes/authScreen'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import PaperButton from '../../../components/atoms/paperButton'
import { AppColor } from '../../../theme/appColor'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import { Modal, Portal, TextInput } from 'react-native-paper'
import { AppFonts } from '../../../theme/appFont'
import PinConfirmModal from '../../../components/organisms/modal/pinConfirm'
import * as message from '../../../assets/messages'
import { getCustomSize } from '../../../theme/appFontSize'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<AuthRootStackParamList, 'AboutYouScreen'>

export default function AboutYouScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const [pinConfirmModal, setPinConfirmModal] = useState(false)

    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('aboutYou')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.screenContainer}>
                    <Text style={styles.otpSentText}>{t('tellPersonalDetail')}</Text>
                    <View style={{ flex: 1, }}>

                        <PaperTextInput
                            label={t('firstName')}
                            topMargin={getCustomSize(15)} />

                        <PaperTextInput
                            label={t('lastName')}
                            topMargin={getCustomSize(15)} />

                        <PaperTextInput
                            label={t('email')}
                            topMargin={getCustomSize(15)}
                            KeyboardType='email-address' />

                        <PaperTextInput
                            label={message.mobileNumber}
                            label={t('mobileNumber')}
                            left={<TextInput.Affix text='+91' />}
                            right={<TextInput.Affix text='Verified' textStyle={{ color: AppColor.AZURE }} />}
                            topMargin={getCustomSize(15)}
                            maxlength={10}
                            KeyboardType='decimal-pad' />


                        <PaperTextInput
                            label={message.createPassword}
                            label={t('createPassword')}
                            right={<TextInput.Affix text='SHOW' textStyle={{ color: AppColor.AZURE }} />}
                            topMargin={getCustomSize(15)} />
                        <Text style={styles.min8Text}>{t('min8character')}</Text>

                        <PaperTextInput
                            label={message.confirmPassword}
                            label={t('confirmPassword')}
                            right={<TextInput.Affix text='SHOW' textStyle={{ color: AppColor.AZURE }} />}
                            topMargin={15} />



                    </View>
                    <PaperButton
                        buttonName={t('saveContinue')}
                        buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                        uppercase={true}
                        topMargin={getCustomSize(50)}
                        OnPress={() => setPinConfirmModal(true)} />
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
                        description={t('yourPasswordSuccessfully')}
                        confirmText={t('confirm')}
                        confirmPress={() => { setPinConfirmModal(false), navigation.navigate('SetMPinScreen') }}
                    />
                </Modal>


            </Portal>

        </SafeAreaWithStatusBar>
    )
}