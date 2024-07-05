import { View, Text, ScrollView, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import CustomSearchView from '../../../../components/organisms/searchView'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import LinearGradient from 'react-native-linear-gradient'
import { AppColor } from '../../../../theme/appColor'
import { AppFonts } from '../../../../theme/appFont'
import { styles } from './styles'
import Counter from '../../../../components/atoms/counter'
import CustomButton from '../../../../components/atoms/customButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { DEMO_GIRL_IMAGE } from '../../../../assets/helper/imagePath'


type Props = NativeStackScreenProps<RootStackParamList, 'GiftCardScreen'>

export default function GiftCardScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Select Gift Card'
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <CustomSearchView
                        placeholder='Search'
                        showFilter={true} />

                    <View style={styles.cardView}>
                        <View style={styles.subCardView}>

                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                imageStyle={{ borderRadius: getCustomSize(20) }}
                                resizeMode='contain'>
                                <LinearGradient
                                    colors={['#00000000', '#000']}
                                    style={styles.linearGradientView}
                                    useAngle={true}
                                    angle={180}>
                                    <View style={styles.cardDetailView}>
                                        <View style={{ flex: 1.5 }}>
                                            <Text style={styles.planName}>Gift Card</Text>
                                            <Pressable>
                                                <Text style={styles.memberTextButton}>6 Members</Text>
                                            </Pressable>
                                            <Text style={styles.detailText}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                                        </View>
                                        <View style={styles.dateView}>
                                            <Text style={styles.expiryDateText}>Expiry: 31 June</Text>
                                            <Text style={styles.priceText}>$10,000</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </View>
                        <Counter />
                    </View>


                    <View style={styles.cardView}>
                        <View style={styles.subCardView}>

                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                imageStyle={{ borderRadius: getCustomSize(20) }}
                                resizeMode='contain'>
                                <LinearGradient
                                    colors={['#00000000', '#000']}
                                    style={styles.linearGradientView}
                                    useAngle={true}
                                    angle={180}>
                                    <View style={styles.cardDetailView}>
                                        <View style={{ flex: 1.5 }}>
                                            <Text style={styles.planName}>Platinum Plan</Text>
                                            <Pressable>
                                                <Text style={styles.memberTextButton}>6 Members</Text>
                                            </Pressable>
                                            <Text style={styles.detailText}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                                        </View>
                                        <View style={styles.dateView}>
                                            <Text style={styles.expiryDateText}>Expiry: 31 June</Text>
                                            <Text style={styles.priceText}>$10,000</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </View>
                        <Counter />
                    </View>

                    <View style={styles.cardView}>
                        <View style={styles.subCardView}>

                            <ImageBackground
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                imageStyle={{ borderRadius: getCustomSize(20) }}
                                resizeMode='contain'>
                                <LinearGradient
                                    colors={['#00000000', '#000']}
                                    style={styles.linearGradientView}
                                    useAngle={true}
                                    angle={180}>
                                    <View style={styles.cardDetailView}>
                                        <View style={{ flex: 1.5 }}>
                                            <Text style={styles.planName}>Nail Extension</Text>
                                            <Pressable>
                                                <Text style={styles.memberTextButton}>6 Members</Text>
                                            </Pressable>
                                            <Text style={styles.detailText}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                                        </View>
                                        <View style={styles.dateView}>
                                            <Text style={styles.expiryDateText}>Expiry: 31 June</Text>
                                            <Text style={styles.priceText}>$10,000</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </View>
                        <Counter />
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='CANCEL'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                btnTitle='ADD'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}