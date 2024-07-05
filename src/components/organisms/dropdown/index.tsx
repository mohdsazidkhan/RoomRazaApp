import * as React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Styles } from './styles';
import { getCustomSize } from '../../../theme/appFontSize';
import { AppColor } from '../../../theme/appColor';

interface MaterialDropdownProps {
    data?: any;
    value?: any;
    isFocus?: boolean;
    onFocus?: boolean;
    setValue?: any;
    placeHolder: string;
    topMargin: number;
    disable: boolean

}

const MaterialDropdown: React.FC<MaterialDropdownProps> = ({
    data = [],
    value = '',
    isFocus = false,
    onFocus = () => { }, // Set onFocus to an empty function if not provided
    setValue = () => { }, // Set setValue to an empty function if not provided
    placeHolder = '',
    topMargin = 10,
    disable
}): React.ReactElement => {

    return (
        <Dropdown
            style={[Styles.dropdown, { marginTop: topMargin }, isFocus && { borderColor: AppColor.DEEP_SPACE_SPARKLE }]}
            placeholderStyle={Styles.placeholderStyle}
            selectedTextStyle={Styles.selectedTextStyle}
            data={data}
            disable={disable}
            maxHeight={getCustomSize(300)}
            labelField="label"
            valueField="value"
            placeholder={placeHolder}
            value={value}
            onFocus={onFocus} // Call onFocus as a function
            onBlur={() => !onFocus} // If onBlur event should toggle focus, you should toggle onFocus state here
            onChange={item => {
                setValue(item.label, item.id) // Assuming you want to set the label of the selected item
            }}
            itemTextStyle={{ color: 'black' }}
        />
    );
};



export default MaterialDropdown;