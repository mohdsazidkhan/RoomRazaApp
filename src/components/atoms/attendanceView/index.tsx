import React from 'react'
import { AppColor } from '../../../theme/appColor'
import { View, Text, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SvgImagePath } from '../../../assets/helper/imagePath'
import styles from './styles'
import AnalogClock from '../../Clock'

interface AttendanceViewProps {
    title: string
    subTitle: string
    rightText: string
    gradientColorOne?: string
    gradientColorTwo?: string
    handlePress: () => void
}

export default function AttendanceView(Data: AttendanceViewProps) {
    const {
        title = 'Clockin',
        subTitle = 'Mon/ 10:00 AM',
        rightText = 'Click here to Clockin',
        gradientColorOne = AppColor.MEDIUM_VERMILION_COLOR,
        gradientColorTwo = AppColor.PASTEL_ORANGE_COLOR,
        handlePress
    } = Data;

    return (
        <Pressable style={{ height: 100, borderRadius: 10, }}
            onPress={handlePress}>
            <LinearGradient
                colors={[gradientColorOne, gradientColorTwo]}
                locations={[0.22, 0.8]}
                useAngle={true}
                angle={90}
                angleCenter={{ x: 0.5, y: 0.5 }}
                style={{ flex: 1, borderRadius: 10 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>

                <View style={styles.linearGradientView}>
                    <AnalogClock
                        clockSize={70}
                        clockBorderWidth={1}
                        clockCentreSize={5}
                        clockCentreColor={'black'}
                        hourHandColor={'black'}
                        hourHandCurved={true}
                        hourHandLength={22}
                        hourHandWidth={1}
                        hourHandOffset={0}
                        minuteHandColor={'black'}
                        minuteHandCurved={true}
                        minuteHandLength={25}
                        minuteHandWidth={1}
                        minuteHandOffset={0}
                        secondHandColor={'red'}
                        secondHandCurved={true}
                        secondHandLength={28}
                        secondHandWidth={1}
                        secondHandOffset={0}
                    />
                    <View style={styles.linearGradientTextView}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.subTitleText}>{subTitle}</Text>
                    </View>
                    <Text style={styles.rightText}>{rightText}</Text>
                </View>
            </LinearGradient>
        </Pressable>
    )
}