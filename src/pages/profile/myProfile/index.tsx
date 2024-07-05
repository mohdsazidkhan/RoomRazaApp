import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { DEMO_GIRL_IMAGE, SvgImagePath } from '../../../assets/helper/imagePath'
import { AppColor } from '../../../theme/appColor'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import CustomIcon from '../../../components/atoms/customIcon'
import { AppFonts } from '../../../theme/appFont'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'MyProfileScreen'>
export default function MyProfileScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('myProfile')}
                backHandle={() => navigation.goBack()}
            />


            <ScrollView>
                <View>
                    <Pressable
                        style={styles.menuView}
                        onPress={() => navigation.navigate('PersonalInformationScreen')}>
                        <View style={styles.imgTextView}>
                            <SvgImagePath.Information />
                            <Text style={styles.textView}>{t('personalInformation')}</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>


                    <Pressable
                        style={styles.menuView}
                        onPress={() => navigation.navigate('JobProfileScreen')}>
                        <View style={styles.imgTextView}>
                            <SvgImagePath.User />
                            <Text style={styles.textView}>{t('jobProfile')}</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>



                    <Pressable
                        style={styles.menuView}
                        onPress={() => navigation.navigate('SettingWorkingHourScreen')}>
                        <View style={styles.imgTextView}>
                            <SvgImagePath.WorkingHour />
                            <Text style={styles.textView}>{t('workingHoursStylist')}</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>



                    <Pressable
                        style={styles.menuView}
                        onPress={() => navigation.navigate('TargetPayrollScreen')}>
                        <View style={styles.imgTextView}>
                            <SvgImagePath.TargetPayroll />
                            <Text style={styles.textView}>{t('targetPayrolls')}</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>


                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('DocumentScreen')}>
                        <View style={styles.imgTextView}>
                            <SvgImagePath.Document />
                            <Text style={styles.textView}>{t('documents')}</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>



                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('RatingReviewScreen')}>
                        <View style={styles.imgTextView}>
                            <SvgImagePath.ReviewRating />
                            <Text style={styles.textView}>{t('reviewRatings')}</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>

                    {/* <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('OtherDetailsScreen')}>
                        <View style={styles.imgTextView}>
                            <SvgImagePath.OtherDetail />
                            <Text style={styles.textView}>{t('otherDetails')}</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable> */}
                </View>
            </ScrollView>

        </SafeAreaWithStatusBar >
    )
}