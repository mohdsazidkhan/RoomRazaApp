import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import { AppColor } from '../../../theme/appColor'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import { AppFonts } from '../../../theme/appFont'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'ManageToolKitScreen'>
export default function ManageToolKitScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('manageToolsKit')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>

                    <Pressable
                        style={styles.pressableView}
                        onPress={() => navigation.navigate('ReceivedToolkitScreen')}>
                        <Text style={styles.pressableText}>{t('receivedToolsKits')}</Text>
                    </Pressable>

                    <Pressable
                        style={styles.pressableView}
                        onPress={() => navigation.navigate('RequestToolkitScreen')}>
                        <Text style={styles.pressableText}>{t('requestToolsKits')}</Text>
                    </Pressable>


                    <Pressable
                        style={styles.pressableView}
                        onPress={() => navigation.navigate('ReturnToolkitScreen')}>
                        <Text style={styles.pressableText}>{t('returnToolsKits')}</Text>
                    </Pressable>

                </View>

            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}