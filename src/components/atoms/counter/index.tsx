import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, Pressable, View } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';

interface CounterProps {
    backgroundColor?: string;
    marginVertical?: number
}

const Counter: React.FC<CounterProps> = ({
    backgroundColor = AppColor.CHINESE_WHITE,
    marginVertical = 10
}): React.ReactElement => {
    return (
        <Pressable style={{ elevation: 3, backgroundColor: AppColor.WHITE_COLOR, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 7, alignSelf: 'center',marginVertical:getCustomSize(20)}}>
            <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_17, color: AppColor.DEEP_SPACE_SPARKLE }}>ADD</Text>
        </Pressable>
    );
};
export default Counter;