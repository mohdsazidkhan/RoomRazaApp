import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar';
import HeaderWithBackButton from '../../../components/atoms/header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/screen';
import { getCustomSize } from '../../../theme/appFontSize';
import { AppColor } from '../../../theme/appColor';
import SwitchButton from '../../../components/atoms/switch';
import { styles } from './styles';
import { Modal, Portal, RadioButton } from 'react-native-paper';
import DividerView from '../../../components/atoms/dividerView';
import PaperTextInput from '../../../components/molecules/paperTextInput';
import CustomButton from '../../../components/atoms/customButton';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../routes/context/Auth';
import CommonModal from '../../../components/organisms/modal/commonModal';

type Props = NativeStackScreenProps<RootStackParamList, 'PersonalInformationScreen'>;

export default function PersonalInformationScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const { profileData, loading } = useAuth();
    console.log('profileData----------->',profileData)

    const [submitModalVisibility, setSubmitModalVisibility] = useState(false);

    const {
        genderName,
        isAvailableForHome,
        email,
        phoneNumber,
        formData,
    } = useMemo(() => {
        let email = '';
        let phoneNumber = '';
        let genderName = 'Male';
        let isAvailableForHome = false;
        let formData = {
            firstName: '',
            lastName: '',
            nickName: '',
            employeeType: '',
            shift: '',
            countryName: '',
            stateName: '',
            cityName: '',
            zipCode: '',
            houseNo: '',
            addressLine1: '',
            addressLine2: '',
            landmark: '',
            nationality: '',
        };

        if (profileData) {
            const emailContact = profileData.contacts.find(contact => contact.contactTypeName === 'Email');
            const phoneNumberContact = profileData.contacts.find(contact => contact.contactTypeName === 'PhoneNumber');

            if (emailContact) {
                email = emailContact.contactValue;
            }

            if (phoneNumberContact) {
                phoneNumber = phoneNumberContact.contactValue;
            }

            genderName = profileData.genderName;
            isAvailableForHome = profileData.isAvailableForHome;
            formData = {
                firstName: profileData.firstName || '',
                lastName: profileData.lastName || '',
                nickName: profileData.nickName || '',
                employeeType: profileData.employeeTypeName || '',
                shift: profileData.workingHours[0]?.shiftName || '',
                countryName: profileData.addresses[0]?.countryName || '',
                stateName: profileData.addresses[0]?.stateName || '',
                cityName: profileData.addresses[0]?.cityName || '',
                zipCode: profileData.addresses[0]?.zipcode || '',
                houseNo: profileData.addresses[0]?.houseNo || '',
                addressLine1: profileData.addresses[0]?.addressLine1 || '',
                addressLine2: profileData.addresses[0]?.addressLine2 || '',
                landmark: profileData.addresses[0]?.landmark || '',
                nationality: profileData.nationality === 1 ? 'India' : 'Other' || '',
            };
        }

        return { genderName, isAvailableForHome, email, phoneNumber, formData };
    }, [profileData]);

    const [gender, setGender] = useState(genderName);

    const handleRadioButtonPress = (gender) => {
        setGender(gender);
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
                headerTitle={t('personalInformation')}
                backHandle={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerView}>
                        <Text style={styles.headerSwitchText}>{t('Is available for home?')}</Text>
                        <View style={styles.switchView}>
                            <SwitchButton
                                switchValue={isAvailableForHome}
                            />
                            <Text style={styles.switchValueText}>
                                {isAvailableForHome ? 'Yes' : 'No'}
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.genderTitle}>{t('selectGender')}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.radioButtonView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    disabled={true}
                                    status={gender === 'Male' ? 'checked' : 'unchecked'}
                                    onPress={() => handleRadioButtonPress('Male')}
                                    color={AppColor.DEEP_SPACE_SPARKLE}
                                />
                                <Text style={styles.radioButtonText}>Male</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    disabled={true}
                                    status={gender === 'Female' ? 'checked' : 'unchecked'}
                                    onPress={() => handleRadioButtonPress('Female')}
                                    color={AppColor.DEEP_SPACE_SPARKLE}
                                />
                                <Text style={styles.radioButtonText}>Female</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    disabled={true}
                                    status={gender === 'Other' ? 'checked' : 'unchecked'}
                                    onPress={() => handleRadioButtonPress('Other')}
                                    color={AppColor.DEEP_SPACE_SPARKLE}
                                />
                                <Text style={styles.radioButtonText}>Other</Text>
                            </View>
                        </View>
                    </View>
                    <DividerView />

                    <PaperTextInput
                        isEditable={false}
                        label={t('firstName')}
                        labelValue={formData?.firstName}
                        topMargin={getCustomSize(20)}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label={t('lastName')}
                        topMargin={getCustomSize(20)}
                        labelValue={formData.lastName}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label={t('nickName')}
                        topMargin={getCustomSize(20)}
                        labelValue={formData.nickName}
                    />

                    <View style={{ marginTop: getCustomSize(20) }}>
                        <PaperTextInput
                            isEditable={false}
                            label={t('contactNumber')}
                            topMargin={getCustomSize(20)}
                            labelValue={phoneNumber}
                        />
                    </View>

                    <PaperTextInput
                        isEditable={false}
                        label={t('emailId')}
                        topMargin={getCustomSize(20)}
                        labelValue={email}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label={t('employeeType')}
                        topMargin={getCustomSize(20)}
                        labelValue={formData.employeeType}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label={t('shift')}
                        topMargin={getCustomSize(20)}
                        labelValue={formData.shift}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label={t('houseBuildingNo')}
                        topMargin={getCustomSize(20)}
                        labelValue={formData.houseNo}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label={t('enterAddressLine1')}
                        topMargin={getCustomSize(20)}
                        labelValue={formData.addressLine1}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label={t('enterAddressLine2')}
                        topMargin={getCustomSize(20)}
                        labelValue={formData.addressLine2}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label="Landmark"
                        topMargin={getCustomSize(20)}
                        labelValue={formData.landmark}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label="Nationality"
                        topMargin={getCustomSize(20)}
                        labelValue={formData.nationality}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label="Country Name"
                        topMargin={getCustomSize(20)}
                        labelValue={formData.countryName}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label="State Name"
                        topMargin={getCustomSize(20)}
                        labelValue={formData.stateName}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label="City Name"
                        topMargin={getCustomSize(20)}
                        labelValue={formData.cityName}
                    />

                    <PaperTextInput
                        isEditable={false}
                        label="Zip Code"
                        topMargin={getCustomSize(20)}
                        labelValue={formData.zipCode}
                    />
                </View>
            </ScrollView>

            <Portal>
                <Modal
                    visible={submitModalVisibility}
                    dismissable={true}
                    onDismiss={() => setSubmitModalVisibility(false)}
                    contentContainerStyle={styles.loaderModalContainer}
                    style={{ justifyContent: 'center' }}
                >
                    <CommonModal>
                        <View style={styles.modalView}>
                            <Text style={styles.modalDescriptionText}>{t('yourRequestSentSALONAdmin')}</Text>
                            <View style={styles.modalButtonView}>
                                <View style={{ flex: 1 }} />
                                <View style={styles.modalButtonSubView}>
                                    <CustomButton
                                        btnTitle={t('ok')}
                                        largeButton={false}
                                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                        textColor={AppColor.WHITE_COLOR}
                                        handlePress={() => { setSubmitModalVisibility(false); }}
                                    />
                                </View>
                            </View>
                        </View>
                    </CommonModal>
                </Modal>
            </Portal>
        </SafeAreaWithStatusBar>
    );
}
