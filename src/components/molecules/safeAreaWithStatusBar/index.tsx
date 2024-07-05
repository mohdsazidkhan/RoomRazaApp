import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar, StatusBarStyle, ViewStyle, KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import Styles from './styles';
import { AppColor } from '../../../theme/appColor';

interface SafeAreaWithStatusBarProps {
    children: React.ReactNode
    statusBarBgColor?: string;
    statusTranslucent?: boolean;
    statusBarStyle?: StatusBarStyle;
    safeAreaViewStyle?: ViewStyle;
    safeAreaEdges?: Array<Edge>;
    safeAreaMode?: 'margin' | 'padding';
}

const SafeAreaWithStatusBar: React.FC<SafeAreaWithStatusBarProps> = ({
    children,
    statusTranslucent = true,
    statusBarBgColor = AppColor.WHITE_COLOR,
    statusBarStyle = 'dark-content',
    safeAreaEdges = ['bottom', 'top', 'left', 'right'],
    safeAreaViewStyle = Styles.safeAreaViewStyle,
    safeAreaMode = 'margin',
}): React.ReactElement => {
    const isFocused = useIsFocused();




    return (
        <LinearGradient
            colors={[AppColor.WHITE_COLOR, AppColor.WHITE_COLOR]}
            locations={[0.22, 0.8]}
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={Styles.statusBarContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>
            <SafeAreaView style={safeAreaViewStyle} edges={safeAreaEdges} mode={safeAreaMode}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    // behavior={'padding'}
                    keyboardVerticalOffset={15}>
                    {isFocused && (
                        <StatusBar
                            animated
                            backgroundColor={statusBarBgColor}
                            translucent={statusTranslucent}
                            barStyle={statusBarStyle}


                        />
                    )}
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default SafeAreaWithStatusBar;
