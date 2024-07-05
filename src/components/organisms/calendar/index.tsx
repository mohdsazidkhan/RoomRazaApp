import * as React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Styles } from './styles';
import { getCustomSize } from '../../../theme/appFontSize';
import { AppColor } from '../../../theme/appColor';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';
import { AppFonts } from '../../../theme/appFont';

interface CustomCalendarProps {
    data?: any;
    value?: any;
    isFocus?: boolean;
    onFocus?: boolean;
    setValue?: any;
    placeHolder?: string;

}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
    data = [],
    value = '',
    isFocus = false,
    onFocus = true,
    setValue = '',
    placeHolder = ''


}): React.ReactElement => {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',

        }}>
            <Calendar
                style={{ backgroundColor: AppColor.DEEP_SPACE_SPARKLE, borderRadius: getCustomSize(10)}}
                enableSwipeMonths={true}
            
                theme={{
                    // calendarBackground: AppColor.DEEP_SPACE_SPARKLE,
                    // todayTextColor:AppColor.WHITE_COLOR,
                    // selectedDayBackgroundColor: '#00adf5',

                    backgroundColor: '#ffffff',
                    calendarBackground: AppColor.DEEP_SPACE_SPARKLE,
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#ffffff',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor:AppColor.WHITE_COLOR,
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: AppColor.WHITE_COLOR,
                    indicatorColor: 'blue',
                    textDayFontFamily: AppFonts.FontsMedium,
                    textMonthFontFamily: AppFonts.FontsMedium,
                    textDayHeaderFontFamily: AppFonts.FontsMedium,
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16


                }}


            />
        </View>
    );
};

export default CustomCalendar;