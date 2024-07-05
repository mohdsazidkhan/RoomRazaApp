import { KeyboardTypeOptions, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AppColor } from '../../../theme/appColor'
import { KeyboardType } from 'react-native'
import { AppFonts } from '../../../theme/appFont'
import { AppFontSize } from '../../../theme/appFontSize'
// import { AppFonts } from '../../../theme/appFont'
// import { AppFonts } from '../../../theme/appFonts'
interface InputProps {
    labelValue: string
    onChangeText?: (text: string) => void
    topMargin?: number
    KeyboardType?: KeyboardType
    multiline?: boolean
    maxlength?: number,
    numberOfLines?: number
    placeholder?: string
    borderStyle?: string
    leftText?: string
    backgroundColor?: string
    isEditable?: boolean
    borderRadius?: number
}

export default function CustomTextInput(params: InputProps) {
    const { onChangeText, labelValue, topMargin, KeyboardType, multiline, maxlength, numberOfLines, placeholder, borderStyle, leftText, backgroundColor = AppColor.WHITE_COLOR, isEditable = true, borderRadius = 15 } = params;

    return (
        <View style={{
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
            marginTop: topMargin ? topMargin : 0,
            flex: leftText ? 1 : 0,
            flexDirection: 'row',
            borderColor: borderStyle == 'dark' ? '#16473280' : '#C0C8C4',
            borderWidth: 1,
            paddingHorizontal: 15,

        }}>

            {
                leftText &&

                <>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>{leftText.toString()}</Text>
                    <View style={{ width: 1, backgroundColor: '#C0C8C4', marginHorizontal: 10, marginVertical: 5 }} />
                </>
            }


            <TextInput
                pointerEvents='none'
                multiline={multiline ? true : false}
                maxLength={maxlength}
                numberOfLines={numberOfLines}
                onChangeText={(text) => { onChangeText && onChangeText(text) }}
                value={labelValue}
                placeholder={placeholder}
                selectionColor={AppColor.MSU_GREEN}
                keyboardType={KeyboardType ? KeyboardType : 'default'}
                autoCapitalize='none'
                returnKeyType='done'
                style={{ flex: 1, fontFamily: AppFonts.FontsRegular }}
                editable={isEditable}
                placeholderTextColor={AppColor.TAUPE_GRAY}
                textAlignVertical='top'

            />

        </View>

    )
}
