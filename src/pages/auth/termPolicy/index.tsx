import { View, Text, ImageBackground, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import { AppColor } from '../../../theme/appColor'
import CustomIcon from '../../../components/atoms/customIcon'
import PaperButton from '../../../components/atoms/paperButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../../routes/authScreen'
import * as message from '../../../assets/messages'
import { styles } from './styles'
import { getCustomSize } from '../../../theme/appFontSize'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<AuthRootStackParamList, 'TermAndPolicyScreen'>

export default function TermAndPolicyScreen({ navigation }: Props) {
    const { t } = useTranslation();

    return (
        <View style={styles.mainView}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            <ImageBackground
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={styles.imgStyle}
                resizeMode='cover'>
                <Pressable style={styles.backButtonPress}
                    onPress={() => navigation.goBack()}>
                    <CustomIcon
                        iconName='arrow-back'
                        iconColor={AppColor.WHITE_COLOR}
                        iconSize={getCustomSize(25)} />
                </Pressable>
            </ImageBackground>

            <View style={{ flex: 1, marginHorizontal: getCustomSize(15) }}>
                <Text style={styles.stylistText}>{t('stylist')}</Text>
                <Text style={styles.notAMemberText}>{t('agreeAndContAccept')}
                    <Text style={styles.registerNowText}>{t('termAndCondition')}</Text>
                </Text>
                <PaperButton
                    buttonName={t('agreeContinue')}
                    uppercase={true}
                    buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                    OnPress={() => navigation.navigate('EnterMobileScreen')} />
            </View>
        </View>
    )
}