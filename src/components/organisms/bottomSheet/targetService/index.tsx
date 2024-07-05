import { KeyboardTypeOptions, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { AppColor } from '../../../../theme/appColor'
import { KeyboardType } from 'react-native'
import { AppFonts } from '../../../../theme/appFont'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import CalendarHorizontalStrip from '../../../molecules/calendarHorizontalStrip'
import CustomButton from '../../../atoms/customButton'
import CustomIcon from '../../../atoms/customIcon'
import DividerView from '../../../atoms/dividerView'
import { useTranslation } from 'react-i18next'

// interface SelectStylistComponentProps {
//     labelValue: string
//     onChangeText?: (text: string) => void
//     topMargin?: number
//     KeyboardType?: KeyboardType
//     multiline?: boolean
//     maxlength?: number,
//     numberOfLines?: number
//     placeholder?: string
//     borderStyle?: string
//     leftText?: string
//     backgroundColor?: string
//     isEditable?: boolean
// }

export default function TargetServiceComponent(params: TargetServiceComponentProps) {
    // const { onChangeText, labelValue, topMargin, KeyboardType, multiline, maxlength, numberOfLines, placeholder, borderStyle, leftText, backgroundColor = AppColor.WHITE_COLOR, isEditable = true } = params;
    const { t } = useTranslation()
    return (

        <View style={{ marginBottom: 10 }}>
            <Text style={styles.titleText}>{t('targetTypeBasedServices')}</Text>
            <Text style={styles.subTitleText}>{t('listServicesAssignTo')} Sunaina Singh</Text>

            <View style={styles.serviceAndCountView}>
                <Text style={styles.categoryText}>{t('category')} : </Text>
                <Text style={styles.categoryValueText}>Skin(3)</Text>
            </View>


            <Pressable style={styles.menuPressableView}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: getCustomSize(15) }}>
                        <View>
                            <Text style={{
                                fontSize: getCustomSize(AppFontSize.FontsSize_18),
                                fontFamily: AppFonts.FontsMedium,
                                color: AppColor.BLACK_COLOR,

                            }}>Bleach Feet & Hand</Text>
                            <Text style={{
                                fontFamily: AppFonts.FontsRegular,
                                color: AppColor.TAUPE_GRAY,
                                fontSize: AppFontSize.FontsSize_12,
                                marginVertical: getCustomSize(5),

                            }}>40 min       |       Rs. 550</Text>
                        </View>

                        <View style={{ backgroundColor: AppColor.DEEP_SPACE_SPARKLE, flexDirection: 'row', alignItems: 'center', borderRadius: getCustomSize(5), paddingHorizontal: getCustomSize(10) }}>
                            <Pressable style={{ alignSelf: 'flex-start' }}>
                                <CustomIcon
                                    iconName='minimize'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                            <Text style={{ color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsBold, marginHorizontal: getCustomSize(14) }}>1</Text>
                            <Pressable>
                                <CustomIcon
                                    iconName='add'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsBold,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>Value</Text>

                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsMedium,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>Rs.1100</Text>
                    </View>
                </View>
            </Pressable>




            <Pressable style={styles.menuPressableView}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: getCustomSize(15) }}>
                        <View>
                            <Text style={{
                                fontSize: getCustomSize(AppFontSize.FontsSize_18),
                                fontFamily: AppFonts.FontsMedium,
                                color: AppColor.BLACK_COLOR,

                            }}>Bleach Feet & Hand</Text>
                            <Text style={{
                                fontFamily: AppFonts.FontsRegular,
                                color: AppColor.TAUPE_GRAY,
                                fontSize: AppFontSize.FontsSize_12,
                                marginVertical: getCustomSize(5),

                            }}>40 min       |       Rs. 550</Text>
                        </View>

                        <View style={{ backgroundColor: AppColor.DEEP_SPACE_SPARKLE, flexDirection: 'row', alignItems: 'center', borderRadius: getCustomSize(5), paddingHorizontal: getCustomSize(10) }}>
                            <Pressable style={{ alignSelf: 'flex-start' }}>
                                <CustomIcon
                                    iconName='minimize'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                            <Text style={{ color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsBold, marginHorizontal: getCustomSize(14) }}>1</Text>
                            <Pressable>
                                <CustomIcon
                                    iconName='add'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsBold,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>Value</Text>

                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsMedium,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>Rs.1100</Text>
                    </View>
                </View>
            </Pressable>


            <DividerView marginVertical={getCustomSize(10)} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: getCustomSize(15) }}>
                <Text style={{
                    fontSize: getCustomSize(AppFontSize.FontsSize_18),
                    fontFamily: AppFonts.FontsBold,
                    color: AppColor.DEEP_SPACE_SPARKLE,
                }}>Value</Text>

                <Text style={{
                    fontSize: getCustomSize(AppFontSize.FontsSize_18),
                    fontFamily: AppFonts.FontsMedium,
                    color: AppColor.DEEP_SPACE_SPARKLE,
                }}>Rs.1100</Text>
            </View>






            <View style={styles.serviceAndCountView}>
                <Text style={styles.categoryText}>{t('category')} : </Text>
                <Text style={styles.categoryValueText}>Skin(3)</Text>
            </View>


            <Pressable style={styles.menuPressableView}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: getCustomSize(15) }}>
                        <View>
                            <Text style={{
                                fontSize: getCustomSize(AppFontSize.FontsSize_18),
                                fontFamily: AppFonts.FontsMedium,
                                color: AppColor.BLACK_COLOR,

                            }}>Bleach Feet & Hand</Text>
                            <Text style={{
                                fontFamily: AppFonts.FontsRegular,
                                color: AppColor.TAUPE_GRAY,
                                fontSize: AppFontSize.FontsSize_12,
                                marginVertical: getCustomSize(5),

                            }}>40 min       |       Rs. 550</Text>
                        </View>

                        <View style={{ backgroundColor: AppColor.DEEP_SPACE_SPARKLE, flexDirection: 'row', alignItems: 'center', borderRadius: getCustomSize(5), paddingHorizontal: getCustomSize(10) }}>
                            <Pressable style={{ alignSelf: 'flex-start' }}>
                                <CustomIcon
                                    iconName='minimize'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                            <Text style={{ color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsBold, marginHorizontal: getCustomSize(14) }}>1</Text>
                            <Pressable>
                                <CustomIcon
                                    iconName='add'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsBold,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>{t('totalAmount')}</Text>

                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsMedium,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>Rs.1100</Text>
                    </View>
                </View>
            </Pressable>




            <Pressable style={styles.menuPressableView}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: getCustomSize(15) }}>
                        <View>
                            <Text style={{
                                fontSize: getCustomSize(AppFontSize.FontsSize_18),
                                fontFamily: AppFonts.FontsMedium,
                                color: AppColor.BLACK_COLOR,

                            }}>Bleach Feet & Hand</Text>
                            <Text style={{
                                fontFamily: AppFonts.FontsRegular,
                                color: AppColor.TAUPE_GRAY,
                                fontSize: AppFontSize.FontsSize_12,
                                marginVertical: getCustomSize(5),

                            }}>40 min       |       Rs. 550</Text>
                        </View>

                        <View style={{ backgroundColor: AppColor.DEEP_SPACE_SPARKLE, flexDirection: 'row', alignItems: 'center', borderRadius: getCustomSize(5), paddingHorizontal: getCustomSize(10) }}>
                            <Pressable style={{ alignSelf: 'flex-start' }}>
                                <CustomIcon
                                    iconName='minimize'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                            <Text style={{ color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsBold, marginHorizontal: getCustomSize(14) }}>1</Text>
                            <Pressable>
                                <CustomIcon
                                    iconName='add'
                                    iconColor={AppColor.WHITE_COLOR} />
                            </Pressable>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsBold,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>Value</Text>

                        <Text style={{
                            fontSize: getCustomSize(AppFontSize.FontsSize_18),
                            fontFamily: AppFonts.FontsMedium,
                            color: AppColor.DEEP_SPACE_SPARKLE,
                        }}>Rs.1100</Text>
                    </View>
                </View>
            </Pressable>


            <DividerView marginVertical={getCustomSize(10)} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: getCustomSize(15) }}>
                <Text style={{
                    fontSize: getCustomSize(AppFontSize.FontsSize_18),
                    fontFamily: AppFonts.FontsBold,
                    color: AppColor.DEEP_SPACE_SPARKLE,
                }}>{t('totalAmount')}</Text>

                <Text style={{
                    fontSize: getCustomSize(AppFontSize.FontsSize_18),
                    fontFamily: AppFonts.FontsMedium,
                    color: AppColor.DEEP_SPACE_SPARKLE,
                }}>Rs.1100</Text>
            </View>



            <DividerView marginVertical={getCustomSize(10)} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: getCustomSize(15), paddingBottom: getCustomSize(10) }}>
                <Text style={{
                    fontSize: getCustomSize(AppFontSize.FontsSize_18),
                    fontFamily: AppFonts.FontsBold,
                    color: AppColor.DEEP_SPACE_SPARKLE,
                }}>{t('targetTotal')}</Text>

                <Text style={{
                    fontSize: getCustomSize(AppFontSize.FontsSize_18),
                    fontFamily: AppFonts.FontsMedium,
                    color: AppColor.DEEP_SPACE_SPARKLE,
                }}>Rs.1100</Text>
            </View>
        </View>
    )
}
