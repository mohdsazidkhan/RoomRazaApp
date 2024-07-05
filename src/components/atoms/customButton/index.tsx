import * as React from 'react';
import { Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppColor } from '../../../theme/appColor';
import Styles from './styles';
import { getCustomSize } from '../../../theme/appFontSize';

interface CustomButtonProps {
    btnTitle: string;
    handlePress?: () => void;
    largeButton?: boolean
    backgroundColor?: string
    textColor?: string
    buttonHeight?: number
    borderRadius?: number
    borderColor?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
    btnTitle = '',
    handlePress,
    largeButton = true,
    backgroundColor = AppColor.WHITE_COLOR,
    textColor = AppColor.AZURE,
    buttonHeight = getCustomSize(45),
    borderRadius = 10,
    borderColor = AppColor.WHITE_COLOR
}): React.ReactElement => {
    return (
        <LinearGradient
            colors={[AppColor.WHITE_COLOR, AppColor.WHITE_COLOR]}
            locations={[0.22, 0.8]}
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={Styles.statusBarContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>

            <Pressable
                style={{
                    height: buttonHeight,
                    width: largeButton ? '100%' : '50%',
                    borderColor: borderColor,
                    borderWidth: 1,
                    borderRadius: borderRadius,
                    justifyContent: 'center',
                    backgroundColor: backgroundColor,
                    paddingHorizontal: getCustomSize(20)
                }}
                onPress={handlePress}>
                <Text style={{ ...Styles.buttonText, color: textColor }}>{btnTitle}</Text>
            </Pressable>
        </LinearGradient >
    );
};

export default CustomButton;