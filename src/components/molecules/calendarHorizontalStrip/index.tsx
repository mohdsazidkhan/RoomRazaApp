import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppColor } from '../../../theme/appColor';
// import Styles from './styles';
import CalendarStrip from 'react-native-calendar-strip';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
import { AppFonts } from '../../../theme/appFont';
import CustomIcon from '../../atoms/customIcon';
import { ImagePath } from '../../../assets/helper/imagePath';

interface CalendarStripProps {
    dateSelection?: () => void;
}

const CalendarHorizontalStrip: React.FC<CalendarStripProps> = ({
    dateSelection,
}): React.ReactElement => {
    const isFocused = useIsFocused();
    return (
        <CalendarStrip
            calendarHeaderFormat='MMM, YYYY'
            selectedDate={new Date()}
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{ type: 'background', highlightColor: AppColor.WHITE_COLOR, duration: 100, }}
            style={{ height: getCustomSize(120), paddingTop: getCustomSize(20), paddingBottom: getCustomSize(10) }}
            calendarHeaderStyle={{ color: 'white', fontSize: getCustomSize(AppFontSize.FontsSize_16), fontFamily: AppFonts.FontsMedium }}
            calendarColor={'transparent'}
            dateNumberStyle={{ color: 'white', fontSize: getCustomSize(AppFontSize.FontsSize_17), fontFamily: AppFonts.FontsMedium }}
            dateNameStyle={{ color: 'white', fontSize: getCustomSize(AppFontSize.FontsSize_12), fontFamily: AppFonts.FontsRegular }}
            highlightDateNumberStyle={{ color: AppColor.DEEP_SPACE_SPARKLE }}
            highlightDateNameStyle={{ color: AppColor.DEEP_SPACE_SPARKLE }}
            disabledDateNameStyle={{ color: 'grey' }}
            disabledDateNumberStyle={{ color: 'grey' }}
            scrollable={true}
            iconContainer={{ flex: 0.1 }}
            onDateSelected={dateSelection}
            iconLeft={ImagePath.backArrow}
            iconRight={ImagePath.forwardArrow}

        />
    );
};

export default CalendarHorizontalStrip;