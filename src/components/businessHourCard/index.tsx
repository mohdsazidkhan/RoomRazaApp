import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SwitchButton from '../switch';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColor } from '../../theme/appColor';
import CustomIcon from '../atoms/customIcon';

interface BusinessHourItemProps {
  day: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  time?: string;
  onForwardArrowPress: () => void;
}

const BussinessHourCard: React.FC<BusinessHourItemProps> = ({
  day,
  isOpen,
  setOpen,
  time,
  onForwardArrowPress,
}) => {
  // const toggleSwitch = () => setOpen(!isOpen);
  const toggleSwitch = () => setOpen(!isOpen);

  console.log('time', time)

  const formatTime = (time24) => {
    const [hour, minute] = time24.split(':');
    let hour12 = hour % 12 || 12; // Convert hour to 12-hour format
    let period = hour < 12 ? 'AM' : 'PM'; // Determine AM/PM
    return `${hour12}:${minute} ${period}`;
  };

  return (
    <View style={styles.dayMenuView}>
      <SwitchButton switchValue={isOpen} />
      <View style={styles.dayNameTextView}>
        <Text style={styles.dayNameText}>{day}</Text>
        <Text style={styles.dayStatus}>
          {isOpen ? `${formatTime(time[0])} - ${formatTime(time[1])}` : 'Closed'}
        </Text>
        {/* <Pressable onPress={onForwardArrowPress}>
          <CustomIcon

            iconName='chevron-right' />
        </Pressable> */}
      </View>
    </View>
  );
};

export default BussinessHourCard;
