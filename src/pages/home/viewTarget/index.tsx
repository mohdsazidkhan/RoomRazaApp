import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import { AppFonts } from '../../../theme/appFont'
import { AppColor } from '../../../theme/appColor'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import CustomSearchView from '../../../components/organisms/searchView'
import CustomIcon from '../../../components/atoms/customIcon'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'ViewTargetScreen'>
export default function ViewTargetScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('viewTargetDetails')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.usernameText}>Ankur</Text>
                    <Text style={styles.dateText}>{t('date')}: 27/01/23</Text>

                    <CustomSearchView
                        topMargin={getCustomSize(25)}
                        placeholder={t('search')}
                        showFilter={true} />


                    <View style={styles.amtView}>
                        <Text style={styles.amtHeadingText}>{t('targetAmount')}</Text>
                        <Text style={styles.amtHeadingText}>{t('actualAmount')}</Text>
                    </View>


                    <View style={styles.amtTextView}>
                        <Text style={styles.amtText}>1,00,000</Text>
                        <Text style={styles.amtText}>50,000</Text>
                    </View>

                    <Pressable style={styles.targetDropdown}>
                        <Text style={styles.targetDropdownText}>Hair Cut (Rs. 500)</Text>
                        <CustomIcon
                            iconName='keyboard-arrow-down'
                            iconColor={AppColor.DARK_LIVER_COLOR} />
                    </Pressable>

                    <Pressable style={styles.targetDropdown}>
                        <Text style={styles.targetDropdownText}>Hair Colour (Rs. 1200)</Text>
                        <CustomIcon
                            iconName='keyboard-arrow-down'
                            iconColor={AppColor.DARK_LIVER_COLOR} />
                    </Pressable>

                    <Text style={styles.suggestionText}>{t('suggestions')}</Text>
                    <Text style={styles.suggestionDetailText}>Lorem ipsum dolor sit amet consectetur. Felis integer eget lectus ipsum faucibus amet lorem blandit.</Text>



                    <Pressable style={styles.targetDropdown}>
                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>Hair Spa</Text>
                            <Text style={styles.suggestionDetailText}>{t('service')}</Text>
                        </View>

                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>1000</Text>
                            <Text style={styles.suggestionDetailText}>{t('price')}</Text>
                        </View>

                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>10</Text>
                            <Text style={styles.suggestionDetailText}>{t('noService')}</Text>
                        </View>

                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>1000</Text>
                            <Text style={styles.suggestionDetailText}>{t('amtService')}</Text>
                        </View>

                    </Pressable>

                    <Pressable style={styles.targetDropdown}>
                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>Hair Spa</Text>
                            <Text style={styles.suggestionDetailText}>{t('service')}</Text>
                        </View>

                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>1000</Text>
                            <Text style={styles.suggestionDetailText}>{t('price')}</Text>
                        </View>

                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>10</Text>
                            <Text style={styles.suggestionDetailText}>{t('noService')}</Text>
                        </View>

                        <View style={styles.suggestionView}>
                            <Text style={styles.suggestMainText}>1000</Text>
                            <Text style={styles.suggestionDetailText}>{t('amtService')}</Text>
                        </View>

                    </Pressable>


                    <View style={styles.bottomDetailView}>
                        <View style={styles.bottomDetailSubView}>
                            <Text style={styles.amtHeadingText}>{t('totalNoService')}</Text>
                            <Text style={styles.amtHeadingText}>2</Text>
                        </View>
                        <View style={styles.bottomDetailSubView}>
                            <Text style={styles.amtHeadingText}>{t('totalTargetAmount')}</Text>
                            <Text style={styles.amtHeadingText}>30000</Text>
                        </View>
                        <View style={styles.bottomDetailSubView}>
                            <Text style={styles.amtHeadingText}>{t('achievedAmount')}</Text>
                            <Text style={styles.amtHeadingText}>17000</Text>
                        </View>

                        <View style={styles.bottomDetailSubView}>
                            <Text style={styles.amtHeadingText}>{t('balanceToAchieve')}</Text>
                            <Text style={styles.amtHeadingText}>13000</Text>
                        </View>

                        <View style={styles.bottomDetailSubView}>
                            <Text style={styles.amtHeadingText}>{t('projections')}</Text>
                            <Text style={styles.amtHeadingText}>-7000</Text>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar >
    )
}