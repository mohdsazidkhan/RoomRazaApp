import { View, Text, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { styles } from './styles'
import CustomSearchView from '../../../../components/organisms/searchView'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import { DEMO_GIRL_IMAGE } from '../../../../assets/helper/imagePath'
import { AppColor } from '../../../../theme/appColor'
import CustomIcon from '../../../../components/atoms/customIcon'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'ExploreAllTrainingVideos'>
export default function ExploreAllTrainingVideos({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('exploreAllTrainingVideo')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>

                    <CustomSearchView
                        placeholder={t('search')}
                        showFilter={true} />


                    <View style={{ marginVertical: getCustomSize(15) }}>
                        <View style={styles.appointmentHeadingView}>
                            <Text style={styles.appointmentHeadingText}>{t('trainingCategories')}</Text>
                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.appointmentView}>
                                <View style={styles.appointmentImageView} />
                                <Text style={styles.appointmentStatusText}>All</Text>
                            </View>
                            <View style={styles.appointmentView}>
                                <View style={styles.appointmentImageView} />
                                <Text style={styles.appointmentStatusText}>Hair</Text>
                            </View>
                            <View style={styles.appointmentView}>
                                <View style={styles.appointmentImageView} />
                                <Text style={styles.appointmentStatusText}>Skin</Text>
                            </View>
                            <View style={styles.appointmentView}>
                                <View style={styles.appointmentImageView} />
                                <Text style={styles.appointmentStatusText}>Make Up</Text>
                            </View>

                            <View style={styles.appointmentView}>
                                <View style={styles.appointmentImageView} />
                                <Text style={styles.appointmentStatusText}>Nail</Text>
                            </View>
                            <View style={styles.appointmentView}>
                                <View style={styles.appointmentImageView} />
                                <Text style={styles.appointmentStatusText}>Mask</Text>
                            </View>
                        </ScrollView>

                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: getCustomSize(-10), }}>

                        <View style={styles.videoCardView}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={{ height: 200 }} >

                                <View style={styles.trendingView}>
                                    <Text style={styles.trendingText}>{t('trending')}</Text>
                                </View>

                                <View style={styles.timeView}>
                                    <CustomIcon
                                        iconName='watch-later'
                                        iconSize={getCustomSize(15)}
                                        iconColor={AppColor.WHITE_COLOR} />
                                    <Text style={{ ...styles.timelineText, color: AppColor.WHITE_COLOR }}>2 {t('hrs')}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.videoTitle}>Bridal Make up</Text>
                                <Text style={styles.videoDescription}>{t('videoDescription')}</Text>
                                <View style={styles.starView}>
                                    <Text style={styles.starText}>4 star</Text>
                                    <Text style={styles.starText}>1 {t('dayAgo')}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.videoCardView}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={{ height: 200 }} >

                                <View style={styles.trendingView}>
                                    <Text style={styles.trendingText}>{t('trending')}</Text>
                                </View>

                                <View style={styles.timeView}>
                                    <CustomIcon
                                        iconName='watch-later'
                                        iconSize={getCustomSize(13)}
                                        iconColor={AppColor.WHITE_COLOR} />
                                    <Text style={{ ...styles.timelineText, color: AppColor.WHITE_COLOR }}>2 {t('hrs')}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.videoTitle}>Bridal Make up</Text>
                                <Text style={styles.videoDescription}>{t('videoDescription')}</Text>

                                <View style={styles.starView}>

                                    <Text style={styles.starText}>4 star</Text>
                                    <Text style={styles.starText}>1 {t('dayAgo')}</Text>

                                </View>

                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: getCustomSize(-10), }}>

                        <View style={styles.videoCardView}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={{ height: 200 }} >

                                <View style={styles.trendingView}>
                                    <Text style={styles.trendingText}>{t('trending')}</Text>
                                </View>

                                <View style={styles.timeView}>
                                    <CustomIcon
                                        iconName='watch-later'
                                        iconSize={getCustomSize(13)}
                                        iconColor={AppColor.WHITE_COLOR} />
                                    <Text style={{ ...styles.timelineText, color: AppColor.WHITE_COLOR }}>2 {t('hrs')}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.videoTitle}>Bridal Make up</Text>
                                <Text style={styles.videoDescription}>{t('videoDescription')}</Text>

                                <View style={styles.starView}>

                                    <Text style={styles.starText}>4 star</Text>
                                    <Text style={styles.starText}>1 {t('dayAgo')}</Text>

                                </View>

                            </View>
                        </View>

                        <View style={styles.videoCardView}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={{ height: 200 }} >

                                <View style={styles.trendingView}>
                                    <Text style={styles.trendingText}>{t('trending')}</Text>
                                </View>

                                <View style={styles.timeView}>
                                    <CustomIcon
                                        iconName='watch-later'
                                        iconSize={getCustomSize(13)}
                                        iconColor={AppColor.WHITE_COLOR} />
                                    <Text style={{ ...styles.timelineText, color: AppColor.WHITE_COLOR }}>2 {t('hrs')}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.videoTitle}>Bridal Make up</Text>
                                <Text style={styles.videoDescription}>{t('videoDescription')}</Text>

                                <View style={styles.starView}>

                                    <Text style={styles.starText}>4 star</Text>
                                    <Text style={styles.starText}>1 {t('dayAgo')}</Text>

                                </View>

                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}