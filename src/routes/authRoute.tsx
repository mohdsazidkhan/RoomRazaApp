import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from './authScreen';
import { ScreenPath } from '../helper/screenPath';

const AuthStack = createNativeStackNavigator<AuthRootStackParamList>();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="LoginScreen" component={ScreenPath.LoginScreen} />
            <AuthStack.Screen name="SelectLanguageScreen" component={ScreenPath.SelectLanguageScreen} />
            <AuthStack.Screen name="TermAndPolicyScreen" component={ScreenPath.TermAndPolicyScreen} />
            <AuthStack.Screen name="EnterMobileScreen" component={ScreenPath.EnterMobileScreen} />
            <AuthStack.Screen name="EntreOtpScreen" component={ScreenPath.EnterOtpScreen} />
            <AuthStack.Screen name="AboutYouScreen" component={ScreenPath.AboutYouScreen} />
            <AuthStack.Screen name="SetMPinScreen" component={ScreenPath.SetMPinScreen} />
            <AuthStack.Screen name="ForgotPassword" component={ScreenPath.ForgotPassword} />
            <AuthStack.Screen name="ForgotPasswordOtp" component={ScreenPath.ForgotPasswordOtp} />
            <AuthStack.Screen name="NewPassword" component={ScreenPath.NewPassword} />
        </AuthStack.Navigator>
    )
}

const AuthRoot = () => <AuthStackScreen />

export default AuthRoot;