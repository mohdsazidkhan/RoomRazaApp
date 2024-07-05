import React, { useState } from 'react';
import { View, Text, ScrollView, Modal, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../routes/screen';
import { useTranslation } from 'react-i18next';
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar';
import HeaderWithBackButton from '../../../../components/atoms/header';
import DividerView from '../../../../components/atoms/dividerView';
import CustomButton from '../../../../components/atoms/customButton';
import { AppColor } from '../../../../theme/appColor';
import BussinessHourCard from '../../../../components/businessHourCard';
import { styles } from './styles';
import DateTimeRangePicker from '../../../../components/dateTimeRangePicker';
import { useAuth } from '../../../../routes/context/Auth';

type Props = NativeStackScreenProps<
    RootStackParamList,
    'SettingWorkingHourScreen'
>;

export default function SettingWorkingHourScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const { profileData } = useAuth(); // Get profileData from context

    const [isDateTimeRangePickerVisible, setIsDateTimeRangePickerVisible] =
        useState(false);
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

    const saveBusinessHours = () => {
        // Your logic to save business hours
    };

    const handleForwardArrowPress = (index: number) => {
        setSelectedDayIndex(index);
        setIsDateTimeRangePickerVisible(true);
    };

    const handleCloseDateTimeRangePicker = () => {
        setIsDateTimeRangePickerVisible(false);
    };
    if (profileData== null) {
        return (
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
        );
    }
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('settingWorkingHours')}
                backHandle={() => navigation.goBack()}
            />

            <ScrollView>
                <View style={styles.container}>
                    {profileData?.workingHours?.map((item, index) => (
                        <React.Fragment key={index}>
                            <BussinessHourCard
                                day={item?.workingDayName}
                                isOpen={item?.isWorking}
                                time={[item?.startTime, item?.endTime]}
                                onForwardArrowPress={() => handleForwardArrowPress(index)}
                            />
                            <DividerView />
                        </React.Fragment>
                    ))}
                </View>
            </ScrollView>
            <DateTimeRangePicker
                isVisible={isDateTimeRangePickerVisible}
                onClose={handleCloseDateTimeRangePicker}
            />
        </SafeAreaWithStatusBar>
    );
}
