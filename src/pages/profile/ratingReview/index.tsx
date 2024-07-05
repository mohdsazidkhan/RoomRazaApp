import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import { AppColor } from '../../../theme/appColor'
import { getCustomSize } from '../../../theme/appFontSize'
import { ProgressBar } from 'react-native-paper'
import CustomIcon from '../../../components/atoms/customIcon'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import DividerView from '../../../components/atoms/dividerView'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'RatingReviewScreen'>
export default function RatingReviewScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('reviewRatings')}
                backHandle={() => navigation.goBack()} />
            <ScrollView>


                <View style={styles.container}>
                    <View style={styles.ratingView}>

                        <View style={styles.totalReviewView}>
                            <Text style={styles.reviewNumberText}>4.0</Text>
                            <Text>4 Stars</Text>
                            <Text style={styles.numberOfReview}>(89 {t('reviews')})</Text>
                        </View>

                        <View style={{ flex: 2.5, }}>
                            <View style={styles.ratingProgressView}>
                                <Text style={styles.ratingTypeText}>5</Text>
                                <View style={styles.progressView}>
                                    <ProgressBar
                                        style={styles.progressBarView}
                                        color={AppColor.DEEP_SPACE_SPARKLE}
                                        animatedValue={0.9} />
                                </View>
                            </View>

                            <View style={styles.ratingProgressView}>
                                <Text style={styles.ratingTypeText}>4</Text>
                                <View style={styles.progressView}>
                                    <ProgressBar
                                        style={styles.progressBarView}
                                        color={AppColor.DEEP_SPACE_SPARKLE}
                                        animatedValue={0.5} />
                                </View>
                            </View>


                            <View style={styles.ratingProgressView}>
                                <Text style={styles.ratingTypeText}>3</Text>
                                <View style={styles.progressView}>
                                    <ProgressBar
                                        style={styles.progressBarView}
                                        color={AppColor.DEEP_SPACE_SPARKLE}
                                        animatedValue={0.3} />
                                </View>
                            </View>

                            <View style={styles.ratingProgressView}>
                                <Text style={styles.ratingTypeText}>2</Text>
                                <View style={styles.progressView}>
                                    <ProgressBar
                                        style={styles.progressBarView}
                                        color={AppColor.DEEP_SPACE_SPARKLE}
                                        animatedValue={0.2} />
                                </View>
                            </View>

                            <View style={styles.ratingProgressView}>
                                <Text style={styles.ratingTypeText}>1</Text>
                                <View style={styles.progressView}>
                                    <ProgressBar
                                        style={styles.progressBarView}
                                        color={AppColor.DEEP_SPACE_SPARKLE}
                                        animatedValue={0.1} />
                                </View>
                            </View>


                        </View>
                    </View>


                    <Pressable style={styles.sortByPressable}>
                        <Text style={styles.sortByText}>{t('sortBy')}</Text>
                        <CustomIcon
                            iconName='expand-more' />
                    </Pressable>

                    <Text style={styles.reviewTitle}>{t('reviews')} (90)</Text>

                    <View>
                        <Pressable style={styles.reviewMenuView}>

                            <View style={styles.reviewImageNameView}>
                                <Image
                                    source={{ uri: DEMO_GIRL_IMAGE }}
                                    style={styles.reviewProfileImage}
                                    resizeMode='contain' />
                                <View style={styles.reviewNameView}>
                                    <Text style={styles.nameText}>Ankur Chauhan</Text>
                                    <Text style={styles.monthText}>5 month ago</Text>
                                </View>
                            </View>

                            <CustomIcon
                                iconName='expand-more' />
                        </Pressable>




                        <View style={styles.reviewMenuView}>

                            <Text style={styles.expertiseTitle}>Rebecca Stylist: </Text>
                            <View style={styles.expertiseRatingView}>
                                <CustomIcon
                                    iconName='star'
                                    iconSize={getCustomSize(15)}
                                    iconColor={AppColor.PASTEL_ORANGE_COLOR} />
                                <Text style={styles.expertiseRatingText}>4</Text>
                            </View>


                            <Text style={styles.expertiseTitle}>Service: </Text>
                            <View style={styles.expertiseRatingView}>
                                <CustomIcon
                                    iconName='star'
                                    iconSize={getCustomSize(15)}
                                    iconColor={AppColor.PASTEL_ORANGE_COLOR} />
                                <Text style={styles.expertiseRatingText}>4</Text>
                            </View>

                            <Text style={styles.expertiseTitle}>Salon: </Text>
                            <View style={styles.expertiseRatingView}>
                                <CustomIcon
                                    iconName='star'
                                    iconSize={getCustomSize(15)}
                                    iconColor={AppColor.PASTEL_ORANGE_COLOR} />
                                <Text style={styles.expertiseRatingText}>4</Text>
                            </View>

                        </View>
                        <Text style={styles.reviewDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Text>
                    </View>


                    <DividerView marginVertical={getCustomSize(20)} />

                    <View>
                        <Pressable style={styles.reviewMenuView}>
                            <View style={styles.reviewImageNameView}>
                                <Image
                                    source={{ uri: DEMO_GIRL_IMAGE }}
                                    style={styles.reviewProfileImage}
                                    resizeMode='contain' />

                                <View style={styles.reviewNameView}>
                                    <Text style={styles.nameText}>Ankur Chauhan</Text>
                                    <Text style={styles.monthText}>5 month ago</Text>
                                </View>
                            </View>

                            <CustomIcon
                                iconName='expand-more' />
                        </Pressable>




                        <View style={styles.reviewMenuView}>
                            <Text style={styles.expertiseTitle}>Rebecca Stylist: </Text>
                            <View style={styles.expertiseRatingView}>
                                <CustomIcon
                                    iconName='star'
                                    iconSize={getCustomSize(15)}
                                    iconColor={AppColor.PASTEL_ORANGE_COLOR} />
                                <Text style={styles.expertiseRatingText}>4</Text>
                            </View>

                            <Text style={styles.expertiseTitle}>Service: </Text>
                            <View style={styles.expertiseRatingView}>
                                <CustomIcon
                                    iconName='star'
                                    iconSize={getCustomSize(15)}
                                    iconColor={AppColor.PASTEL_ORANGE_COLOR} />
                                <Text style={styles.expertiseRatingText}>4</Text>
                            </View>

                            <Text style={styles.expertiseTitle}>Salon: </Text>
                            <View style={styles.expertiseRatingView}>
                                <CustomIcon
                                    iconName='star'
                                    iconSize={getCustomSize(15)}
                                    iconColor={AppColor.PASTEL_ORANGE_COLOR} />
                                <Text style={styles.expertiseRatingText}>4</Text>
                            </View>

                        </View>
                        <Text style={styles.reviewDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}