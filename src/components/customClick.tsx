import React from 'react'
import { Button } from 'react-native-paper'
import { AppColor } from '../theme/appColor'
import { AppFonts } from '../theme/appFont'
import { AppFontSize, getCustomSize } from '../theme/appFontSize'
import { View, Text, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface CustomClickProps {
    title?: string
    visibility?: boolean
    handlePress: () => void
}

export default function CustomClick(Data: CustomClickProps) {
    const {
        title = 'Clockin',
        visibility = true,
        handlePress

    } = Data;

    return (
        visibility &&
        <Pressable
            onPress={handlePress}>

            <Text style={{
                color: AppColor.AZURE,
                fontSize: getCustomSize(AppFontSize.FontsSize_18),
                fontFamily: AppFonts.FontsMedium
            }}>Click here to view {title}</Text>
        </Pressable>

    )
}
