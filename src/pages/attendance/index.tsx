import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import SafeAreaWithStatusBar from '../../components/molecules/safeAreaWithStatusBar';
import HeaderWithBackButton from '../../components/atoms/header';
import AttendanceView from '../../components/atoms/attendanceView';
import { AppColor } from '../../theme/appColor';
import { useTranslation } from 'react-i18next';
import { API_BASE_URL } from '../../routes/context/GlobalUrl';
import { styles } from './styles';
import axios from 'axios';
import { getCustomSize } from '../../theme/appFontSize';
import PaperTextInput from '../../components/molecules/paperTextInput';
import DatePicker from 'react-native-date-picker';
import PaperButton from '../../components/atoms/paperButton';

const AttendanceScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [activeComponent, setActiveComponent] = useState('checkin');
  const [eCheckIn, setECheckIn] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [datePickerOpen2, setDatePickerOpen2] = useState(false);
  const [dob, setDOB] = useState('');
  const [dob2, setDOB2] = useState('');
  const currentDate = new Date();


  // Format Date
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;
  
console.log(formattedDate)
  // Format Time
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;

  const fetchData = async () => {
    const url = `${API_BASE_URL}/Attendance/stylist/attendanceregister?salonReferenceId=f69ceeb6-0b53-4712-a097-d3bc52a936d8&employeeReferenceId=bffd4106-e8cc-49d4-8540-7baa02ceebb2&attendanceDate=${formattedDate}`;
    try {
      const response = await axios.get(url);
      const eCheckInValue = response?.data?.data?.eCheckIn;
      setECheckIn(eCheckInValue);
      setReferenceId(response.data?.data?.referenceId);
    } catch (error) {
      console.log('fetch api error', error)
    }
  };


  let firstDate = new Date();
  firstDate.setDate(1);

  let lastDate = new Date();
  lastDate.setMonth(lastDate.getMonth() + 1);
  lastDate.setDate(0);
  const [buttonLoad, setButtonLoad] = useState(false);

  let startDateParam = (firstDate.getMonth() + 1) + '/' + firstDate.getDate() + '/' + firstDate.getFullYear();
  let endDateParam = (lastDate.getMonth() + 1) + '/' + lastDate.getDate() + '/' + lastDate.getFullYear();


  const fetchAllData = async () => {
    const url = `${API_BASE_URL}/Attendance/stylist/attendancerecord?salonReferenceId=f69ceeb6-0b53-4712-a097-d3bc52a936d8&employeeReferenceId=bffd4106-e8cc-49d4-8540-7baa02ceebb2&fromDate=${startDateParam}&toDate=${endDateParam}`;
    setButtonLoad(true)
    try {
      const response = await axios.get(url);
      const data = response?.data?.data;
      console.log('fetch all data', data)
      const attendanceDates = data.map(item => {
        const formattedDatee = formatDatee(new Date(item.attendanceDate));// Debugging line
        return {
          ...item,
          formattedDatee,
          isAbsent: item.isAbsent ? '1' : '0',
          isHalfDay: item.isHalfDay ? '1' : '0',
          isPresent: item.isPresent ? '1' : '0',
        };
      });
      setDates(attendanceDates);
      setButtonLoad(false)

    } catch (error) {
      setButtonLoad(false)
      console.log('fetch api error', error)
    }
  };

  useEffect(() => {
    fetchAllData()
  }, [])
  const [dates, setDates] = useState([]);
  console.log
  ('dates----------',dates)
  const formatDatee = (date) => {
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const fetchDate = async () => {
    const url = `${API_BASE_URL}/Attendance/stylist/attendancerecord?salonReferenceId=f69ceeb6-0b53-4712-a097-d3bc52a936d8&employeeReferenceId=bffd4106-e8cc-49d4-8540-7baa02ceebb2&fromDate=${dob}&toDate=${dob2}`;
    setButtonLoad(true)
    try {
      const response = await axios.get(url);
      const data = response?.data?.data;
      const attendanceDates = data.map(item => {
        const formattedDatee = formatDatee(new Date(item.attendanceDate));// Debugging line
        return {
          ...item,
          formattedDatee,
          isAbsent: item.isAbsent ? '1' : '0',
          isHalfDay: item.isHalfDay ? '1' : '0',
          isPresent: item.isPresent ? '1' : '0',
        };
      });
      setDates(attendanceDates);
      setButtonLoad(false)
    } catch (error) {
      setButtonLoad(false)
      console.log('fetch api error', error)
    }
  };


  const handleAttendancePress = async (checkType) => {
    try {
      const data = {
        referenceId: activeComponent === 'checkin' ? "" : referenceId,
        salonReferenceId: "f69ceeb6-0b53-4712-a097-d3bc52a936d8",
        employeeReferenceId: "bffd4106-e8cc-49d4-8540-7baa02ceebb2",
        attendanceDate: currentDate.toISOString(),
        eCheckIn: activeComponent === 'checkin' ? currentTime : eCheckIn,
        eCheckOut: activeComponent === 'checkout' ? currentTime : "",
        createdBy: activeComponent == 'checkin' ? 1 : 0,
        createdOn: currentDate.toISOString(),
        updatedBy: activeComponent == 'checkout' ? 1 : 0,
        updatedOn: currentDate.toISOString()
      };

      console.log('attendance data----->',data)
      const apiUrl = `${API_BASE_URL}/Attendance/stylist/attendance`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (checkType === 'checkin') {
        setActiveComponent('checkout');
      } else if (checkType === 'checkout') {
        setActiveComponent('checkin');
      }

      const responseData = await response.json();
      if (activeComponent == 'checkin') {
        fetchData()
      } else {
        null
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  };



  const formatDate = dateStr => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    setDOB(`${month}/${day}/${year}`);
  };

  const formatDate2 = dateStr => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    setDOB2(`${month}/${day}/${year}`);
  };

  return (
    <SafeAreaWithStatusBar>
      {buttonLoad ? (
        <View
          style={{
            position: 'absolute',
            flex: 1,
            height: '100%',
            backgroundColor: 'black',
            zIndex: 1,
            opacity: 0.6,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : null}
      <HeaderWithBackButton
        headerTitle={t('attendanceCalendar')}
        backHandle={() => navigation.goBack()} />

      <ScrollView>
        <View style={styles.container}>

          {activeComponent === 'checkin' && (
            <AttendanceView
              gradientColorOne={AppColor.MAY_GREEN_COLOR}
              gradientColorTwo={AppColor.GREEN_LIZARD_COLOR}
              title={t('Check-in')}
              subTitle={formattedDate}
              rightText={t('click here checkin')}
              handlePress={() => handleAttendancePress('checkin')} />
          )}
          {activeComponent === 'checkout' && (
            <AttendanceView
              gradientColorOne={AppColor.MEDIUM_VERMILION_COLOR}
              gradientColorTwo={AppColor.PASTEL_ORANGE_COLOR}
              title={t('check-out')}
              subTitle={formattedDate}
              rightText={t('click Here check out')}
              handlePress={() => handleAttendancePress('checkout')} />
          )}

          <Text style={styles.checkAttendance}>{t('checkAttendance')}</Text>
          {/* <View style={{ flexDirection: 'row', backgroundColor: 'red' }}> */}
          <Pressable onPress={() => setDatePickerOpen(true)}>
            <PaperTextInput
              isEditable={false}
              label="From Date"
              labelValue={dob}
              // onFocus={() => setDatePickerOpen(true)}
              topMargin={getCustomSize(15)}
            />
          </Pressable>
          {datePickerOpen && (
            <View style={styles.datePickerContainer}>
              <DatePicker
                style={styles.datePicker}
                date={new Date()}
                focusable
                maximumDate={new Date()}
                modal
                onCancel={() => setDatePickerOpen(false)}
                cancelText="Cancel"
                onConfirm={date => {
                  // calculateAge(date);
                  formatDate(date);
                  setDatePickerOpen(false);
                }}
                confirmText="Set Date"
                open={datePickerOpen}
                mode="date"
                onDateChange={time => console.log(time)}
              />
            </View>
          )}
          <Pressable onPress={() => setDatePickerOpen2(true)}>
            <PaperTextInput
              isEditable={false}
              label="To Date"
              labelValue={dob2}
              // onFocus={() => setDatePickerOpen(true)}
              topMargin={getCustomSize(15)}
            />
          </Pressable>
          {datePickerOpen2 && (
            <View style={styles.datePickerContainer}>
              <DatePicker
                style={styles.datePicker}
                date={new Date()}
                focusable
                maximumDate={new Date()}
                modal
                onCancel={() => setDatePickerOpen2(false)}
                cancelText="Cancel"
                onConfirm={date => {
                  // calculateAge(date);
                  formatDate2(date);
                  setDatePickerOpen2(false);
                }}
                confirmText="Set Date"
                open={datePickerOpen2}
                mode="date"
                onDateChange={time => console.log(time)}
              />
            </View>
          )}


          <PaperButton
            buttonName={t('Search')}
            uppercase={true}
            buttonColor={AppColor.DEEP_SPACE_SPARKLE}
            topMargin={20}
            onPress={fetchDate}
          // isLoading={isLoading}
          />


          {dates?.length > 0 ?
            <>
              <View style={styles.targetHeading}>
                <Text style={styles.attendanceViewTitle}>Date</Text>
                <Text style={styles.attendanceSubHeading}>{t('present')}</Text>
                <Text style={styles.attendanceSubHeading}>{t('absent')}</Text>
                <Text style={styles.attendanceSubHeading}>{t('leave')}</Text>
                <Text style={styles.attendanceSubHeading}>{t('HalfDay')}</Text>

              </View>

              {dates?.map((item, index) => (
                <View style={styles.attendanceDetailView} key={index}>
                  <Text style={styles.attendanceViewTitle}>{item.formattedDatee}</Text>
                  <Text style={{ ...styles.attendanceSubHeading, color: AppColor.MAY_GREEN_COLOR }}>{item.isPresent}</Text>
                  <Text style={{ ...styles.attendanceSubHeading, color: AppColor.CINNABAR_COLOR }}>{item.isAbsent}</Text>
                  <Text style={{ ...styles.attendanceSubHeading, color: AppColor.CINNABAR_COLOR }}>{item.isAbsent}</Text>
                  <Text style={{ ...styles.attendanceSubHeading, color: AppColor.AZURE }}>{item.isHalfDay}</Text>
                </View>
              ))}

            </>
            : null}

        </View>
      </ScrollView>
    </SafeAreaWithStatusBar>
  );
};

export default AttendanceScreen;
