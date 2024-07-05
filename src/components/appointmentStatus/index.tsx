import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SvgImagePath } from '../../assets/helper/imagePath';
import styles from './styles';
import { AppColor } from '../../theme/appColor';
import { AppFonts } from '../../theme/appFont';

interface appointmentStatusProps {
  navigation: any;
  onPress: () => void;
  appointmentStatusData: any;
}

const AppointmentStatus: React.FC<appointmentStatusProps> = ({
  onPress,
  appointmentStatusData,
}) => {
  const { t } = useTranslation();
  const [selectedItems, setSelectedItems] = useState<string[]>(['all']);

  const toggleSelection = (key: string) => {
    if (key === 'all') {
      setSelectedItems(['all']);
    } else {
      const selectedIndex = selectedItems.indexOf('all');
      if (selectedIndex !== -1) {
        setSelectedItems([key]);
      } else {
        const updatedSelection = selectedItems.includes(key)
          ? selectedItems.filter(item => item !== key)
          : [...selectedItems, key];
        setSelectedItems(updatedSelection);
      }
    }
  };

  const getBackgroundColor = (itemKey: string) => {
    if (selectedItems.includes('all')) {
      return itemKey === 'all' ? AppColor.WHITE_COLOR : AppColor.WHITE_COLOR;
    }

    if (selectedItems.includes(itemKey)) {
      switch (itemKey) {
        case 'ongoing':
          return AppColor.YELLOW_25;
        case 'upcoming':
          return AppColor.BLUE_25;
        case 'completed':
          return AppColor.GREEN_25;
        case 'cancelled':
          return AppColor.RED_25;
        case 'draft':
        case 'noShow':
          return 'red';
        case 'paid':
          return 'grey';
        default:
          return 'white';
      }
    }
    return AppColor.WHITE_COLOR;
  };

  const getBorderColor = (itemKey: string) => {
    if (selectedItems.includes('all')) {
      return itemKey === 'all' ? 'grey' : AppColor.WHITE_COLOR;
    }

    if (selectedItems.includes(itemKey)) {
      switch (itemKey) {
        case 'ongoing':
          return AppColor.YELLOW_100;
        case 'upcoming':
          return AppColor.BLUE_100;
        case 'completed':
          return AppColor.GREEN_100;
        case 'cancelled':
          return AppColor.RED_100;
        case 'draft':
        case 'noShow':
          return 'red';
        case 'paid':
          '#8E8E93';
          return 'grey';
        default:
          return 'white';
      }
    }
    return AppColor.WHITE_COLOR;
  };

  const renderItem: React.FC<{ item: { key: string; text: string } }> = ({
    item,
  }) => (
    <View style={styles.appointmentView}>
      <TouchableOpacity
        style={{
          width: 66,
          height: 66,
          backgroundColor: getBackgroundColor(item.key),
          elevation: 5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          borderWidth: 1,
          borderColor: getBorderColor(item.key),
          borderStyle: selectedItems.includes(item.key) ? 'dashed' : null,
        }}
        onPress={() => toggleSelection(item.key)}>
        <SvgImagePath.allIconSvg />
      </TouchableOpacity>
      <Text
        style={[
          styles.appointmentStatusText,
          {
            fontFamily: selectedItems.includes(item.key)
              ? AppFonts.MontserratBold
              : AppFonts.MontserratMedium,
          },
        ]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={appointmentStatusData}
      renderItem={renderItem}
      keyExtractor={item => item.key}
    />
  );
};

export default AppointmentStatus;
