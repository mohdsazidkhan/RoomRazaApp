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

}

const SwitchButton: React.FC<SwitchProps> = ({
    switchValue = false,
    switchValueChange,
    activeColor = AppColor.MAY_GREEN_COLOR,
    inactiveColor = AppColor.COLUMBIA_BLUE

}): React.ReactElement => {

    return (
        <View>
            <Switch
                value={switchValue}
                onValueChange={switchValueChange}
                disabled={false}
                activeText={'  '}
                inActiveText={'  '}
                circleSize={22}
                barHeight={22}
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

export default React.memo(SwitchButton);