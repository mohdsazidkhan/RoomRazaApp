import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import { RadioButton } from 'react-native-paper'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont'
import CustomTextInput from '../../../components/molecules/customTextInput'
import MaterialDropdown from '../../../components/organisms/dropdown'
import PaperButton from '../../../components/atoms/paperButton'
import { getCustomSize } from '../../../theme/appFontSize'
import PaperTextInput from '../../../components/molecules/paperTextInput'


type Props = NativeStackScreenProps<RootStackParamList, 'AddGuestScreen'>

export default function AddGuestScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                backHandle={() => navigation.goBack()}
                headerTitle='Add Guest' />
            <ScrollView>
                <Text style={styles.subTitle}>Fill details for your guest here.</Text>
                <View style={{ padding: getCustomSize(15) }}>

                    <Text style={styles.genderTitle}>Select Gender</Text>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.radioButtonView}>
                            <RadioButton
                                status='checked'
                                color={AppColor.DEEP_SPACE_SPARKLE} />
                            <Text style={styles.radioButtonText}>Female</Text>
                        </View>
                        <View style={styles.radioButtonView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>Male</Text>
                        </View>
                        <View style={styles.radioButtonView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>Other</Text>
                        </View>

                    </View>





                    <PaperTextInput
                        label='First Name'
                        topMargin={getCustomSize(20)}
                    />

                    <PaperTextInput
                        label='Last Name'
                        topMargin={getCustomSize(20)}
                    />




                    <View style={{ marginTop: getCustomSize(20) }}>
                        <MaterialDropdown
                            placeHolder='Contact Number'
                        />
                    </View>


                    <PaperTextInput
                        label='Email'
                        topMargin={getCustomSize(20)}
                    />

                    <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.AZURE, marginVertical: getCustomSize(20) }}>+ Add More Information</Text>


                    <View style={{ justifyContent: 'flex-end', flex: 1, marginVertical: getCustomSize(20) }}>
                        <PaperButton
                            buttonName='Add Guest'
                            buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                            // isDisable 
                            OnPress={() => navigation.navigate('CreateAppointment')} />

                    </View>

                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}