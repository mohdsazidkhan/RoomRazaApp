import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from './GlobalUrl';
import { AuthData } from './AuthData';

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn(e: any): Promise<void>;
    signOut(): void;
    loginStatus: boolean;
    profileData: any; // Add this line
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [loading, setLoading] = useState(true);
    const [loginStatus, setLoginStatus] = useState(true);
    const [profileData, setProfileData] = useState(null); // Change this line to store profile data

    useEffect(() => {
        loadStorageData();
        fetchProfileData(); // Fetch profile data when the component mounts
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const fetchProfileData = async () => {
        setLoading(true)
        const url = `${API_BASE_URL}/Employee/employee/b4cdcbf2-9cd2-4f8e-914b-d48b75e21b6e`;
        try {
            const response = await axios.get(url);
            const data = response.data.data;
            console.log('profile data ========>', data)
            setProfileData(data); // Set profile data
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error);
        }
    };

    const signIn = async (emp: any) => {
        const _authData = emp;
        setLoginStatus(true);
        setAuthData(_authData);
        await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    };

    const signOut = async () => {
        setAuthData(undefined);
        setLoginStatus(false);
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        <AuthContext.Provider value={{ authData, loading, signIn, signOut, loginStatus, profileData }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthContext, AuthProvider, useAuth };
