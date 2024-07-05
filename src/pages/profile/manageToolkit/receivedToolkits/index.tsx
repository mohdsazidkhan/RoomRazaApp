import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { styles } from './styles'
import CustomSearchView from '../../../../components/organisms/searchView'
import DividerView from '../../../../components/atoms/dividerView'
import CustomIcon from '../../../../components/atoms/customIcon'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'ReceivedToolkitScreen'>
export default function ReceivedToolkitScreen({ navigation }: Props) {
    const { t } = useTranslation()


    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('receivedToolsKits')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>

                    <CustomSearchView
                        placeholder={t('search')}
                        showFilter={true} />

                    <Pressable style={styles.weekMonthView}>
                        <Text style={styles.selectedTabText}>{t('day')}</Text>
                        <Text style={styles.unSelectedText}>{t('week')}</Text>
                        <Text style={styles.unSelectedText}>{t('month')}</Text>
                        <Text style={styles.unSelectedText}>{t('dateRange')}</Text>
                    </Pressable>

                    <Pressable style={styles.receivedToolkitMenu}>
                        <Text style={styles.allotedTime}>{t('allocatedDateTime')} : 12/01/23 | 10:00AM</Text>
                        <DividerView />

                        <View style={styles.receivedToolkitSubMenu}>
                            <View>
                                <Text style={styles.toolkitText}>General Tool Kit </Text>
                                <Text style={styles.toolkitMenuItemText}>{t('items')} :
                                    <Text style={styles.toolkitMenuCountText}> 3</Text>
                                </Text>
                                <Text style={styles.toolkitMenuItemText}>{t('receivedFrom')} :
                                    <Text style={styles.toolkitType}> General Tool Kit </Text>
                                </Text>
                            </View>
                            <CustomIcon
                                iconName='expand-more' />
                        </View>
                    </Pressable>

                    <Pressable style={styles.receivedToolkitMenu}>
                        <Text style={styles.allotedTime}>{t('allocatedDateTime')} : 12/01/23 | 10:00AM</Text>
                        <DividerView />

                        <View style={styles.receivedToolkitSubMenu}>
                            <View>
                                <Text style={styles.toolkitText}>General Tool Kit </Text>
                                <Text style={styles.toolkitMenuItemText}>{t('items')} :
                                    <Text style={styles.toolkitMenuCountText}> 3</Text>
                                </Text>
                                <Text style={styles.toolkitMenuItemText}>{t('receivedFrom')} :
                                    <Text style={styles.toolkitType}> General Tool Kit </Text>
                                </Text>
                            </View>
                            <CustomIcon
                                iconName='expand-more' />
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}