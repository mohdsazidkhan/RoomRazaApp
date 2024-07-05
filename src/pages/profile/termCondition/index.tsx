import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import { getCustomSize } from '../../../theme/appFontSize'
import { AppFonts } from '../../../theme/appFont'
import CustomCheckBox from '../../../components/molecules/customCheckBox'
import { AppColor } from '../../../theme/appColor'
import CustomTextInput from '../../../components/molecules/customTextInput'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'TermConditionScreen'>
export default function TermConditionScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('termsConditions')}
                backHandle={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.headingText}>{t('updateTermsConditions')}</Text>
                    <Text style={{ fontSize: getCustomSize(16), fontFamily: AppFonts.FontsRegular, marginTop: getCustomSize(20) }}>Lorem ipsum dolor sit amet consectetur. Fringilla est suscipit eget tincidunt. Aliquet quam est id scelerisque sit. Aliquam scelerisque leo non etiam vestibulum risus facilisi egestas netus. In tempor nunc phasellus sit eget at. Aliquam blandit purus adipiscing scelerisque. Tincidunt ultricies elementum sed elementum at. Maecenas hendrerit tempus bibendum dui morbi mattis eget fermentum. Tristique integer sed quis leo dignissim tempus amet nulla in. Gravida id interdum proin cursus vestibulum non sed dignissim orci. Odio et nisl est ac non. Egestas vel cras purus nulla massa. Feugiat leo dignissim hendrerit nulla integer lectus magna pellentesque. Fames fusce massa nulla feugiat.</Text>


                    <View style={{ flexDirection: 'row', marginLeft: getCustomSize(-10), alignItems: 'center', marginVertical: getCustomSize(15) }}>
                        <CustomCheckBox
                            themeColor={AppColor.AZURE} />
                        <Text style={{ fontSize: getCustomSize(16), fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR }}>
                            Lorem ipsum dolor sit amet consectetur. Fringilla est
                        </Text>
                    </View>
                    <Text style={{ fontSize: getCustomSize(16), fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR }}>
                       {t('digitalSignatureHere')}
                    </Text>


                    <CustomTextInput
                        multiline={true}
                        numberOfLines={6}
                        topMargin={getCustomSize(20)} />
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}