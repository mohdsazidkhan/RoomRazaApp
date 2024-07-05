import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, Pressable, View } from 'react-native';
import { AppColor } from '../../../theme/appColor';

interface DividerViewProps {
    backgroundColor?: string;
    marginVertical?: number
}

const DividerView: React.FC<DividerViewProps> = ({
    backgroundColor = AppColor.CHINESE_WHITE,
    marginVertical = 10
}): React.ReactElement => {
    return (
        <View style={{ backgroundColor: backgroundColor, height: 1 ,marginVertical:marginVertical}} />
    );
};
export default DividerView;