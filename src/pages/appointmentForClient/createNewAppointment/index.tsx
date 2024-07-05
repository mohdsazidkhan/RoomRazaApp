import { View, Text, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import CustomTextInput from '../../../components/molecules/customTextInput'
import { getCustomSize } from '../../../theme/appFontSize'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import CustomClick from '../../../components/customClick'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'CreateNewAppointmentScreen'>

export default function CreateNewAppointmentScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('createNewAppointment')}
                backHandle={() => navigation.goBack()} />
            <View style={{ margin: getCustomSize(15), flex: 1 }}>
                <Text style={styles.subTitle}>{t('typeNameAddNewAppointment')}</Text>

                {/* <CustomTextInput
                    placeholder={'Search by client name/phone no. Email'} /> */}


                <PaperTextInput

                    label={t('searchClientNameEmail')} />

                <View style={{ flex: 1 }} />

                <Pressable style={styles.addClientPressable}
                    onPress={() => navigation.navigate('AddingClientScreen')}
                >
                    <Text style={styles.addClintText}>{t('addClient')}</Text>
                </Pressable>
                <CustomClick
                    title='Adding Client'
                    handlePress={() => navigation.navigate('AddingClientScreen')} />
            </View>


        </SafeAreaWithStatusBar>
    )
}