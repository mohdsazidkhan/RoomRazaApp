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

export default function SelectStylistComponent(params: SelectStylistComponentProps) {
    // const { onChangeText, labelValue, topMargin, KeyboardType, multiline, maxlength, numberOfLines, placeholder, borderStyle, leftText, backgroundColor = AppColor.WHITE_COLOR, isEditable = true } = params;

    return (

        <View style={{ marginBottom: 10 }}>

            <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginTop: 15 }}>Bleach Face & Feet</Text>

            <Text style={{
                fontFamily: AppFonts.FontsMedium,
                color: AppColor.TAUPE_GRAY,
                fontSize: AppFontSize.FontsSize_12,
                marginHorizontal: 15,
                marginVertical: 10
            }}>40 MIn       |       Rs. 550/-</Text>

            <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginVertical: 15 }}>Select Stylist</Text>
            <BottomSheetScrollView horizontal showsHorizontalScrollIndicator={false}>


                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>AnyOne</Text>
                </View>
                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Aditya Sharma</Text>
                    <Text style={styles.appointmentStatusTextLight}>Hair Stylist Expert</Text>
                </View>
                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Aditya Sharma</Text>
                    <Text style={styles.appointmentStatusTextLight}>Hair Stylist Expert</Text>
                </View>
                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Aditya Sharma</Text>
                    <Text style={styles.appointmentStatusTextLight}>Hair Stylist Expert</Text>
                </View>

                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Aditya Sharma</Text>
                    <Text style={styles.appointmentStatusTextLight}>Hair Stylist Expert</Text>
                </View>
                <View style={styles.appointmentView}>
                    <View style={styles.appointmentImageView} />
                    <Text style={styles.appointmentStatusText}>Aditya Sharma</Text>
                    <Text style={styles.appointmentStatusTextLight}>Hair Stylist Expert</Text>
                </View>
            </BottomSheetScrollView>


            <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginVertical: 15 }}>Select Date & Time</Text>
            <LinearGradient
                colors={[AppColor.CHARCOAL_COLOR, AppColor.DEEP_SPACE_SPARKLE,]}
                locations={[0.22, 0.8]}
                useAngle={true}
                angle={135}
                style={{ flex: 1, alignContent: 'center', paddingVertical: 13 }}
                angleCenter={{ x: 0.5, y: 0.5 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>
                <View >
                    <CalendarHorizontalStrip />

                    <Pressable style={styles.calendarTodayView}>
                        <Text style={styles.todayText}>Today</Text>
                    </Pressable>
                </View>

            </LinearGradient>


            <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginVertical: 15 }}>Available Slot</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                        btnTitle='Morning'
                        borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        btnTitle='AfterNoon'
                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                        textColor={AppColor.WHITE_COLOR}
                    />
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                        btnTitle='Evening'
                        borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 20 }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                        btnTitle='12:00 PM'
                        borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        btnTitle='12:30 PM'
                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                        textColor={AppColor.WHITE_COLOR}
                    />
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        textColor={AppColor.APPLE_COLOR}
                        btnTitle='01:00 PM'
                        borderColor={AppColor.APPLE_COLOR} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: -10 }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        textColor={AppColor.APPLE_COLOR}
                        btnTitle='01:30 PM'
                        borderColor={AppColor.APPLE_COLOR} />
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        btnTitle='03:30 PM'
                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                        textColor={AppColor.WHITE_COLOR}
                    />
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        textColor={AppColor.APPLE_COLOR}
                        btnTitle='07:00 PM'
                        borderColor={AppColor.APPLE_COLOR} />
                </View>
            </View>







            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 20 }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <CustomButton
                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                        btnTitle='CANCEL'
                        borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                </View>

                <View style={{ flex: 1, marginLeft: 10 }}>
                    <CustomButton
                        btnTitle='CREATE'
                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                        textColor={AppColor.WHITE_COLOR}
                    />
                </View>
            </View>



        </View>
    )
}
