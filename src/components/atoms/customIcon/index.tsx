import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, Pressable, View } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface CustomIconProps {
    iconName?: string;
    iconColor?: string;
    iconSize?: number
}

const CustomIcon: React.FC<CustomIconProps> = ({
    iconName = '',
    iconColor,
    iconSize = 25
}): React.ReactElement => {
    return (
        <Icon color={iconColor} size={iconSize} name={iconName} />
    );
};
export default CustomIcon;