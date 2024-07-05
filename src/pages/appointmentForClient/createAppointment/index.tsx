import { View, Text, ScrollView, Pressable, Image, } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import { styles } from './styles'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import CustomIcon from '../../../components/atoms/customIcon'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont'
import DividerView from '../../../components/atoms/dividerView'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import CustomTextInput from '../../../components/molecules/customTextInput'
import PaperButton from '../../../components/atoms/paperButton'
import DynamicBottomSheet from '../../../components/molecules/bottomSheet'
import { Modal, Portal, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import CalendarHorizontalStrip from '../../../components/molecules/calendarHorizontalStrip';
import CustomButton from '../../../components/atoms/customButton';
import SelectServiceComponent from '../../../components/organisms/bottomSheet/selectService';
import SelectStylistComponent from '../../../components/organisms/bottomSheet/selectStylist';
import CommonModal from '../../../components/organisms/modal/commonModal';
import MaterialDropdown from '../../../components/organisms/dropdown';
import PaperTextInput from '../../../components/molecules/paperTextInput';
import CustomClick from '../../../components/customClick';
import { useTranslation } from 'react-i18next';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAppointment'>

export default function CreateAppointmentScreen({ navigation }: Props) {
    const { t } = useTranslation()
    const bottomSheetStylistRef = useRef<BottomSheet>(null);
    const bottomSheetServiceRef = useRef<BottomSheet>(null);
    const [addGuestModal, setAddGuestModal] = useState(false)



    const openBottomSheetStylist = () => {
        if (bottomSheetStylistRef.current) {
            bottomSheetStylistRef.current.expand()
        }
    }

    const openBottomSheetService = () => {
        if (bottomSheetServiceRef.current) {
            bottomSheetServiceRef.current.expand()
        }
    }

    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('createAppointment')}
                backHandle={() => navigation.goBack()} />
            <ScrollView>
                <Text style={styles.subTitle}>{t('addAppointmentChoice')}</Text>
                <View style={{ padding: getCustomSize(15) }}>
                    <Pressable style={styles.profileImageCard}>
                        <View style={styles.profileInfoMainView}>
                            <Image
                                source={{ uri: DEMO_GIRL_IMAGE }}
                                style={styles.profileImageView} />

                            <View style={styles.profilePersonalInfoView}>
                                <View style={styles.profilePersonalView}>
                                    <Text style={styles.profileName}>Suhana Singh</Text>

                                </View>
                                <Text style={{ fontFamily: AppFonts.FontsRegular }}>+91-XXXXXX3219</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CustomIcon
                                    iconName={'keyboard-arrow-down'}
                                    iconSize={getCustomSize(30)}
                                    iconColor={AppColor.BLACK_OLIVE} />
                            </View>
                        </View>

                        <DividerView />
                        <View style={styles.tagView}>
                            <Text style={styles.tagText}>Primary</Text>
                            <Text style={{ ...styles.tagText, backgroundColor: AppColor.ATOMIC_TANGERINE }}>Influencer</Text>
                            <Text style={{ ...styles.tagText, backgroundColor: AppColor.DarkKhaki }}>VIP</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        style={styles.serviceStylistView}
                        onPress={() => openBottomSheetService()}>
                        <Text style={{ fontFamily: AppFonts.FontsRegular }}>{t('selectServices')}click here to open Select Service bottom sheet</Text>
                        <CustomIcon iconName='chevron-right'
                            iconSize={getCustomSize(25)}
                            iconColor={AppColor.DEEP_SPACE_SPARKLE} />
                    </Pressable>


                    <Pressable
                        style={styles.serviceStylistView}
                        onPress={() => openBottomSheetStylist()}>
                        <Text style={{ fontFamily: AppFonts.FontsRegular }}>{t('selectStylist')}click here to open Select Stylist bottom sheet</Text>
                        <CustomIcon iconName='chevron-right'
                            iconSize={getCustomSize(25)}
                            iconColor={AppColor.DEEP_SPACE_SPARKLE} />
                    </Pressable>


                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, marginRight: getCustomSize(10) }}>
                            <PaperTextInput
                                label={t('date')}
                                topMargin={getCustomSize(20)} />
                        </View>

                        <View style={{ flex: 1, marginLeft: getCustomSize(10) }}>
                            <PaperTextInput
                                label={t('time')}
                                topMargin={getCustomSize(20)} />
                        </View>
                    </View>

                    <Text style={styles.suggestionText}>{t('suggestions')}</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable style={styles.selectedBgColor}>
                                <Text style={styles.selectedText}>Services</Text>
                            </Pressable>
                            <Pressable style={styles.unSelectBgColor}>
                                <Text style={styles.unselectedText}>Products</Text>
                            </Pressable>

                            <Pressable style={styles.unSelectBgColor}>
                                <Text style={styles.unselectedText}>Member</Text>
                            </Pressable>

                            <Pressable style={styles.unSelectBgColor}>
                                <Text style={styles.unselectedText}>Services</Text>
                            </Pressable>

                            <Pressable style={styles.unSelectBgColor}>
                                <Text style={styles.unselectedText}>Products</Text>
                            </Pressable>

                            <Pressable style={styles.unSelectBgColor}>
                                <Text style={styles.unselectedText}>Member</Text>
                            </Pressable>
                        </View>
                    </ScrollView>

                    {/* <Text style={{ textAlign: 'center', marginVertical: getCustomSize(20) }}>Slider Here</Text> */}

                    <Pressable style={styles.addClientPressable}
                        onPress={() => setAddGuestModal(true)}>
                        <Text style={styles.addClintText}>{t('addGuest')}</Text>
                    </Pressable>

                    <CustomClick
                        title='no of select guest'
                        handlePress={() => setAddGuestModal(true)} />

                    <View style={{ justifyContent: 'flex-end', flex: 1, marginVertical: getCustomSize(20) }}>
                        <PaperButton
                            buttonName={t('createAppointment')}
                            buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                            // isDisable 
                            OnPress={() => navigation.navigate('GuestProfileScreen')} />

                    </View>

                </View>

            </ScrollView>

            <Portal>
                <Modal
                    visible={addGuestModal}
                    dismissable={true}
                    onDismiss={() => setAddGuestModal(false)}
                    contentContainerStyle={styles.loaderModalContainer}
                    style={{ justifyContent: 'center' }}>

                    <CommonModal>
                        <View style={styles.modalView}>
                            <Text style={styles.addGuestTitle}>{t('guestToAdd')}</Text>
                            <MaterialDropdown
                                placeHolder={t('selectNoGuest')} />

                            <View style={styles.buttonView}>
                                <View style={{ flex: 1, marginRight: getCustomSize(10) }}>
                                    <CustomButton
                                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                                        btnTitle={t('cancel')}
                                        borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                        handlePress={() => setAddGuestModal(false)} />
                                </View>

                                <View style={{ flex: 1, marginLeft: getCustomSize(10) }}>
                                    <CustomButton
                                        btnTitle={t('add')}
                                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                        textColor={AppColor.WHITE_COLOR}
                                        handlePress={() => { setAddGuestModal(false), navigation.navigate('AddGuestScreen') }}
                                    />
                                </View>
                            </View>
                        </View>
                    </CommonModal>
                </Modal>
            </Portal>



            <DynamicBottomSheet bottomSheetRef={bottomSheetStylistRef}>
                <SelectStylistComponent />
            </DynamicBottomSheet>

            <DynamicBottomSheet bottomSheetRef={bottomSheetServiceRef}>
                <SelectServiceComponent />
            </DynamicBottomSheet>
        </SafeAreaWithStatusBar>
    )
}