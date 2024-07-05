import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Portal as PaperPortal, Provider as PaperProvider } from 'react-native-paper';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './i18n/IMLocalize';
import Routes from './routes';
import { AuthProvider } from './routes/context/Auth';
import { LogBox } from 'react-native';

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    useEffect(() => {
        LogBox.ignoreLogs(['Warning: ...']);
        LogBox.ignoreAllLogs(); // Ignore all log notifications
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <PaperProvider>
                    <PaperPortal>
                        <SafeAreaProvider>
                            <AuthProvider>
                                <NavigationContainer>
                                    <Routes />
                                </NavigationContainer>
                            </AuthProvider>
                        </SafeAreaProvider>
                    </PaperPortal>
                </PaperProvider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default App;
