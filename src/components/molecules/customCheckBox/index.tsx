import { View, Text } from "react-native";
import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { AppColor } from "../../../theme/appColor";
import { getCustomSize } from "../../../theme/appFontSize";



interface CustomCheckBoxProps {
    item?: any;
    themeColor?: string;

    onValueChange?: () => void;

}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
    item,
    themeColor,
    onValueChange

}): React.ReactElement => {

    return (
        <View>
            <View style={{ paddingVertical: getCustomSize(10), alignItems: 'center', marginLeft: getCustomSize(10) }}>
                <CheckBox
                    disabled={false}
                    value={item}
                    // value={true}
                    tintColors={{ true: themeColor }}
                    onValueChange={onValueChange}
                />

            </View>
        </View >


    );
};

export default CustomCheckBox;
