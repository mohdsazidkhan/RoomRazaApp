import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Styles from './styles';
import { AppColor } from '../../../theme/appColor';
import CalendarHorizontalStrip from '../calendarHorizontalStrip';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize } from '../../../theme/appFontSize';
import CustomButton from '../../atoms/customButton';

interface DynamicBottomSheetProps {
    bottomSheetData?: any;
    firmName?: string;
    firmCode?: string;
    firmCity?: string;
    bottomSheetRef: React.Ref<BottomSheet>
    children: React.ReactNode
}

const DynamicBottomSheet: React.FC<DynamicBottomSheetProps> = ({
    bottomSheetData = [],
    firmName = '',
    firmCode = '',
    firmCity = '',
    bottomSheetRef,
    children

}): React.ReactElement => {

    const snapPoints = useMemo(() => ['1%', "75%"], []);

    const handleSheetChange = useCallback((index: any) => {
        console.log("handleSheetChange", index);
    }, []);


    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop {...props} />,
        []
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            enablePanDownToClose={true}
        >



            <BottomSheetScrollView contentContainerStyle={{ backgroundColor: "white", }} showsVerticalScrollIndicator={false}>
            {children}

                {/* <View style={{marginBottom:10}}>

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


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 ,marginTop:20}}>
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 ,marginTop:-10}}>
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







                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 ,marginTop:20}}>
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



                </View> */}
            </BottomSheetScrollView>
        </BottomSheet>

    )
}

export default DynamicBottomSheet;

