import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ImagePath } from '../../assets/helper/imagePath';
import IconButton from '../iconButton';
import styles from './styles';
import { AppColor } from '../../theme/appColor';
import DividerView from '../atoms/dividerView';
import CustomCheckBox from '../molecules/customCheckBox';
import { getCustomSize } from '../../theme/appFontSize';
import { AppFonts } from '../../theme/appFont';
import { AppFontSize } from '../../theme/appFontSize';
import { useTranslation } from 'react-i18next';

interface AppointmentCardProps {
  navigation: any;
  onPress: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ onPress }) => {
  const [checkboxValue, setCheckboxValue] = useState<string>('checkin');
  const { t } = useTranslation();

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.appointmentCardMainView}>
        <View>
          <Text style={styles.appointmentStatus}>Ongoing</Text>
          <Text style={styles.appointmentClientName}>Client Name</Text>
          <Text style={styles.appointmentServiceName}>Hair Coloring 1/2</Text>
          <Text style={styles.appointmentServicePlace}>@Salon</Text>
          <Text style={styles.appointmentAmtText}>
            Amount: <Text style={styles.appointmentAmtRsText}>Rs.900</Text>
          </Text>
          <Text style={styles.appointmentAmtText}>
            Status:
            <Text style={styles.appointmentStatusCurrent}>Confirmed</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <View>
            <Text style={styles.appointmentTime}> 12:15 PM - 1:45 PM</Text>
            <Text style={styles.appointmentDuration}>1h 30Min</Text>
          </View>

          <IconButton
            parentStyle={{
              width: 29,
              height: 29,
              marginLeft: 10,
              backgroundColor: AppColor.ATOMIC_TANGERINE,
              // marginTop: 10,
            }}
            childStyle={{ width: 16, height: 16 }}
            imageSource={ImagePath.call}
          />

          {/* <View style={styles.appointmentCallBg}>
              <CustomIcon
                iconColor={AppColor.WHITE_COLOR}
                iconSize={25}
                iconName="call"
              />
            </View> */}
        </View>

        {/* Assume implementation for remaining components */}
      </View>
      <DividerView marginVertical={0} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <CustomCheckBox
          themeColor={AppColor.DEEP_SPACE_SPARKLE}
          status={checkboxValue == 'checkin' && true}
          onValueChange={() => setCheckboxValue('checkin')}
        />
        <Text
          style={{
            color: AppColor.DEEP_SPACE_SPARKLE,
            fontSize: getCustomSize(AppFontSize.FontsSize_15),
            fontFamily: AppFonts.FontsRegular,
          }}>
          {t('checkIn')}
        </Text>
        <View style={styles.filterSortSubView}>
          <CustomCheckBox
            themeColor={AppColor.DEEP_SPACE_SPARKLE}
            status={checkboxValue == 'noShow' && true}
            onValueChange={() => setCheckboxValue('noShow')}
          />
          <Text
            style={{
              color: AppColor.DEEP_SPACE_SPARKLE,
              fontSize: getCustomSize(AppFontSize.FontsSize_15),
              fontFamily: AppFonts.FontsRegular,
            }}>
            {t('noShow')}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AppointmentCard;
