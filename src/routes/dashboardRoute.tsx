import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './screen';
import { ScreenPath } from '../helper/screenPath';
import { AppColor } from '../theme/appColor';
import { SvgImagePath } from '../assets/helper/imagePath';
import { AppFonts } from '../theme/appFont';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getCustomSize } from '../theme/appFontSize';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();


const HomeStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='HomeScreen' component={ScreenPath.HomeScreen} />
            <RootStack.Screen name='ViewTargetScreen' component={ScreenPath.ViewTargetScreen} />
            <RootStack.Screen name='NotificationsScreen' component={ScreenPath.NotificationsScreen} />
        </RootStack.Navigator>
    )
}

const AppointmentStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>

            {/* actual screen  */}
            {/* <RootStack.Screen name='AppointmentForClientScreen' component={ScreenPath.AppointmentForClient} />
            <RootStack.Screen name='CreateNewAppointmentScreen' component={ScreenPath.CreateNewAppointmentScreen} />
            <RootStack.Screen name='AddingClientScreen' component={ScreenPath.AddingClientScreen} />
            <RootStack.Screen name='CreateAppointment' component={ScreenPath.CreateAppointment} />
            <RootStack.Screen name='GuestProfileScreen' component={ScreenPath.GuestProfileScreen} />
            <RootStack.Screen name='AddGuestScreen' component={ScreenPath.AddGuestScreen} /> */}



            {/* below screens are useful for appointment in salon */}
            <RootStack.Screen name='AppointmentScreen' component={ScreenPath.AppointmentScreen} />
            <RootStack.Screen name='ViewAppointmentScreen' component={ScreenPath.ViewAppointmentScreen} />
            <RootStack.Screen name='ViewAppointmentDetailScreen' component={ScreenPath.ViewAppointmentDetailScreen} />
            <RootStack.Screen name='ViewClientHistoryScreen' component={ScreenPath.ViewClientHistoryScreen} />
            <RootStack.Screen name='AddToolkitScreen' component={ScreenPath.AddToolkitScreen} />
            <RootStack.Screen name='AddStylistScreen' component={ScreenPath.AddStylistScreen} />
            <RootStack.Screen name='StepsForStylist' component={ScreenPath.StepsForStylist} />
            <RootStack.Screen name='AddStationRoom' component={ScreenPath.AddStationRoom} />
            <RootStack.Screen name='TransferStylistScreen' component={ScreenPath.TransferStylistScreen} />
            <RootStack.Screen name='RatingAndReviewScreen' component={ScreenPath.RatingAndReviewScreen} />
            <RootStack.Screen name='AddItemScreen' component={ScreenPath.AddItemScreen} />
            <RootStack.Screen name='ServicesScreen' component={ScreenPath.ServicesScreen} />
            <RootStack.Screen name='MembershipScreen' component={ScreenPath.MembershipScreen} />
            <RootStack.Screen name='PackageScreen' component={ScreenPath.PackageScreen} />
            <RootStack.Screen name='DiscountCardScreen' component={ScreenPath.DiscountCardScreen} />
            <RootStack.Screen name='GiftCardScreen' component={ScreenPath.GiftCardScreen} />
            <RootStack.Screen name='ProductScreen' component={ScreenPath.ProductScreen} />
            <RootStack.Screen name='BookingConfirmedScreen' component={ScreenPath.BookingConfirmedScreen} />
            <RootStack.Screen name='PaymentMethodScreen' component={ScreenPath.PaymentMethodScreen} />
        </RootStack.Navigator>
    )
}

const AttendanceStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='AttendanceScreen' component={ScreenPath.AttendanceScreen} />
            <RootStack.Screen name='AttendanceHistoryScreen' component={ScreenPath.AttendanceHistoryScreen} />
            <RootStack.Screen name='ViewLeaveHistoryScreen' component={ScreenPath.ViewLeaveHistoryScreen} />
        </RootStack.Navigator>
    )
}

const TargetStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='TargetScreen' component={ScreenPath.TargetScreen} />
        </RootStack.Navigator>
    )
}

const ProfileStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='ProfileScreen' component={ScreenPath.ProfileScreen} />
            <RootStack.Screen name='MyProfileScreen' component={ScreenPath.MyProfileScreen} />
            <RootStack.Screen name='PersonalInformationScreen' component={ScreenPath.PersonalInformationScreen} />
            <RootStack.Screen name='JobProfileScreen' component={ScreenPath.JobProfileScreen} />
            <RootStack.Screen name='WorkingHourScreen' component={ScreenPath.WorkingHourScreen} />
            <RootStack.Screen name='TargetPayrollScreen' component={ScreenPath.TargetPayrollScreen} />
            <RootStack.Screen name='DocumentScreen' component={ScreenPath.DocumentScreen} />
            <RootStack.Screen name='RatingReviewScreen' component={ScreenPath.RatingReviewScreen} />
            <RootStack.Screen name='OtherDetailsScreen' component={ScreenPath.OtherDetailsScreen} />
            <RootStack.Screen name='InsuranceScreen' component={ScreenPath.InsuranceScreen} />
            <RootStack.Screen name='SalaryScreen' component={ScreenPath.SalaryScreen} />
            <RootStack.Screen name='BankDetailScreen' component={ScreenPath.BankDetailScreen} />
            <RootStack.Screen name='SalaryDetailScreen' component={ScreenPath.SalaryDetailScreen} />
            <RootStack.Screen name='TermConditionScreen' component={ScreenPath.TermConditionScreen} />
            <RootStack.Screen name='ServiceAvailScreen' component={ScreenPath.ServiceAvailScreen} />
            <RootStack.Screen name='BusinessLogScreen' component={ScreenPath.BusinessLogScreen} />
            <RootStack.Screen name='ClientLogScreen' component={ScreenPath.ClientLogScreen} />
            <RootStack.Screen name='IncentiveEarnedScreen' component={ScreenPath.IncentiveEarnedScreen} />
            <RootStack.Screen name='SettingWorkingHourScreen' component={ScreenPath.SettingWorkingHourScreen} />
            <RootStack.Screen name='TrainingScreen' component={ScreenPath.TrainingScreen} />
            <RootStack.Screen name='TrainingVideoScreen' component={ScreenPath.TrainingVideoScreen} />
            <RootStack.Screen name='ExploreAllTrainingVideos' component={ScreenPath.ExploreAllTrainingVideos} />
            <RootStack.Screen name='ManageToolKitScreen' component={ScreenPath.ManageToolKitScreen} />
            <RootStack.Screen name='ReceivedToolkitScreen' component={ScreenPath.ReceivedToolkitScreen} />
            <RootStack.Screen name='RequestToolkitScreen' component={ScreenPath.RequestToolkitScreen} />
            <RootStack.Screen name='ReturnToolkitScreen' component={ScreenPath.ReturnToolkitScreen} />
        </RootStack.Navigator>
    )
}


function TabNav() {
    const { t } = useTranslation();
    const { width, height } = Dimensions.get("window")

    return (
        <View
            style={{
                flex: 1
                // width,
                // height,

            }}
        >
            <Tab.Navigator
                // initialRouteName="StatusScreen"
                screenOptions={{
                    tabBarActiveTintColor: AppColor.DEEP_SPACE_SPARKLE,
                    headerShown: false,
                    tabBarInactiveTintColor: AppColor.BLACK_COLOR,
                    tabBarLabelStyle: { fontFamily: AppFonts.FontsMedium },
                    tabBarItemStyle: { borderRadius: 15 }
                }}
            >

                <Tab.Screen
                    name="HomeStackScreen"
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: t('home'),
                        tabBarIcon: ({ color, size, focused }) => (focused ?
                            <>
                                <View style={styles.tabBg} >
                                    <SvgImagePath.HomeFocus />
                                </View>

                            </> : <SvgImagePath.Home />),
                    }}
                />

                <Tab.Screen
                    name="AppointmentStackScreen"
                    component={AppointmentStackScreen}
                    options={{
                        tabBarLabel: t('appointment'),
                        tabBarIcon: ({ color, size, focused }) => (focused ?
                            <>
                                <View style={styles.tabBg} >
                                    <SvgImagePath.AppointmentFocus />
                                </View>
                            </> : <SvgImagePath.Appointment />),
                    }}
                />

                <Tab.Screen
                    name="AttendanceStackScreen"
                    component={AttendanceStackScreen}
                    options={{
                        tabBarLabel: t('attendance'),
                        tabBarIcon: ({ color, size, focused }) => (focused ?
                            <>
                                <View style={styles.tabBg} >
                                    <SvgImagePath.AttendanceFocus />
                                </View>
                            </> : <SvgImagePath.Attendance />),
                    }}
                />

                <Tab.Screen
                    name="TargetStackScreen"
                    component={TargetStackScreen}
                    options={{
                        tabBarLabel: t('target'),
                        tabBarIcon: ({ color, size, focused }) => (focused ?
                            <>
                                <View style={styles.tabBg} >
                                    <SvgImagePath.TargetFocus />
                                </View>
                            </> : <SvgImagePath.Target />),
                    }}
                />

                <Tab.Screen
                    name="ProfileStackScreen"
                    component={ProfileStackScreen}
                    options={{
                        tabBarLabel: t('profile'),
                        tabBarIcon: ({ color, size, focused }) => (focused ?
                            <>
                                <View style={styles.tabBg} >
                                    <SvgImagePath.PersonFocus />
                                </View>
                            </> : <SvgImagePath.Person />),
                    }}
                />
            </Tab.Navigator >
        </View>
    )
}

const DashboardRoute = () => <TabNav />

export default DashboardRoute;


const styles = StyleSheet.create({
    tabBg: {
        backgroundColor: AppColor.DEEP_SPACE_SPARKLE + '40',
        height: getCustomSize(30),
        width: getCustomSize(30),
        borderRadius: getCustomSize(6),
        alignItems: 'center',
        justifyContent: 'center',
        padding: getCustomSize(15)
    }
})
