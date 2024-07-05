import { KeyboardTypeOptions, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { AppColor } from '../../../../theme/appColor'
import { KeyboardType } from 'react-native'
import { AppFonts } from '../../../../theme/appFont'
import { AppFontSize } from '../../../../theme/appFontSize'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import CalendarHorizontalStrip from '../../../molecules/calendarHorizontalStrip'
import CustomButton from '../../../atoms/customButton'
import CustomTextInput from '../../../molecules/customTextInput'
import { SvgImagePath } from '../../../../assets/helper/imagePath'
import * as appMessage from '../../../../assets/messages'
import DividerView from '../../../atoms/dividerView'
import PaperButton from '../../../atoms/paperButton'

// interface SelectServiceComponentProps {
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

export default function SelectServiceComponent(params: SelectServiceComponentProps) {
    // const { onChangeText, labelValue, topMargin, KeyboardType, multiline, maxlength, numberOfLines, placeholder, borderStyle, leftText, backgroundColor = AppColor.WHITE_COLOR, isEditable = true } = params;

    return (

        <View style={{ marginBottom: 10 }}>

            <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginTop: 15, textAlign: 'center' }}>Select Service</Text>



            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                <CustomTextInput
                    placeholder='Search for a service'
                    labelValue='' />

                <View style={styles.filterSortView}>
                    <View style={styles.filterSortSubView}>

                        <SvgImagePath.Filter />

                        <Text style={styles.filterSortText}>{appMessage.filter}</Text>
                    </View>

                    <View style={styles.filterSortSubView}>
                        <SvgImagePath.Sort />
                        <Text style={styles.filterSortText}>{appMessage.sort}</Text>
                    </View>
                </View>
            </View>


            <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginVertical: 15 }}>Select Categories</Text>
            <BottomSheetScrollView horizontal showsHorizontalScrollIndicator={false}>


                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>All</Text>
                </View>
                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Skin</Text>
                </View>
                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Make up</Text>
                </View>
                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Hair</Text>
                </View>
            </BottomSheetScrollView>





            <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginVertical: 15 }}>SKIN (7)</Text>

            <View style={{ marginHorizontal: 15 }}>
                <DividerView />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginTop: 15 }}>Blech Face & Neck</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: 15, marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
                    </View>

                    <Pressable style={{ elevation: 3, backgroundColor: AppColor.WHITE_COLOR, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 7 }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_17, color: AppColor.DEEP_SPACE_SPARKLE }}>ADD</Text>
                    </Pressable>
                </View>

                <DividerView marginVertical={10} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginTop: 15 }}>Blech Face & Neck</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: 15, marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
                    </View>

                    <Pressable style={{ elevation: 3, backgroundColor: AppColor.WHITE_COLOR, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 7 }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_17, color: AppColor.DEEP_SPACE_SPARKLE }}>ADD</Text>
                    </Pressable>
                </View>

                <DividerView marginVertical={10} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginTop: 15 }}>Blech Face & Neck</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: 15, marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
                    </View>

                    <Pressable style={{ elevation: 3, backgroundColor: AppColor.WHITE_COLOR, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 7 }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_17, color: AppColor.DEEP_SPACE_SPARKLE }}>ADD</Text>
                    </Pressable>
                </View>


                <DividerView marginVertical={10} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginTop: 15 }}>Blech Face & Neck</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: 15, marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
                    </View>

                    <Pressable style={{ elevation: 3, backgroundColor: AppColor.WHITE_COLOR, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 7 }}>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_17, color: AppColor.DEEP_SPACE_SPARKLE }}>ADD</Text>
                    </Pressable>
                </View>
            </View>












            <View style={{ justifyContent: 'space-between', marginHorizontal: 15, marginTop: 20 }}>
                <PaperButton
                    buttonName='Ok' 
                    buttonColor={AppColor.DEEP_SPACE_SPARKLE}/>
            </View>
        </View>
    )
}
