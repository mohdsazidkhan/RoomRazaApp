import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { getCustomSize } from '../../../theme/appFontSize';

interface InputProps {
    labelValue: string;
    onChangeText?: (text: string) => void;
    topMargin?: number;
    keyboardType?: string;
    multiline?: boolean;
    maxLength?: number;
    numberOfLines?: number;
    placeholder?: string;
    isEditable?: boolean;
    backgroundColor?: string;
    label: string;
    isPassword: boolean;
    height: number;
    error: boolean;
    onFocus?: () => void
}

export default function PaperTextInput(props: InputProps) {
    const {
        onChangeText,
        labelValue = '',
        topMargin,
        keyboardType,
        multiline,
        maxLength,
        numberOfLines,
        placeholder,
        isEditable = true,
        backgroundColor = AppColor.WHITE_COLOR,
        label,
        isPassword,
        error,
        height = 60,
        onFocus,
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={{
            borderRadius: getCustomSize(15),
            backgroundColor: backgroundColor,
            marginTop: topMargin ? topMargin : 0,
            flexDirection: 'row',
        }}>
            <TextInput
                mode='outlined'
                multiline={multiline ? true : false}
                maxLength={maxLength}
                numberOfLines={numberOfLines}
                onChangeText={(text) => { onChangeText && onChangeText(text) }}
                value={labelValue.toString()}
                error={error}
                onFocus={onFocus}
                editable={isEditable}
                placeholder={placeholder}
                selectionColor={AppColor.MSU_GREEN}
                keyboardType={keyboardType ? keyboardType : 'default'}
                autoCapitalize='none'
                returnKeyType='done'
                style={{ flex: 1, height: getCustomSize(height), padding: 0, backgroundColor: AppColor.WHITE_COLOR, borderRadius: getCustomSize(10), fontFamily: AppFonts.FontsMedium }}
                underlineColor='transparent'
                activeUnderlineColor='transparent'
                label={<Text style={{ fontFamily: AppFonts.FontsRegular }}>{label}</Text>}
                secureTextEntry={isPassword && !showPassword} // Toggle secureTextEntry based on showPassword state
                outlineStyle={{ borderColor: AppColor.DEEP_SPACE_SPARKLE, borderRadius: getCustomSize(10), borderWidth: 0.5 }}
                theme={{ colors: { primary: AppColor.DEEP_SPACE_SPARKLE } }}
                contentStyle={{ fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR }}
            />
            {isPassword && ( // Render show/hide button only if it's a password field
                <TouchableOpacity
                    style={{ position: 'absolute', right: 0, top: 0, bottom: 0, justifyContent: 'center', paddingHorizontal: 10 }}
                    onPress={() => setShowPassword(!showPassword)}>
                    <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.MSU_GREEN }}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
