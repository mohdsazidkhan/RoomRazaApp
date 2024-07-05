import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar';
import HeaderWithBackButton from '../../../components/atoms/header';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/screen';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../routes/context/Auth';
import { getCustomSize } from '../../../theme/appFontSize';
import PaperTextInput from '../../../components/molecules/paperTextInput';

type Props = NativeStackScreenProps<RootStackParamList, 'JobProfileScreen'>;
export default function JobProfileScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const { profileData, loading } = useAuth(); // Get profileData and loading from context

    const [buttonLoad, setButtonLoad] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

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
         
            <HeaderWithBackButton headerTitle={t('jobProfile')} backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.categoryHeading}>{t('Categories')}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {profileData?.categories && profileData.categories.map((item, index) => (
                            <Pressable
                                key={index}
                                style={[
                                    styles.categoryMenuView,
                                    {
                                        backgroundColor: selectedItems.includes(item.referenceId) ? 'lightblue' : 'white',
                                        padding: 3,
                                        borderRadius: 5,
                                        borderWidth: selectedItems.includes(item.referenceId) ? 1 : 0,
                                    },
                                ]}
                            >
                                <Text style={styles.categoryTitle}>{item.categoryName}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    <Text style={styles.categoryHeading}>{t('Sub Categories')}</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {profileData?.subcategories && profileData.subcategories.map((item, index) => (
                            <Pressable style={[styles.categoryMenuView]} key={index}>
                                <Text style={styles.categoryTitle}>{item.subCategoryName}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    <Text style={styles.categoryHeading}>{t('Services')}</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {profileData?.services && profileData.services.map((item, index) => (
                            <Pressable style={[styles.categoryMenuView]} key={index}>
                                <Text style={styles.categoryTitle}>{item.name}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    <Text style={styles.categoryHeading}>{t('Employee type')}</Text>
                    <Text style={[styles.categoryTitle, { borderWidth: 0 }]}>{profileData?.employeeTypeName}</Text>
                    {/* <PaperTextInput
                        isEditable={false}
                        label={t('Employee type')}
                        topMargin={getCustomSize(20)}
                        labelValue={profileData?.employeeTypeName}
                    /> */}

                    <Text style={styles.categoryHeading}>{t('Designation')}</Text>
                    <Text style={[styles.categoryTitle, { borderWidth: 0 }]}>{profileData?.designationName}</Text>

                    <Text style={styles.categoryHeading}>{t('Employment type')}</Text>
                    <Text style={[styles.categoryTitle, { borderWidth: 0 }]}>{profileData?.employmentTypeName}</Text>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    );
}
