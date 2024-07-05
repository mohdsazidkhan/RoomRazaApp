import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SvgImagePath } from '../../../../assets/helper/imagePath';
import { styles } from './styles';

interface CommonModalProps {
    // title: string
    // description: string
    // confirmText: string
    // confirmPress: () => void
    children: React.ReactNode
}

const CommonModal: React.FC<CommonModalProps> = ({
    // title,
    // description,
    // confirmText,
    // confirmPress,
    children
}): React.ReactElement => {
    return (
        <View >
            {children}
        </View>
    );
};
export default CommonModal;