import { View, Text, ScrollView, Pressable, Modal, TouchableOpacity, Linking, Button, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar';
import HeaderWithBackButton from '../../../components/atoms/header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/screen';
import { styles } from './styles';
import { SvgImagePath } from '../../../assets/helper/imagePath';
import { useTranslation } from 'react-i18next';
import { API_BASE_URL } from '../../../routes/context/GlobalUrl';
import axios from 'axios';
import { useAuth } from '../../../routes/context/Auth';

type Props = NativeStackScreenProps<RootStackParamList, 'DocumentScreen'>;

export default function DocumentScreen({ navigation }: Props) {
    const { t } = useTranslation();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDocumentType, setSelectedDocumentType] = useState('');

    const toggleModal = (documentType: string) => {
        setSelectedDocumentType(documentType);
        setIsModalVisible(!isModalVisible);
    };



    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton headerTitle={t('document')} backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    {/* <Text style={styles.titleText}>{t('selectYourDocumentType')}</Text> */}

                    <View style={styles.docView}>
                        <Pressable onPress={() => toggleModal('KYC')} style={styles.docPressable}>
                            <SvgImagePath.LargeDocument />
                            <Text style={styles.docTitle}>{t('kyc')}</Text>
                        </Pressable>

                        <Pressable onPress={() => toggleModal('Experience')} style={styles.docPressable}>
                            <SvgImagePath.LargeDocument />
                            <Text style={styles.docTitle}>{t('experience')}</Text>
                        </Pressable>

                        <Pressable onPress={() => toggleModal('Educational')} style={styles.docPressable}>
                            <SvgImagePath.LargeDocument />
                            <Text style={styles.docTitle}>{t('educational')}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.docView}>
                        <Pressable onPress={() => toggleModal('Professional')} style={styles.docPressable}>
                            <SvgImagePath.LargeDocument />
                            <Text style={styles.docTitle}>{t('professional')}</Text>
                        </Pressable>

                        <Pressable onPress={() => toggleModal('Others')} style={styles.docPressable}>
                            <SvgImagePath.LargeDocument />
                            <Text style={styles.docTitle}>{t('others')}</Text>
                        </Pressable>
                    </View>
                </View>

                <HalfScreenModal isVisible={isModalVisible} closeModal={() => setIsModalVisible(false)} documentType={selectedDocumentType} />
            </ScrollView>
        </SafeAreaWithStatusBar>
    );
}

const HalfScreenModal = ({ isVisible, closeModal, documentType }: { isVisible: boolean; closeModal: () => void; documentType: string }) => {
    const { t } = useTranslation();
    const { profileData, loading } = useAuth();

    const [formData, setFormData] = useState({
        aadharNumberFile: profileData?.aadharNumberFile || '',
        panNumberFile: profileData?.panNumberFile || '',
        passportNumberFile: profileData?.passportNumberFile || '',
        experience: profileData?.documents?.experienceDocuments?.map(doc => ({
            documentFilePath: doc.documentFilePath,
            documentName: doc.documentName
        })) || [],
        education: profileData?.documents?.educationalDocuments?.map(doc => ({
            documentFilePath: doc.documentFilePath,
            documentName: doc.documentName
        })) || [],
        professional: profileData?.documents?.professionalDocuments?.map(doc => ({
            documentFilePath: doc.documentFilePath,
            documentName: doc.documentName
        })) || []
    });



    const handleDownload = (url: string) => {
        Linking.openURL(url);
    };
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
        <Modal animationType='fade' transparent={true} visible={isVisible} onRequestClose={closeModal}>
            <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={closeModal}>
                <View style={styles.modalContent}>
                    <Text style={{ marginBottom: 15, fontWeight: '700', color: 'black' }}>{documentType}</Text>
                    {documentType === 'KYC' ? (
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            {formData.aadharNumberFile.length > 0 ? (
                                <Pressable onPress={() => handleDownload(formData.aadharNumberFile)} style={styles.pressable}>
                                    <Text style={styles.txt}>AadharCard.pdf</Text>
                                    <SvgImagePath.download />
                                </Pressable>
                            ) : null}
                            {formData.panNumberFile.length > 0 ? (
                                <Pressable onPress={() => handleDownload(formData.panNumberFile)} style={styles.pressable}>
                                    <Text style={styles.txt}>PanCard.pdf</Text>
                                    <SvgImagePath.download />
                                </Pressable>
                            ) : null}
                            {formData.passportNumberFile.length > 0 ? (
                                <Pressable onPress={() => handleDownload(formData.passportNumberFile)} style={styles.pressable}>
                                    <Text style={styles.txt}>Passport.pdf</Text>
                                    <SvgImagePath.download />
                                </Pressable>
                            ) : null}
                        </View>
                    ) : null}

                    {documentType === 'Experience' ? (
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            {formData.experience.length > 0 ? (
                                formData.experience.map((doc, index) => (
                                    <View key={index}>
                                        <Pressable onPress={() => handleDownload(doc.documentFilePath)} style={styles.pressable}>
                                            <Text style={{ color: 'black', marginHorizontal: 5 }}>Document Name: {doc.documentName}</Text>

                                            <SvgImagePath.download />
                                        </Pressable>
                                    </View>
                                ))
                            ) : (
                                <Text style={{ color: 'black' }}>No experience documents available.</Text>
                            )}
                        </View>
                    ) : null}
                    {documentType === 'Educational' ? (
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            {formData.education.length > 0 ? (
                                formData.education.map((doc, index) => (
                                    <View key={index}>
                                        <Pressable onPress={() => handleDownload(doc.documentFilePath)} style={styles.pressable}>
                                            <Text style={{ color: 'black', marginHorizontal: 5 }}>Document Name: {doc.documentName}</Text>

                                            <SvgImagePath.download />
                                        </Pressable>
                                    </View>
                                ))
                            ) : (
                                <Text style={{ color: 'black' }}>No Educational documents available.</Text>
                            )}
                        </View>
                    ) : null}
                    {documentType === 'Professional' ? (
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            {formData.professional.length > 0 ? (
                                formData.professional.map((doc, index) => (
                                    <View key={index}>
                                        <Pressable onPress={() => handleDownload(doc.documentFilePath)} style={styles.pressable}>
                                            <Text style={{ color: 'black', marginHorizontal: 5 }}>Document Name: {doc.documentName}</Text>

                                            <SvgImagePath.download />
                                        </Pressable>
                                    </View>
                                ))
                            ) : (
                                <Text style={{ color: 'black' }}>No professional documents available.</Text>
                            )}
                        </View>
                    ) : null}
                    {documentType === 'Others' ? (
                        <Text style={{ color: 'black', textAlign: 'center' }}>No others documents available.</Text>
                    ) : null}

                </View>
            </TouchableOpacity>
        </Modal>
    );
};

