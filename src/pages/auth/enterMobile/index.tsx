import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../../routes/authScreen'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import { TextInput } from 'react-native-paper'
import PaperButton from '../../../components/atoms/paperButton'
import { AppColor } from '../../../theme/appColor'
import * as message from '../../../assets/messages'
import { getCustomSize } from '../../../theme/appFontSize'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<AuthRootStackParamList, 'EnterMobileScreen'>

export default function EnterMobileScreen({ navigation }: Props) {
  const { t } = useTranslation();
  return (
    <SafeAreaWithStatusBar>
      <HeaderWithBackButton
        backHandle={() => navigation.goBack()}
        headerTitle={t('enterYourMobileNumber')} />

      <View style={styles.screenContainer}>

        <View style={{ flex: 1, }}>
          <PaperTextInput
            label={t('mobileNumber')}
            maxlength={10}
            KeyboardType='decimal-pad'
            left={<TextInput.Affix text='+91' />} />
        </View>
        <PaperButton
          buttonName={t('sendOtp')}
          buttonColor={AppColor.DEEP_SPACE_SPARKLE}
          OnPress={() => navigation.navigate('EntreOtpScreen')} />
      </View>

    </SafeAreaWithStatusBar>
  )
}