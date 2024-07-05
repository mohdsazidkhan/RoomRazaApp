import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { SvgImagePath } from '../../../assets/helper/imagePath'
import CustomIcon from '../../../components/atoms/customIcon'
import { AppColor } from '../../../theme/appColor'
import { styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'


type Props = NativeStackScreenProps<RootStackParamList, 'AddItemScreen'>
export default function AddItemScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Add Items'
                backHandle={()=>navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('ServicesScreen')}>
                        <View style={styles.iconTextView}>
                            <SvgImagePath.ServiceAddItem />
                            <Text style={styles.menuText}>Services</Text>
                        </View>

                        <CustomIcon
                            iconName='chevron-right'
                            iconColor={AppColor.BLACK_COLOR} />

                    </Pressable>

                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('MembershipScreen')}>
                        <View style={styles.iconTextView}>
                            <SvgImagePath.MemberAddItem />
                            <Text style={styles.menuText}>Membership</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right'
                            iconColor={AppColor.BLACK_COLOR} />
                    </Pressable>

                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('PackageScreen')}>
                        <View style={styles.iconTextView}>
                            <SvgImagePath.PackageAddItem />
                            <Text style={styles.menuText}>Package</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right'
                            iconColor={AppColor.BLACK_COLOR} />
                    </Pressable>

                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('DiscountCardScreen')}>
                        <View style={styles.iconTextView}>
                            <SvgImagePath.DiscountAddItem />
                            <Text style={styles.menuText}>Discount Cards</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right'
                            iconColor={AppColor.BLACK_COLOR} />
                    </Pressable>

                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('GiftCardScreen')}>
                        <View style={styles.iconTextView}>
                            <SvgImagePath.GiftAddItem />
                            <Text style={styles.menuText}>Gift Cards</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right'
                            iconColor={AppColor.BLACK_COLOR} />
                    </Pressable>

                    <Pressable style={styles.menuView}
                        onPress={() => navigation.navigate('ProductScreen')}>
                        <View style={styles.iconTextView}>
                            <SvgImagePath.ProductAddItem />
                            <Text style={styles.menuText}>Products</Text>
                        </View>
                        <CustomIcon
                            iconName='chevron-right'
                            iconColor={AppColor.BLACK_COLOR} />
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}