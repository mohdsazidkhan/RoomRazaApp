import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import React, { useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import { AppColor } from '../../../theme/appColor'
import { getCustomSize } from '../../../theme/appFontSize'
import MaterialDropdown from '../../../components/organisms/dropdown'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import { RadioButton } from 'react-native-paper'
import PaperButton from '../../../components/atoms/paperButton'
import DynamicBottomSheet from '../../../components/molecules/bottomSheet'
import TargetServiceComponent from '../../../components/organisms/bottomSheet/targetService';
import { useTranslation } from 'react-i18next';
import CustomTextInput from '../../../components/molecules/customTextInput';
import { useAuth } from '../../../routes/context/Auth';

type Props = NativeStackScreenProps<RootStackParamList, 'TargetPayrollScreen'>

export default function TargetPayrollScreen({ navigation }: Props) {
    const { t } = useTranslation()

    const { profileData, loading } = useAuth();
    const bottomSheetTargetStylistRef = useRef<BottomSheet>(null);
    const openBottomSheetTargetStylist = () => {
        if (bottomSheetTargetStylistRef.current) {
            bottomSheetTargetStylistRef.current.expand()
        }
    }

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
                headerTitle={t('targetPayrolls')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titleText}>{t('salaryAmount')}</Text>

                    {/* <MaterialDropdown
                        placeHolder={t('salaryBasis')} /> */}
                    <PaperTextInput
                        label={'Basic salary'}
                        isEditable={false}
                        labelValue={(profileData?.payrollDetail?.basicSalary)}
                        topMargin={getCustomSize(15)} />

                    <PaperTextInput
                        label={'Additional amount'}
                        isEditable={false}
                        labelValue={profileData?.payrollDetail?.additionalAmount}
                        topMargin={getCustomSize(15)} />

                    <PaperTextInput
                        label={'Total amount'}
                        isEditable={false}
                        labelValue={profileData?.payrollDetail?.totalAmount}
                        topMargin={getCustomSize(15)} />

                    <Text style={styles.titleText}>{t('targetType')}</Text>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.radioButtonView}>
                            <RadioButton
                                status='checked'
                                color={AppColor.DEEP_SPACE_SPARKLE} />
                            <Text style={styles.radioButtonText}>{t('amount')}</Text>
                        </View>
                        <View style={styles.radioButtonView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>{t('noServices')}</Text>
                        </View>


                    </View>


                    <Pressable
                        onPress={() => openBottomSheetTargetStylist()}
                    >

                        <PaperTextInput
                            label={t('totalServicesSelected')}
                            topMargin={getCustomSize(15)}
                            isEditable={false} />
                    </Pressable>

                    <PaperTextInput
                        label={t('targetAmount')}
                        topMargin={getCustomSize(15)} />

                    <PaperTextInput
                        label={t('targetPeriod')}
                        topMargin={getCustomSize(15)} />

                    <Text style={styles.targetStatusText}>{t('viewTargetStatus')}</Text>


                    <Text style={styles.titleText}>{t('bankAccountDetails')}</Text>


                    <PaperTextInput
                        label={t('accountHolderName')}
                        isEditable={false}
                        labelValue={profileData?.accountHolderName}
                        topMargin={getCustomSize(15)} />

                    <PaperTextInput
                        label={t('accountNumber')}
                        isEditable={false}
                        labelValue={profileData?.accountNumber}
                        topMargin={getCustomSize(15)} />

                    <PaperTextInput
                        label={t('confirmAccountNumber')}
                        isEditable={false}
                        labelValue={profileData?.accountNumber}
                        topMargin={getCustomSize(15)} />
                    <PaperTextInput
                        label={t('bankName')}
                        isEditable={false}
                        labelValue={profileData?.bankName}
                        topMargin={getCustomSize(15)} />

                    <PaperTextInput
                        label={t('IFSCCode')}
                        isEditable={false}
                        labelValue={profileData?.ifscCode}
                        topMargin={getCustomSize(15)} />


                    {/* <PaperButton
                        buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                        buttonName={t('requestToChange')}
                        topMargin={getCustomSize(50)}
                    // OnPress={() => setSubmitModalVisibility(true)} 
                    /> */}

                </View>
            </ScrollView>


            <DynamicBottomSheet bottomSheetRef={bottomSheetTargetStylistRef}>
                <TargetServiceComponent />
            </DynamicBottomSheet>

        </SafeAreaWithStatusBar>
    )
}