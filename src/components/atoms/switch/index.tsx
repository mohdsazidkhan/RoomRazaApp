import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Switch } from 'react-native-switch';
import { View } from 'react-native';
import { AppColor } from '../../../theme/appColor';


interface SwitchProps {
    switchValue?: boolean;
    switchValueChange?: () => void;
    activeColor?: string
    inactiveColor?: string
    disabled?: boolean
}

const SwitchButton: React.FC<SwitchProps> = ({
    switchValue = false,
    disabled,
    switchValueChange,
    activeColor = AppColor.MAY_GREEN_COLOR,
    inactiveColor = AppColor.PHILIPPINE_SILVER

}): React.ReactElement => {

    return (
        <View>
            <Switch
                value={switchValue}
                onValueChange={switchValueChange}
                disabled={disabled}
                activeText={'  '}
                inActiveText={'  '}
                circleSize={26}
                barHeight={26}
                circleBorderWidth={1}
                backgroundActive={activeColor}
                backgroundInactive={inactiveColor}
                circleActiveColor={AppColor.WHITE_COLOR}
                circleInActiveColor={AppColor.WHITE_COLOR}
                changeValueImmediately={true}
                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
                outerCircleStyle={{}}
                switchLeftPx={2}
                switchRightPx={2}
                switchWidthMultiplier={2.5}
                switchBorderRadius={30}
            />
        </View>
    );
};

export default SwitchButton;