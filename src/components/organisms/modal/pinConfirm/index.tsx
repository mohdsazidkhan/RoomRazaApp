import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SvgImagePath } from '../../../../assets/helper/imagePath';
import { styles } from './styles';

interface PinConfirmProps {
    title: string
    description: string
    confirmText: string
    confirmPress: () => void
}

const PinConfirmModal: React.FC<PinConfirmProps> = ({
    title,
    description,
    confirmText,
    confirmPress,
}): React.ReactElement => {
    return (
        <View >
            <View style={styles.confirmView}>
                <SvgImagePath.ConfirmCheck />
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
            <View style={styles.confirmTextView}>
                <Pressable
                    style={{ alignItems: 'center' }}
                    onPress={confirmPress}>
                    <Text style={styles.confirmText}>{confirmText}</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default PinConfirmModal;