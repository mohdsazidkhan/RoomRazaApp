import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PaperButton from '../../components/atoms/paperButton';
import SwitchButton from '../switch';
import Snack from '../../components/Snack/Snack';

import { AppColor } from '../../theme/appColor';
import { AppFonts } from '../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../theme/appFontSize';
import CustomIcon from '../atoms/customIcon';
import { API_BASE_URL, API_HEADERS } from '../../routes/context/GlobalUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface DateTimeRangePickerProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (
    start: Date,
    end: Date,
    breakStart: Date,
    breakEnd: Date,
    sameTimeAllDays: boolean,
  ) => void;
}

const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  isVisible,
  onClose,
  onConfirm,
}) => {
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [breakStartTime, setBreakStartTime] = useState<Date>(new Date());
  const [breakEndTime, setBreakEndTime] = useState<Date>(new Date());
  const [sameTimeAllDays, setSameTimeAllDays] = useState(false);
  const [isBreakModalVisible, setIsBreakModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBreakSubmitClicked, setIsBreakSubmitClicked] = useState(false);
  const [breakTimes, setBreakTimes] = useState<{ start: Date; end: Date }[]>([]);

  breakTimes.map(item => {
    console.log(item);
  });


  const handleConfirm = () => {
    console.log('sgdhsfhsdghfgdfha')
    onConfirm(
      startTime,
      endTime,
      breakStartTime,
      breakEndTime,
      sameTimeAllDays,
    );
    onClose();
  };

  const handleSetBreakTiming = () => {
    setIsBreakModalVisible(true);
  };

  const handleBreakModalClose = () => {
    setIsBreakModalVisible(false);
    setIsBreakSubmitClicked(true);
  };

  const toggleSwitch = () => setIsOpen(!isOpen);

  const formatTime = date => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const handleEditTime = () => {
    setIsBreakModalVisible(true);
  };

  const handleAddBreakTiming = () => {
    // Add a new empty break timing to breakTimes array
    setBreakTimes([...breakTimes, { start: new Date(), end: new Date() }]);
    // Open the break modal
    setIsBreakModalVisible(true);
  };

  const handleSaveBreakTiming = () => {
    // Add the current break timing to breakTimes array
    setBreakTimes([...breakTimes, { start: breakStartTime, end: breakEndTime }]);
    // Close the modal
    handleBreakModalClose();
  };





  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.datePickerContainer}>
              <DatePicker
                style={styles.datePicker}
                date={startTime}
                mode="time"
                onDateChange={time => setStartTime(time)}
              />
              <DatePicker
                style={styles.datePicker}
                date={endTime}
                mode="time"
                onDateChange={time => setEndTime(time)}
              />
            </View>
            {/* set same time for all other day */}
            <View style={styles.setTimeForAllContainer}>
              <Text style={styles.setSameTimeForAllText}>
                Set same time for all other days?
              </Text>
              <SwitchButton
                switchValue={isOpen}
                switchValueChange={toggleSwitch}
              />
            </View>

            {/* Break Timings */}
            <Text style={styles.breakTime}>Break Timings</Text>
            <Pressable style={styles.breakButton}>
              {isBreakSubmitClicked ? (
                <>
                  <Text style={styles.breakTimeFont}>{`${formatTime(
                    breakStartTime,
                  )} - ${formatTime(breakEndTime)}`}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <MaterialIcon
                      style={{ paddingRight: 6 }}
                      color={AppColor.LIGHT_GRAY}
                      size={20}
                      name="edit"
                      onPress={handleEditTime}
                    />
                    <MaterialIcon
                      color={AppColor.RED_25}
                      size={20}
                      name="delete"
                    />
                  </View>
                </>
              ) : (
                <>
                  <Text
                    onPress={handleSetBreakTiming}
                    style={styles.breakButtonText}>
                    Set your break timings here
                  </Text>
                  <Pressable onPress={handleSetBreakTiming}>
                    <CustomIcon

                      iconName='chevron-right' />
                  </Pressable>
                  {/* <Icon
                    onPress={handleSetBreakTiming} 
                    color={AppColor.SONIC_SILVER}
                    size={20}
                    name="arrow-forward"
                  /> */}
                </>
              )}
            </Pressable>
            {isBreakSubmitClicked && (
              <Text
                onPress={handleAddBreakTiming}
                style={[
                  styles.breakButtonText,
                  { textAlign: 'left', paddingLeft: 20 },
                ]}>
                + Add multiple break timings.
              </Text>
            )}

            <View style={{ marginHorizontal: 20 }}>
              <PaperButton
                buttonName={'SAVE'}
                buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                uppercase={true}
                topMargin={getCustomSize(20)}
                onPress={handleConfirm}
              />
            </View>
          </View>
        </View>
      </Modal>
      {isBreakModalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isBreakModalVisible}
          onRequestClose={handleBreakModalClose}>
          <View style={styles.breakModalView}>
            <Text style={styles.breakModalTitle}>Set Break Timing</Text>
            <View style={styles.breakDatePickerContainer}>
              <DatePicker
                style={styles.breakDatePicker}
                date={breakStartTime}
                mode="time"
                onDateChange={time => {
                  setBreakStartTime(time);
                }}
                minimumDate={startTime} // Set minimum date to start time
                maximumDate={endTime} // Set maximum date to end time
              />
              <DatePicker
                style={styles.breakDatePicker}
                date={breakEndTime}
                mode="time"
                onDateChange={time => setBreakEndTime(time)}
                minimumDate={startTime} // Set minimum date to start time
                maximumDate={endTime} // Set maximum date to end time
              />
            </View>
            {/* set same time for all other day */}
            <View style={styles.setTimeForAllContainer}>
              <Text style={styles.setSameTimeForAllText}>
                Set same break timings for all other days?
              </Text>
              <SwitchButton
                switchValue={isOpen}
                switchValueChange={toggleSwitch}
              />
            </View>
            <PaperButton
              buttonName={'SAVE'}
              buttonColor={AppColor.DEEP_SPACE_SPARKLE}
              uppercase={true}
              topMargin={getCustomSize(10)}
              onPress={() => {
                handleBreakModalClose();
                handleSaveBreakTiming();
              }}
            />
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 30,
    // alignItems: 'center',
    elevation: 5,
  },
  setTimeForAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  setSameTimeForAllText: {
    fontFamily: AppFonts.MontserratMedium,
    fontSize: AppFontSize.FontsSize_12,
    flex: 1,
    // marginRight: 4,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  datePicker: {
    flex: 1,
    marginRight: 10,
  },
  breakButton: {
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#rgba(0, 120, 253, 0.05)',
    height: 60,
  },
  breakButtonText: {
    color: AppColor.LIGHT_BLUE,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: AppFontSize.FontsSize_14,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  breakModalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  breakModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  breakDatePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  breakDatePicker: {
    flex: 1,
    marginRight: 10,
  },
  breakConfirmButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
  },
  breakTime: {
    fontFamily: AppFonts.MontserratMedium,
    fontSize: AppFontSize.FontsSize_16,
    textAlign: 'center',
    color: AppColor.EERIE_BLACK,
  },
  breakTimeFont: {
    fontFamily: AppFonts.MontserratMedium,
    fontSize: AppFontSize.FontsSize_14,
    color: AppColor.EERIE_BLACK,
  },
});

export default DateTimeRangePicker;
