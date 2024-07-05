import React from 'react';
import { Button } from 'react-native-paper';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import Styles from './styles';
import { getCustomSize } from '../../../theme/appFontSize';
import { ActivityIndicator } from 'react-native';

interface PaperButtonProps {
    buttonColor?: string;
    uppercase?: boolean;
    onPress: () => void;
    buttonName: string;
    topMargin?: number;
    isDisabled?: boolean;
    isLoading?: boolean; // New prop for activity indicator
}

export default function PaperButton(Data: PaperButtonProps) {
    const {
        buttonColor = AppColor.BLACK_COLOR,
        uppercase = false,
        onPress,
        buttonName,
        isDisabled = false,
        topMargin = getCustomSize(12),
        isLoading = false, // Default isLoading to false
    } = Data;

    return (
        <Button
            disabled={isDisabled} // Disable the button if it's disabled or if loading is true
            buttonColor={buttonColor}
            uppercase={uppercase}
            mode="contained"
            style={[Styles.container, { marginTop: topMargin }]}
            onPress={onPress}
            labelStyle={Styles.label}
            loading={isLoading} // Show activity indicator if isLoading is true
        >
            {isLoading ? ( // Show activity indicator if isLoading is true, otherwise show button name
                <ActivityIndicator size='small' color="white" />
            ) : (
                buttonName
            )}
        </Button>
    );
}
