import { View, Text, ScrollView, Image, Dimensions, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import CustomSearchView from '../../../components/organisms/searchView'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import { getCustomSize } from '../../../theme/appFontSize'
import { AppColor } from '../../../theme/appColor'
import CustomIcon from '../../../components/atoms/customIcon'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import CustomClick from '../../../components/customClick'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'TrainingScreen'>
export default function TrainingScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('training')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <CustomSearchView
                        placeholder={t('search')}
                        showFilter={true} />

                    <View style={styles.targetVideoView}>
                        <Text style={styles.targetVideoText}>{t('saintTrainingVideo')}</Text>
                        <Text style={styles.viewAllText}>{t('viewAll')}</Text>
                    </View>


                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>

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
                                style={styles.imageView} />
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
                    </ScrollView>



                    <View style={styles.targetVideoView}>
                        <Text style={styles.targetVideoText}>{t('exploreAll')}</Text>
                        <Text style={styles.viewAllText}>{t('viewAll')}</Text>
                    </View>


                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>

                        <View style={styles.exploreVideoView}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={styles.exploreViewImageBG} >
                                <View style={styles.exploreVideoSubHeadingView}>
                                    <Text style={styles.exploreVideoSubHeadingText}>{t('trending')}</Text>
                                </View>
                                <View style={styles.timeViewOverImage}>
                                    <CustomIcon
                                        iconName='watch-later'
                                        iconSize={getCustomSize(13)}
                                        iconColor={AppColor.WHITE_COLOR} />
                                    <Text style={{ ...styles.timelineText, color: AppColor.WHITE_COLOR }}>2 {t('hrs')}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.exploreVideoHeadingText}>Bridal Make up</Text>
                                <Text style={styles.exploreVideoDesText}>{t('videoDescription')}</Text>
                                <View style={styles.exploreVideoRatingView}>
                                    <Text style={styles.exploreVideoRatingText}>4 star</Text>
                                    <Text style={styles.exploreVideoRatingText}>1 {t('dayAgo')}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.exploreVideoView}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={styles.exploreViewImageBG} >
                                <View style={styles.exploreVideoSubHeadingView}>
                                    <Text style={styles.exploreVideoSubHeadingText}>{t('trending')}</Text>
                                </View>
                                <View style={styles.timeViewOverImage}>
                                    <CustomIcon
                                        iconName='watch-later'
                                        iconSize={getCustomSize(13)}
                                        iconColor={AppColor.WHITE_COLOR} />
                                    <Text style={{ ...styles.timelineText, color: AppColor.WHITE_COLOR }}>2 {t('hrs')}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.exploreVideoHeadingText}>Bridal Make up</Text>
                                <Text style={styles.exploreVideoDesText}>{t('videoDescription')}</Text>
                                <View style={styles.exploreVideoRatingView}>
                                    <Text style={styles.exploreVideoRatingText}>4 star</Text>
                                    <Text style={styles.exploreVideoRatingText}>1 {t('dayAgo')}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>



                    <View style={styles.coverView}>
                        <Text style={styles.coverViewTitle}>Refer and Earn a Permium Course worth Rs. 1500/-</Text>
                        <Pressable
                            onPress={() => navigation.navigate('TrainingVideoScreen')}
                            style={styles.coverButtonView}>
                            <Text style={styles.coverButtonText}>{t('referNow')}</Text>
                        </Pressable>
                        <CustomClick
                            title='Training Video'
                            handlePress={() => navigation.navigate('TrainingVideoScreen')} />
                    </View>


                    <View style={styles.targetVideoView}>
                        <Text style={styles.targetVideoText}>{t('myCareerPath')}</Text>
                        <Text style={styles.viewAllText}>{t('viewAll')}</Text>
                    </View>


                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.exploreVideoView}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={styles.exploreViewImageBG} >
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.careerViewTitle}>Bridal Make up</Text>
                                <View style={styles.exploreVideoRatingView}>
                                    <Text style={styles.exploreVideoRatingText}>4 star</Text>
                                    {/* <Text style={styles.exploreVideoRatingText}>1 {t('dayAgo')}</Text> */}

                                    <View style={{ ...styles.timeView, alignSelf: 'flex-end', alignItems: 'flex-end', marginHorizontal: getCustomSize(10) }}>
                                        <CustomIcon
                                            iconName='watch-later'
                                            iconSize={getCustomSize(13)}
                                        />
                                        <Text style={{ ...styles.timelineText }}>2 {t('hrs')}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.enrollView}>
                                <Text style={styles.enrollText}>{t('enroll')}</Text>
                            </View>
                        </View>



                        <View style={{ borderRadius: getCustomSize(5), elevation: getCustomSize(2), marginHorizontal: getCustomSize(5), backgroundColor: AppColor.WHITE_COLOR, marginVertical: getCustomSize(15), width: 300, }}>
                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                resizeMode='contain'
                                imageStyle={{ borderRadius: getCustomSize(5), }}
                                style={{ width: 300, height: 200 }} >
                            </ImageBackground>
                            <View style={{ ...styles.cardDesView, margin: getCustomSize(10) }}>
                                <Text style={styles.careerViewTitle}>Bridal Make up</Text>
                                <View style={styles.exploreVideoRatingView}>
                                    <Text style={styles.exploreVideoRatingText}>4 star</Text>
                                    {/* <Text style={styles.exploreVideoRatingText}>1 {t('dayAgo')}</Text> */}

                                    <View style={{ ...styles.timeView, alignSelf: 'flex-end', alignItems: 'flex-end', marginHorizontal: getCustomSize(10) }}>
                                        <CustomIcon
                                            iconName='watch-later'
                                            iconSize={getCustomSize(13)}
                                        />
                                        <Text style={{ ...styles.timelineText }}>2 {t('hrs')}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.enrollView}>
                                <Text style={styles.enrollText}>{t('enroll')}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}