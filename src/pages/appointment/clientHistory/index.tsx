import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import CustomTextInput from '../../../components/molecules/customTextInput'
import { styles } from './styles'
import CustomIcon from '../../../components/atoms/customIcon'
import { AppColor } from '../../../theme/appColor'
import * as appMessage from '../../../assets/messages'
import { AppFonts } from '../../../theme/appFont'
import { AppFontSize } from '../../../theme/appFontSize'
import { Pressable } from 'react-native'
import DividerView from '../../../components/atoms/dividerView'
import { SvgImagePath } from '../../../assets/helper/imagePath';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import CustomClick from '../../../components/customClick'


type Props = NativeStackScreenProps<RootStackParamList, 'ViewClientHistoryScreen'>

export default function ViewClientHistoryScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='View Client History' />

            <ScrollView>




                <View style={{ margin: 15 }}>
                    <CustomTextInput
                        placeholder='Search'
                        labelValue='' />

                    <View style={styles.filterSortView}>
                        <View style={styles.filterSortSubView}>

                            <SvgImagePath.Filter />

                            <Text style={styles.filterSortText}>{appMessage.filter}</Text>
                        </View>

                        <View style={styles.filterSortSubView}>
                            <SvgImagePath.Sort />
                            <Text style={styles.filterSortText}>{appMessage.sort}</Text>
                        </View>
                    </View>


                    <DividerView marginVertical={10} />

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginHorizontal: 10 }}>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>Date</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>Service</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>Paid Amt(Rs.)</Text>
                    </View>

                    <Pressable style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, backgroundColor: AppColor.WHITE_COLOR, elevation: 5, paddingHorizontal: 10, paddingVertical: 14, borderRadius: 10 }}>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>12/12/22</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>Hair Cut</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>1000</Text>
                    </Pressable>

                    <Pressable style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, backgroundColor: AppColor.WHITE_COLOR, elevation: 5, paddingHorizontal: 10, paddingVertical: 14, borderRadius: 10 }}>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>12/12/22</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>Hair Cut</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>1000</Text>
                    </Pressable>

                    <Pressable style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, backgroundColor: AppColor.WHITE_COLOR, elevation: 5, paddingHorizontal: 10, paddingVertical: 14, borderRadius: 10 }}>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>12/12/22</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>Hair Cut</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>1000</Text>
                    </Pressable>


                    <Pressable
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, backgroundColor: AppColor.LIGHT_GRAY, paddingHorizontal: 10, paddingVertical: 14, }}
                        onPress={() => navigation.navigate('AddToolkitScreen')}>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>Total</Text>
                        <Text style={{ color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_16 }}>3000</Text>
                    </Pressable>

                </View>

                <CustomClick
                    handlePress={() => navigation.navigate('AddToolkitScreen')} 
                    title='Add toolkit'/>
            </ScrollView>

        </SafeAreaWithStatusBar>
    )
}