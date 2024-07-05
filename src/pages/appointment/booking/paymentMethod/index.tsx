import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import { AppFonts } from '../../../../theme/appFont'
import { AppColor } from '../../../../theme/appColor'
import DividerView from '../../../../components/atoms/dividerView'
import CustomTextInput from '../../../../components/molecules/customTextInput'
import { styles } from './styles'
import CustomIcon from '../../../../components/atoms/customIcon'
import { Modal, Portal } from 'react-native-paper'
import CommonModal from '../../../../components/organisms/modal/commonModal'
import CustomButton from '../../../../components/atoms/customButton'
import PaperTextInput from '../../../../components/molecules/paperTextInput'
import CustomCheckBox from '../../../../components/molecules/customCheckBox'
import { ImagePath, SvgImagePath } from '../../../../assets/helper/imagePath'

export default function PaymentMethodScreen() {

    const [cardModal, setCardModal] = useState(false)
    const [upiModal, setUPIModal] = useState(false)
    const [bankModal, setBankModal] = useState(false)


    return (
        <SafeAreaWithStatusBar>

            <HeaderWithBackButton
                headerTitle='Payment Method' />

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.paymentMethodText}>Select Payment Method</Text>


                    <View style={{ ...styles.menuView, marginTop: getCustomSize(70) }}>
                        <View style={styles.subMenuView}>
                            <SvgImagePath.Cash />
                            <Text style={styles.menuText}>Cash</Text>
                        </View>
                        <CustomTextInput
                            leftText='₹' />
                    </View>

                    <DividerView marginVertical={getCustomSize(20)} />

                    <View style={styles.menuView}>
                        <View style={styles.subMenuView}>
                            <SvgImagePath.CreditCard />
                            <Text style={styles.menuText} onPress={() => setCardModal(true)}>Credit/Debit Card</Text>
                        </View>
                        <CustomTextInput
                            leftText='₹' />
                    </View>

                    <DividerView marginVertical={getCustomSize(20)} />
                    <View style={styles.menuView}>
                        <View style={styles.subMenuView}>
                            <SvgImagePath.Membership />
                            <Text style={styles.menuText}>Membership</Text>
                        </View>
                        <CustomTextInput
                            leftText='₹' />
                    </View>

                    <DividerView marginVertical={getCustomSize(20)} />

                    <View style={styles.menuView}>
                        <View style={styles.subMenuView}>
                            <SvgImagePath.DiscountCard />
                            <Text style={styles.menuText}>Discount Card</Text>
                        </View>
                        <CustomTextInput
                            leftText='₹' />
                    </View>

                    <DividerView marginVertical={getCustomSize(20)} />
                    <View style={styles.menuView}>
                        <View style={styles.subMenuView}>
                            <SvgImagePath.GiftCard />
                            <Text style={styles.menuText}>Gift Card</Text>
                        </View>
                        <CustomTextInput
                            leftText='₹' />
                    </View>

                    <DividerView marginVertical={getCustomSize(20)} />

                    <View style={styles.menuView}>
                        <View style={styles.subMenuView}>
                            <SvgImagePath.Upi />
                            <Text style={styles.menuText} onPress={() => setUPIModal(true)}>UPI</Text>
                        </View>
                        <CustomTextInput
                            leftText='₹' />
                    </View>

                    <DividerView marginVertical={getCustomSize(20)} />


                    <View style={styles.menuView}>
                        <View style={styles.subMenuView}>
                            <SvgImagePath.Bank />
                            <Text style={styles.menuText} onPress={() => setBankModal(true)}>Add Bank Account Details</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right' />
                    </View>


                </View>
            </ScrollView>


            <Portal>
                <Modal
                    visible={cardModal}
                    dismissable={false}
                    onDismiss={() => setCardModal(false)}
                    contentContainerStyle={styles.modalContainer}
                    style={{ justifyContent: 'center' }}>
                    <CommonModal>


                        <View style={{ margin: getCustomSize(20) }}>


                            <Text style={{ textAlign: 'center', color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>
                                Enter Card Details
                            </Text>

                            <DividerView />


                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <SvgImagePath.Visa />
                                <SvgImagePath.MasterCard />
                                <SvgImagePath.AmExpress />
                            </View>

                            <PaperTextInput
                                label='Card Number'
                                height={50}
                            />
                            <PaperTextInput
                                label='Name on card'
                                topMargin={getCustomSize(10)}
                                height={50}
                            />

                            <View style={{ flexDirection: 'row', marginTop: getCustomSize(10) }}>
                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <PaperTextInput
                                        label='Valid(MM/YY)'
                                        height={50}
                                    />
                                </View>
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <PaperTextInput
                                        label='CVV'
                                        height={50}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: getCustomSize(10), alignItems: 'center' }}>
                                <CustomCheckBox
                                    themeColor={AppColor.AZURE} />
                                <Text style={{ fontFamily: AppFonts.FontsMedium }}>Save for Future</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <CustomButton
                                        textColor={AppColor.DEEP_SPACE_SPARKLE}
                                        btnTitle='CANCEL'
                                        borderColor={AppColor.DEEP_SPACE_SPARKLE}
                                        handlePress={() => setCardModal(false)}
                                    />
                                </View>

                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <CustomButton
                                        btnTitle='SAVE'
                                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                        textColor={AppColor.WHITE_COLOR}
                                        handlePress={() => setCardModal(false)} />
                                </View>
                            </View>
                        </View>
                    </CommonModal>
                </Modal>

                <Modal
                    visible={upiModal}
                    dismissable={false}
                    onDismiss={() => setUPIModal(false)}
                    contentContainerStyle={styles.modalContainer}
                    style={{ justifyContent: 'center' }}>
                    <CommonModal>


                        <View style={{ margin: getCustomSize(20) }}>


                            <Text style={{ textAlign: 'center', color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>
                                Select UPI ID
                            </Text>

                            <DividerView />

                            <Text style={{ color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_16) }}>
                                Select your UPI app
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: getCustomSize(15) }}>
                                <View style={{ flex: 1 }}>
                                    <Image source={ImagePath.bhim} />
                                    <Text style={styles.upiTextName}>BHIM</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image source={ImagePath.gPay} />
                                    <Text style={styles.upiTextName}>GPay</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image source={ImagePath.phonePe} />
                                    <Text style={styles.upiTextName}>PhonePe</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image source={ImagePath.paytm} />
                                    <Text style={styles.upiTextName}>Paytm</Text>
                                </View>
                            </View>

                            <CustomButton
                                btnTitle='Other Payment Method'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                handlePress={() => setUPIModal(false)} />


                        </View>
                    </CommonModal>
                </Modal>


                <Modal
                    visible={bankModal}
                    dismissable={false}
                    onDismiss={() => setBankModal(false)}
                    contentContainerStyle={styles.modalContainer}
                    style={{ justifyContent: 'center' }}>
                    <CommonModal>


                        <View style={{ margin: getCustomSize(20) }}>


                            <Text style={{ textAlign: 'center', color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>
                                Add Bank Detail
                            </Text>

                            <DividerView />



                            <PaperTextInput
                                label='Bank Name'
                                height={50}
                            />
                            <PaperTextInput
                                label='Account No.'
                                topMargin={getCustomSize(10)}
                                height={50}
                            />

                            <PaperTextInput
                                label='IFSC Code'
                                topMargin={getCustomSize(10)}
                                height={50}
                            />
                            <PaperTextInput
                                label='Receipt Name'
                                topMargin={getCustomSize(10)}
                                height={50}
                            />

                            <CustomButton
                                btnTitle='Add'
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                                handlePress={() => setBankModal(false)} />

                        </View>
                    </CommonModal>
                </Modal>


            </Portal >
        </SafeAreaWithStatusBar >
    )
}