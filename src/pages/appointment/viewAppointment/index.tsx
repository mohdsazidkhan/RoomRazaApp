import { View, Text, Pressable, Image, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
import DividerView from '../../../components/atoms/dividerView';
import CustomIcon from '../../../components/atoms/customIcon';
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath';
import { styles } from './styles';
import CustomButton from '../../../components/atoms/customButton';
import CustomTextInput from '../../../components/molecules/customTextInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/screen';
import DynamicBottomSheet from '../../../components/molecules/bottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import OtpComponent from '../../../components/organisms/bottomSheet/otp';
import ConsentRequiredComponent from '../../../components/organisms/bottomSheet/consent';
import { Portal, RadioButton } from 'react-native-paper';
import CommonModal from '../../../components/organisms/modal/commonModal';
import CustomClick from '../../../components/customClick';
import axios from 'axios';
import { API_BASE_URL } from '../../../routes/context/GlobalUrl';
import { ActivityIndicator } from 'react-native';
import MaterialDropdown from '../../../components/organisms/dropdown';
import PaperButton from '../../../components/atoms/paperButton';


type Props = NativeStackScreenProps<RootStackParamList, 'ViewAppointmentScreen'>;

export default function ViewAppointMentScreen({ navigation, route }: Props) {
    const { appointment } = route.params || {};
    // console.log('appointment.serviceStatusText', appointment.serviceStatusText)
    const formatTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;

        return `${hours}:${minutesStr} ${ampm}`;
    };


    const formattedStartTime = formatTime(appointment.timeOfService);
    const formattedEndTime = formatTime(appointment.endTimeOfService);

    const bottomSheetOtpRef = useRef<BottomSheet>(null);
    const bottomSheetConsentRef = useRef<BottomSheet>(null);
    const [timePendingModal, setTimePendingModal] = useState(false)
    const [timeExceedModal, setTimeExceedModal] = useState(false)
    const [imageUploadModal, setImageUploadModal] = useState(false)
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItemsDD, setSelectedItemsDD] = useState([]);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [fullNames, setFullNames] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [selectedStations, setSelectedStations] = useState([]);
    const [Stations, setStations] = useState([]);
    const [buttonLoad, setButtonLoad] = useState(false);
    const [isFirstButton, setIsFirstButton] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState(null);
    const [checked, setChecked] = useState('first');
    
    const fetchAllData = async () => {
        const url = `${API_BASE_URL}/Client/F69CEEB6-0B53-4712-A097-D3BC52A936D8/clients/${appointment.clientReferenceId}`;
        setButtonLoad(true);
        try {
            const response = await axios.get(url);
            const data = response?.data?.data;
            setUserData(data);
            setButtonLoad(false);
        } catch (error) {
            setButtonLoad(false);
            console.log('fetch api error', error);
        }
    };
    useEffect(() => {
        fetchAllData();
    }, []);


    const parseTime = (timeString) => {
        const [time, modifier] = timeString.split(' ');
        let [hours, minutes] = time.split(':').map(Number);

        if (modifier === 'PM' && hours !== 12) {
            hours += 12;
        }
        if (modifier === 'AM' && hours === 12) {
            hours = 0;
        }

        return { hours, minutes };
    };

    const calculateDifferenceInMinutes = (startTime, endTime) => {
        const start = parseTime(startTime);
        const end = parseTime(endTime);

        const startDate = new Date(2024, 5, 3, start.hours, start.minutes);
        const endDate = new Date(2024, 5, 3, end.hours, end.minutes);

        const difference = (endDate - startDate) / (1000 * 60); // difference in minutes
        return difference;
    };

    const differenceInMinutes = calculateDifferenceInMinutes(formattedStartTime, formattedEndTime);



    const openBottomSheetStylist = () => {
        if (bottomSheetOtpRef.current) {
            bottomSheetOtpRef.current.expand()
        }
    }

    const openBottomSheetConsent = () => {
        if (bottomSheetConsentRef.current) {
            bottomSheetConsentRef.current.expand()
        }
    }

    const hideContactValue = (contactValue) => {
        if (contactValue && contactValue.length > 7) {
            const countryCode = contactValue.slice(0, 3);
            const lastDigits = contactValue.slice(-4);
            return `+91${countryCode}-XXXXXX${lastDigits}`;
        }
        return contactValue;
    };

    const hideEmail = (email) => {
        if (email) {
            const [username, domain] = email.split('@');
            const hiddenUsername = username.slice(0, 3) + 'XXXXX';
            return `${hiddenUsername}@${domain}`;
        }
        return email;
    };
    const [services, setServices] = useState([]);


    const fetchData = async () => {
        setButtonLoad(true);

        try {
            const response = await axios.get(`${API_BASE_URL}/Salon/F69CEEB6-0B53-4712-A097-D3BC52A936D8/salonservices`);
            const data = response?.data?.data;
            // console.log('data from services', data);

            setServices(data);
            setButtonLoad(false);

        } catch (error) {
            setButtonLoad(false);

            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const openModal = (isFirst) => {
        setIsFirstButton(isFirst);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const [stylist, setStylist] = useState([]);

    const fetchStylist = async () => {
        setButtonLoad(true)
        const url = `${API_BASE_URL}/Appointment/${appointment.referenceId}/appointmentservice/${appointment.serviceReferenceId}/serviceemployees`;
        console.log(url)
        setButtonLoad(true);
        try {
            const response = await axios.get(url);
            const data = response?.data?.data;
            const names = data.map(item => item.allocatedEmployeeName)
            setStylist(names)
            // setUserData(data);
            setButtonLoad(false);
        } catch (error) {
            setButtonLoad(false);
            console.log('fetch api error from get api', error);
        }
    };
    useEffect(() => {
        fetchStylist();
    }, []);



    const AddService = async () => {
        // Assuming `appointment` is defined somewhere in your code
        closeModal()
        setButtonLoad(true)


        let newData = [];
        if (isFirstButton) {
            selectedItems.map((item) => {
                newData.push(
                    {
                        referenceId: '',
                        // referenceId:appointment.serviceEmployeesReferenceId,
                        preferredStylistReferenceId: item,
                        allocatedStylistReferenceId: item,
                        isActive: true,
                        createdBy: 1,
                        createdOn: new Date().toISOString(),
                        updatedBy: 0,
                        updatedOn: new Date().toISOString()
                    }
                )
            })
        } else {
            newData.push(
                {
                    referenceId: appointment.serviceEmployeesReferenceId,
                    // referenceId:appointment.serviceEmployeesReferenceId,
                    preferredStylistReferenceId: selectedItemsDD.toString(),
                    allocatedStylistReferenceId: selectedItemsDD.toString(),
                    isActive: true,
                    createdBy: 1,
                    createdOn: new Date().toISOString(),
                    updatedBy: 0,
                    updatedOn: new Date().toISOString()
                }
            )
        }
        const requestData = {
            appointmentReferenceId: appointment.referenceId,
            appointmentServiceReferenceId: appointment.serviceReferenceId,
            serviceEmployees: newData
        };
        try {
            const url = `${API_BASE_URL}/Appointment/ManageAppointmentServiceEmployees`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            if (response.ok) {
                const data = await response.json(); // Assuming response body is JSON
                fetchStylist()
                setButtonLoad(false);

            } else {
                console.error('Failed to check-in');
                setButtonLoad(false)

            }
        } catch (error) {
            setButtonLoad(false)
            console.error('Error:', error);

        }
    };

    const [service, setService] = useState(false);
    const StartService = async (appointmentStatusId, appointmentServiceStatusId, successMessage, successAlertTitle) => {
        const requestData = {
            salonReferenceId: 'F69CEEB6-0B53-4712-A097-D3BC52A936D8',
            appointmentReferenceId: appointment.referenceId,
            appointmentStatusId: appointmentStatusId,
            appointmentServiceReferenceId: appointment.serviceReferenceId,
            appointmentServiceStatusId: appointmentServiceStatusId,
            updatedBy: 1,
            updatedOn: "2024-06-05T13:26:19.667Z"
        };

        try {
            const response = await fetch('https://dev-salon-operation-api.azurewebsites.net/api/Appointment/updateappointmentstatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            if (response.ok) {
                setService(true)

                Alert.alert(successAlertTitle, successMessage);
            } else {
                Alert.alert(successAlertTitle, successMessage);
                Alert.alert('Error', 'Failed to start service');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred');
        }
    };

    const handlePress = () => {
        let statusCode = 0;
        let successMessage = '';
        let successAlertTitle = 'Success';

        switch (appointment.serviceStatusText) {
            case "Booked":
                statusCode = 5;
                successMessage = 'Service status undo to Booked';
                break;
            case "Ongoing":
                statusCode = 10;
                successMessage = 'Service status undo to Ongoing';
                break;
            case "Completed":
                statusCode = 15;
                successMessage = 'Service status undo to Completed';
                break;
            case "Upcoming":
                statusCode = 20;
                successMessage = 'Service status undo to Upcoming';
                break;
            case "Service Cancelled":
                statusCode = 25;
                successMessage = 'Service status undo to Service Cancelled';
                break;
            case "No-Show":
                statusCode = 30;
                successMessage = 'Service status undo to No-Show';
                break;
            case "Re-scheduled":
                statusCode = 35;
                successMessage = 'Service status undo to Re-scheduled';
                break;
            case "Transferred":
                statusCode = 40;
                successMessage = 'Service status undo to Transferred';
                break;
            case "Waiting":
                statusCode = 45;
                successMessage = 'Service status undo to Waiting';
                break;
            case "Paid":
                statusCode = 50;
                successMessage = 'Service status undo to Paid';
                break;
            case "Unpaid":
                statusCode = 55;
                successMessage = 'Service status undo to Unpaid';
                break;
            case "New Service Added":
                statusCode = 60;
                successMessage = 'Service status undo to New Service Added';
                break;
            default:
                statusCode = 0;
                successMessage = 'Service status undo';
                break;
        }

        StartService(appointment.serviceId, statusCode, successMessage, successAlertTitle);
    };



    useEffect(() => {
        const url = `${API_BASE_URL}/Employee/F69CEEB6-0B53-4712-A097-D3BC52A936D8/${appointment.serviceReferenceIdd}/salonemployeesdetails`;
        const getApiData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok of name get api');
                }
                const json = await response.json();
                // Extract firstName, lastName and referenceId
                const names = json.data.map(employee => ({
                    label: `${employee.salonEmployeeFirstName} ${employee.salonEmployeeLastName}`,
                    value: employee.referenceId
                }));
                setFullNames(names);
            } catch (error) {
                console.log(error);
            }
        };
        if (appointment.serviceReferenceId) {
            getApiData();

        }

    }, [appointment.serviceReferenceIdd]);

    //Fatch Rooms
    useEffect(() => {
        const url = `${API_BASE_URL}/f69ceeb6-0b53-4712-a097-d3bc52a936d8/room`;
        const fatchRoom = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok of name get api');
                }
                const json = await response.json();
                const names = json.data.map(employee => ({
                    label: employee.name,
                    value: employee.referenceId
                }));
                setRooms(names);
            } catch (error) {
                console.log(error);
            }
        };
        fatchRoom();
    }, []);

    //fatch Stations
    useEffect(() => {
        const url = `${API_BASE_URL}/f69ceeb6-0b53-4712-a097-d3bc52a936d8/Station`;
        const fatchStations = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok of name get api');
                }
                const json = await response.json();
                const names = json.data.map(employee => ({
                    label: employee.name,
                    value: employee.referenceId
                }));
                setStations(names);
            } catch (error) {
                console.log(error);
            }
        };
        fatchStations();
    }, []);
  

    const addRoomAndStation = async () => {
        setButtonLoad(true);
    
        const requestData = {
            referenceId: '',
            salonReferenceId: 'f69ceeb6-0b53-4712-a097-d3bc52a936d8',
            appointmentReferenceId: appointment.referenceId,
            appointmentServiceReferenceId: appointment.serviceReferenceId,
            roomReferenceId: selectedRooms.toString(),
            stationReferenceId: selectedStations.toString(),
            createdBy: 1,
            createdOn: new Date().toISOString(),
            updatedBy: 0,
            updatedOn: new Date().toISOString()
        };

        try {
            const url = `${API_BASE_URL}/Appointment/AppointmentServiceRoomStation`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                Alert.alert(errorData?.message);
                console.error('Error response:', errorData);
                setButtonLoad(false);
                return;
            }
            const data = await response.json();

            Alert.alert(data?.message);
            setButtonLoad(false);
        } catch (error) {
            setButtonLoad(false);
            Alert.alert(error?.message);
            console.error('Error:', error);
        }
    };

    const [stationsData, setStationsData] = useState([]);
    const [roomsData, setRoomsData] = useState([]);

        //fatch Stations and rooms data
        useEffect(() => {
            setButtonLoad(true);
            const url = `${API_BASE_URL}/Appointment/f69ceeb6-0b53-4712-a097-d3bc52a936d8/${appointment.referenceId}/AppointmentServiceRoomStation/${appointment.serviceReferenceId}`;
            // console.log('url---->',url)
            const fatchStationsRoomsData = async () => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Network response was not ok of name get api');
                    }
                    const result = await response.json();
                    const data = result.data;
    
                    console.log('data--------->', data);
                    
                    // Filtering stations and rooms
                    const stations = data.filter(item => item.stationName !== null);
                    const rooms = data.filter(item => item.roomName !== null);
                    
                    setStationsData(stations);
                    setRoomsData(rooms);
                    setButtonLoad(false);
                } catch (error) {
                    console.log(error);
                    setButtonLoad(false);
                }
            };
            fatchStationsRoomsData();
        }, []);
    
    return (
        <SafeAreaWithStatusBar>
            {buttonLoad ? (
                <View
                    style={styles.loader}
                >
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : null}
            <HeaderWithBackButton
                headerTitle='View Appointment'
                backHandle={() => navigation.goBack()} />

            <ScrollView>

                <View style={{ padding: 15 }}>
                    <Pressable style={styles.profileImageCard}>
                        <View style={styles.profileInfoMainView}>
                            <Image
                                // source={{ uri: DEMO_GIRL_IMAGE }}
                                source={{ uri: userData?.photoFile ? userData.photoFile : DEMO_GIRL_IMAGE }}
                                style={styles.profileImageView} />

                            <View style={styles.profilePersonalInfoView}>
                                <View style={styles.profilePersonalView}>
                                    <Text style={styles.profileName}>{userData?.firstName} {userData?.lastName}</Text>
                                    {/* <CustomIcon
                                        iconName={'logout'}
                                        iconSize={20}
                                        iconColor={AppColor.AZURE} /> */}
                                </View>
                                {userData?.contacts.map((contact, index) => (
                                    <Text key={index} style={{ fontFamily: AppFonts.FontsRegular, color: 'black' }}>{contact.contactType === 'PHONENUMBER' ?
                                        `${hideContactValue(contact.contactValue)}` :
                                        `${hideEmail(contact.contactValue)}`
                                    }</Text>
                                ))}
                                {/* <Text style={{ fontFamily: AppFonts.FontsRegular }}>+91-XXXXXX3219</Text> */}
                            </View>
                            {/* <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={30}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View> */}
                        </View>

                        <DividerView />
                        <View style={{ flexDirection: 'row', marginVertical: 15, }}>
                            {userData?.tags.map((tag, index) => (
                                // <Text key={index}>{tag.clientTagName}</Text>

                                <Text style={{ backgroundColor: AppColor.PERSIAN_GREEN, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, fontSize: AppFontSize.FontsSize_17, color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsMedium, marginRight: 15 }}>{tag.clientTagName}</Text>

                            ))}
                        </View>
                    </Pressable>


                    {/* <Pressable style={styles.viewAppointmentView}>
                        <Text style={styles.viewAppointmentText}>View Appointment Details</Text>
                        <CustomIcon
                            iconName='chevron-right'
                            iconSize={25}
                            iconColor={AppColor.AZURE} />
                    </Pressable> */}


                    <Pressable style={{
                        backgroundColor: AppColor.NYANZA_COLOR,
                        paddingVertical: getCustomSize(20),
                        borderRadius: getCustomSize(10),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: getCustomSize(10),
                        marginBottom: getCustomSize(25)
                    }}
                        onPress={() => navigation.navigate('RatingAndReviewScreen')}>
                        <Text style={{ color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_18) }}>Give your Rating & Review</Text>
                        <CustomIcon
                            iconName='chevron-right'
                            iconColor={AppColor.MAY_GREEN_COLOR} />
                    </Pressable>

                    <Pressable style={styles.serviceCard}>
                        <View style={styles.serviceInfoMainView}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={styles.serviceImageView} />

                            <View style={styles.serviceInfoView}>
                                <View style={styles.serviceView}>
                                    <Text style={styles.serviceName}>{appointment.serviceName}</Text>

                                </View>
                                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: AppFonts.FontsBold, color: 'black' }}>Stylist :</Text>
                                    {stylist?.map((name, index) => (
                                        <Text key={index} style={{ fontFamily: AppFonts.FontsMedium, color: 'black', }}>  {name},</Text>
                                    ))}
                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>{differenceInMinutes} min | {formattedStartTime} to {formattedEndTime}</Text>
                            </View>

                            {/* <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={30}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View> */}
                        </View>

                        <DividerView />
                        <View style={{ flexDirection: 'row', marginTop: -12, marginBottom: 10 }}>
                            <View style={{ flex: 1 }}>
                                <CustomButton
                                    // handlePress={() => openBottomSheetStylist()}
                                    handlePress={() => StartService(10, 10, 'Service started successfully!', 'Success',)}
                                    btnTitle={service == false ? 'Start Service' : 'Started'}
                                    backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                    textColor={AppColor.WHITE_COLOR}
                                    borderRadius={30} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                                <Text style={{ color: AppColor.AZURE, fontSize: AppFontSize.FontsSize_16, fontFamily: AppFonts.FontsMedium, marginTop: 15 }}
                                    onPress={() => {
                                        openModal(true)
                                    }}>+ Add Stylist</Text>
                            </View>
                        </View>


                        <CustomClick
                            handlePress={() => openBottomSheetStylist()}
                            title='otp sheet' />

                        <CustomClick
                            handlePress={() => openBottomSheetConsent()}
                            title='consent required' />

                        <DividerView />

                        <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.DEEP_SPACE_SPARKLE, marginTop: 10 }}>Add Room/Stations</Text>

                        {/* <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, marginTop: 5 }}>Ellen (Primary Member)</Text> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.radioButtonContainer}>
                                <RadioButton
                                    color={AppColor.DEEP_SPACE_SPARKLE}
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                                <Text style={styles.radioText}>Add Room</Text>
                            </View>
                            <View style={styles.radioButtonContainer}>
                                <RadioButton
                                    color={AppColor.DEEP_SPACE_SPARKLE}
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                                <Text style={styles.radioText}>Add Stations</Text>
                            </View>
                        </View>
                        <Text style={styles.title}>Stations</Text>
            {stationsData.map(station => (
                <View style={styles.item}>
                    <Text>{station.stationName}</Text>
                </View>
            ))}
            <Text style={styles.title}>Rooms</Text>
            {roomsData.map(room => (
                <View style={styles.item}>
                    <Text>{room.roomName}</Text>
                </View>
            ))}
                        {/* <Pressable style={{ flexDirection: 'row', backgroundColor: AppColor.WHITE_COLOR, elevation: 3, marginTop: 16, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <CustomIcon
                                iconName='add'
                                iconColor={AppColor.AZURE}
                                iconSize={26} />
                            <Text style={{ color: AppColor.AZURE, fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_17, marginLeft: 15 }}>Add Room/Stations</Text>
                        </Pressable>


                        <Pressable style={{ flexDirection: 'row', backgroundColor: AppColor.WHITE_COLOR, elevation: 3, marginTop: 16, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center' }}>
                            <CustomIcon
                                iconName='add'
                                iconColor={AppColor.AZURE}
                                iconSize={26} />
                            <Text style={{ color: AppColor.AZURE, fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_17, marginLeft: 15 }}>Add Room/Stations</Text>
                        </Pressable> */}
                        <View style={styles.dropdownView}>
                            {checked === 'first' ?
                                <Dropdown
                                    mode="auto"
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    data={rooms}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={'Select Rooms'}
                                    value={selectedRooms}
                                    onChange={(value) => setSelectedRooms(value.value)}
                                />
                                :
                                <Dropdown
                                    mode="auto"
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    data={Stations}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={'Select Stations '}
                                    value={selectedStations}
                                    onChange={(value) => setSelectedStations(value.value)}
                                />
                            }
                            <CustomButton
                                btnTitle='Add'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                handlePress={()=>addRoomAndStation()} />
                        </View>

                        <DividerView />
                        <Pressable onPress={() => openModal(false)} style={{ flexDirection: 'row', backgroundColor: AppColor.WHITE_COLOR, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between' }}>

                            <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_17, marginLeft: 15 }}>Transfer to Stylist</Text>

                            <CustomIcon
                                iconName='chevron-right'
                                iconColor={AppColor.BLACK_COLOR}
                                iconSize={26} />
                        </Pressable>

                        <CustomButton
                            btnTitle='Upload Images'
                            backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                            textColor={AppColor.WHITE_COLOR}
                            handlePress={() => setImageUploadModal(true)} />
                    </Pressable>

                    {/* <Pressable style={{ ...styles.serviceCard, marginTop: 20 }}>
                        <View style={styles.serviceInfoMainView}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={styles.serviceImageView} />

                            <View style={styles.serviceInfoView}>
                                <View style={styles.serviceView}>
                                    <Text style={styles.serviceName}>Hair Color</Text>

                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular }}>Stylist : <Text style={{ fontFamily: AppFonts.FontsMedium }}>Rebecca Beck + Erica </Text></Text>
                                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>120 min    |    11:30 AM to 1:15 PM</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={30}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View>
                        </View>

                        <DividerView />
                        <View style={{ flexDirection: 'row', marginTop: -12, marginBottom: 10 }}>
                            <View style={{ flex: 1 }}>
                                <CustomButton

                                    btnTitle='Start Service'
                                    backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                    textColor={AppColor.WHITE_COLOR}
                                    borderRadius={30} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                                <Text style={{ color: AppColor.AZURE, fontSize: AppFontSize.FontsSize_16, fontFamily: AppFonts.FontsMedium, marginTop: 15 }}>+ Add Stylist</Text>
                            </View>
                        </View>
                        <DividerView />


                        <CustomTextInput
                            placeholder='Add Notes'
                            numberOfLines={5}
                        />



                        <Pressable style={{ flexDirection: 'row', marginVertical: 20, alignItems: 'center' }}
                            onPress={() => navigation.navigate('AddItemScreen')}>
                            <CustomIcon
                                iconName={'add'}
                                iconSize={30}
                                iconColor={AppColor.AZURE} />
                            <Text style={{ color: AppColor.AZURE, fontSize: AppFontSize.FontsSize_16, fontFamily: AppFonts.FontsMedium, marginLeft: 10 }}>Add Items</Text>
                        </Pressable>
                    </Pressable> */}

                    {/* <CustomClick
                        handlePress={() => navigation.navigate('AddItemScreen')}
                        title='add items' /> */}
                    <Text style={{ marginVertical: 10, fontSize: AppFontSize.FontsSize_25, color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium }}>Suggested</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            services?.map((service, index) => (

                                <Pressable
                                    key={index}
                                    style={{
                                        width: 250,
                                        borderRadius: 10,
                                        elevation: 5,
                                        backgroundColor: 'white',
                                        padding: 7,
                                        marginRight: 5,
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={{ uri: DEMO_GIRL_IMAGE }} // Assuming 'image' is the property containing the image URL
                                        style={{ height: 200, borderRadius: 10 }}
                                    />
                                    <View style={styles.serviceInfoView}>
                                        <View style={styles.serviceView}>
                                            <Text style={{ ...styles.serviceName, marginTop: 10 }}>{service?.name}</Text>
                                        </View>
                                        {service?.description !== 'null' && service?.description && (
                                            <Text style={{ fontFamily: 'Regular' }}>{service?.description}</Text>
                                        )}

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                                            <Text style={{ fontFamily: 'Medium', color: 'black', fontSize: 13 }}>Rs. {service?.price}</Text>
                                            <Pressable style={{ borderWidth: 1, borderColor: 'lightblue', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
                                                <Text style={{ fontFamily: 'Medium', color: 'lightblue' }}>+ ADD</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </Pressable>
                            ))
                        }
                    </ScrollView>

                    <CustomClick
                        handlePress={() => navigation.navigate('ViewAppointmentDetailScreen')}
                        title='View Appointment detail' />


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='UNDO'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                // handlePress={() => setTimePendingModal(true)}
                                handlePress={() => handlePress()}

                            />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                btnTitle='COMPLETE'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                handlePress={() => StartService(15, 15, 'Service completed successfully!', 'Success',)} />
                        </View>
                    </View>

                </View>

            </ScrollView>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={closeModal}
                >
                    <View style={styles.modalContainerr}>
                        <View style={styles.modalContent}>
                            <Text style={{ color: 'black' }}>Select an employee</Text>
                            <View style={styles.dropdownView}>
                                {isFirstButton ? (
                                    <MultiSelect
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        labelField="label"
                                        valueField="value"
                                        mode='modal'
                                        maxHeight={300}
                                        value={selectedItems}
                                        onChange={(value) => setSelectedItems(value)}
                                        data={fullNames}
                                        itemTextStyle={{ color: 'black' }}
                                        placeholder={"Select an employee"}
                                    />
                                ) : (
                                    <Dropdown
                                        mode="auto"
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        data={fullNames}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={'Select Employee Type'}
                                        value={selectedItemsDD}
                                        onChange={(value) => setSelectedItemsDD(value.value)}
                                    />
                                )}
                            </View>
                            <PaperButton
                                buttonName={'Submit'}
                                uppercase={true}
                                buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                                topMargin={120}
                                onPress={AddService}
                                isLoading={buttonLoad}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Portal>
                <Modal
                    visible={timePendingModal}
                    dismissable={false}
                    onDismiss={() => setTimePendingModal(false)}
                    contentContainerStyle={styles.modalContainer}
                    style={{ justifyContent: 'center' }}>
                    <CommonModal>


                        <View style={{ margin: getCustomSize(20) }}>


                            <Text style={{ textAlign: 'center', color: AppColor.CINNABAR_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>
                                Your time limit is still pending!
                            </Text>


                            <Text style={{ fontFamily: AppFonts.FontsRegular, marginVertical: getCustomSize(10), textAlign: 'center', fontSize: getCustomSize(15) }}>Lorem ipsum dolor sit amet consectetur. Fringilla est </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <CustomButton
                                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                                        btnTitle='SNOOZE'
                                        borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                        handlePress={() => setTimePendingModal(false)}
                                    />
                                </View>

                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <CustomButton
                                        btnTitle='STOP'
                                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                        textColor={AppColor.WHITE_COLOR}
                                        handlePress={() => setTimePendingModal(false)} />
                                </View>
                            </View>
                        </View>
                    </CommonModal>
                </Modal>


                <Modal
                    visible={timeExceedModal}
                    dismissable={false}
                    onDismiss={() => setTimeExceedModal(false)}
                    contentContainerStyle={styles.modalContainer}
                    style={{ justifyContent: 'center' }}>
                    <CommonModal>


                        <View style={{ margin: getCustomSize(20) }}>


                            <Text style={{ textAlign: 'center', color: AppColor.CINNABAR_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>
                                Your time limit is still pending!
                            </Text>
                            <Text style={{ fontFamily: AppFonts.FontsRegular, marginVertical: getCustomSize(10), textAlign: 'center', fontSize: getCustomSize(15) }}>Lorem ipsum dolor sit amet consectetur. Fringilla est </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <CustomButton
                                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                                        btnTitle='SNOOZE'
                                        borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                        handlePress={() => setTimeExceedModal(false)}
                                    />
                                </View>
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <CustomButton
                                        btnTitle='STOP'
                                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                        textColor={AppColor.WHITE_COLOR}
                                        handlePress={() => setTimeExceedModal(false)} />
                                </View>
                            </View>
                        </View>
                    </CommonModal>
                </Modal>
                <Modal
                    visible={imageUploadModal}
                    dismissable={false}
                    onDismiss={() => setImageUploadModal(false)}
                    contentContainerStyle={styles.imageUploadModalContainer}
                    style={{ justifyContent: 'flex-end' }}>
                    <CommonModal>
                        <View style={{ margin: getCustomSize(20) }}>

                            <HeaderWithBackButton
                                headerTitle='Upload Images'
                                backHandle={() => setImageUploadModal(false)} />

                            <Text style={{ fontFamily: AppFonts.FontsRegular, marginVertical: getCustomSize(10), textAlign: 'center', fontSize: getCustomSize(15) }}>Lorem ipsum dolor sit amet consectetur. Fringilla est </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <CustomButton
                                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                                        btnTitle='Before'
                                        borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                        handlePress={() => setImageUploadModal(false)}
                                    />
                                </View>

                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <CustomButton
                                        btnTitle='After'
                                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                        textColor={AppColor.WHITE_COLOR}
                                        handlePress={() => setImageUploadModal(false)} />
                                </View>
                            </View>

                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='Take Picture'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                handlePress={() => setImageUploadModal(false)}
                            />
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle='Upload from gallery'
                                borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                handlePress={() => setImageUploadModal(false)}
                            />

                            <CustomButton
                                btnTitle='CANCEL'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                handlePress={() => setImageUploadModal(false)} />

                        </View>
                    </CommonModal>
                </Modal>

            </Portal>

            <DynamicBottomSheet bottomSheetRef={bottomSheetOtpRef}>
                <OtpComponent />
            </DynamicBottomSheet>

            <DynamicBottomSheet bottomSheetRef={bottomSheetConsentRef}>
                <ConsentRequiredComponent />
            </DynamicBottomSheet>
        </SafeAreaWithStatusBar>
    )
}