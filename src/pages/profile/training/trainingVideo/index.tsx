import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { styles } from './styles'
import CustomSearchView from '../../../../components/organisms/searchView'
import { DEMO_GIRL_IMAGE } from '../../../../assets/helper/imagePath'
import CustomIcon from '../../../../components/atoms/customIcon'
import { getCustomSize } from '../../../../theme/appFontSize'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import CustomClick from '../../../../components/customClick'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'TrainingVideoScreen'>

export default function TrainingVideoScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('saintTrainingVideo')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <CustomSearchView
                        placeholder={t('search')}
                        showFilter={true} />

                    <CustomClick
                        title={t('exploreAllTrainingVideo')}
                        handlePress={() => navigation.navigate('ExploreAllTrainingVideos')} />
                    <Pressable style={styles.horizontalView}
                        onPress={() => navigation.navigate('ExploreAllTrainingVideos')}>
                        <Image
                            source={{ uri: DEMO_GIRL_IMAGE }}
                            style={styles.imageView}
                            resizeMode='contain' />
                        <View style={styles.cardDesView}>
                            <Text style={styles.timelineText}>1 {t('dayAgo')}</Text>
                            <Text style={styles.videoTitle}>Lorem Ipsum</Text>
                            <View style={styles.timeView}>
                                <CustomIcon
                                    iconName='watch-later'
                                    iconSize={getCustomSize(13)} />
                                <Text style={styles.timelineText}>2 {t('hrs')}</Text>
                            </View>
                            <Text
                                style={styles.descriptionText}
                                numberOfLines={2}>Lorem ipsum dolor sit amet consectetur. Ultrices quam aliquam imperdiet mi </Text>
                            <Text style={{ ...styles.viewAllText, marginVertical: getCustomSize(10) }}>{t('watchNow')}</Text>
                        </View>


                    </Pressable>

                    <View style={styles.horizontalView}>
                        <Image
                            source={{ uri: DEMO_GIRL_IMAGE }}
                            style={styles.imageView}
                            resizeMode='contain' />
                        <View style={styles.cardDesView}>
                            <Text style={styles.timelineText}>1 {t('dayAgo')}</Text>
                            <Text style={styles.videoTitle}>Lorem Ipsum</Text>
                            <View style={styles.timeView}>
                                <CustomIcon
                                    iconName='watch-later'
                                    iconSize={getCustomSize(13)} />
                                <Text style={styles.timelineText}>2 {t('hrs')}</Text>
                            </View>
                            <Text
                                style={styles.descriptionText}
                                numberOfLines={2}>Lorem ipsum dolor sit amet consectetur. Ultrices quam aliquam imperdiet mi </Text>
                            <Text style={{ ...styles.viewAllText, marginVertical: getCustomSize(10) }}>{t('watchNow')}</Text>
                        </View>
                    </View>




                    <View style={styles.horizontalView}>
                        <Image
                            source={{ uri: DEMO_GIRL_IMAGE }}
                            style={styles.imageView}
                            resizeMode='contain' />
                        <View style={styles.cardDesView}>
                            <Text style={styles.timelineText}>1 {t('dayAgo')}</Text>
                            <Text style={styles.videoTitle}>Lorem Ipsum</Text>
                            <View style={styles.timeView}>
                                <CustomIcon
                                    iconName='watch-later'
                                    iconSize={getCustomSize(13)} />
                                <Text style={styles.timelineText}>2 {t('hrs')}</Text>
                            </View>
                            <Text
                                style={styles.descriptionText}
                                numberOfLines={2}>Lorem ipsum dolor sit amet consectetur. Ultrices quam aliquam imperdiet mi </Text>
                            <Text style={{ ...styles.viewAllText, marginVertical: getCustomSize(10) }}>{t('watchNow')}</Text>
                        </View>
                    </View>




                    <View style={styles.horizontalView}>
                        <Image
                            source={{ uri: DEMO_GIRL_IMAGE }}
                            style={styles.imageView}
                            resizeMode='contain' />
                        <View style={styles.cardDesView}>
                            <Text style={styles.timelineText}>1 {t('dayAgo')}</Text>
                            <Text style={styles.videoTitle}>Lorem Ipsum</Text>
                            <View style={styles.timeView}>
                                <CustomIcon
                                    iconName='watch-later'
                                    iconSize={getCustomSize(13)} />
                                <Text style={styles.timelineText}>2 {t('hrs')}</Text>
                            </View>
                            <Text
                                style={styles.descriptionText}
                                numberOfLines={2}>Lorem ipsum dolor sit amet consectetur. Ultrices quam aliquam imperdiet mi </Text>
                            <Text style={{ ...styles.viewAllText, marginVertical: getCustomSize(10) }}>{t('watchNow')}</Text>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}