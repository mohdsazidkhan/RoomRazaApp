import * as React from 'react';
import { View, ActivityIndicator, Text, Pressable } from 'react-native';
import { AppColor } from '../../../../theme/appColor';
import { SvgImagePath } from '../../../../assets/helper/imagePath';
import { AppFonts } from '../../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize';
import CustomClick from '../../../customClick';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

interface CreateAppointmentProps {
    onPressCall: () => void
    onPressWalkIn: () => void
    onPressSalon: () => void
    onPressHome: () => void
}

const CreateAppointmentModal: React.FC<CreateAppointmentProps> = ({
    onPressCall,
    onPressWalkIn,
    onPressSalon,
    onPressHome,

}): React.ReactElement => {
    const { t } = useTranslation()
    return (
        <View >

            <Text style={styles.modeHeading}>{t('selectYourBookingMode')}</Text>


            <View style={{ flexDirection: 'row' }}>
                <Pressable
                    style={{ flex: 1, alignItems: 'center' }}
                    onPress={onPressCall}>
                    <SvgImagePath.Call />
                    <Text style={styles.textFont}>{t('call')}</Text>
                </Pressable>
                <Pressable
                    style={{ flex: 1, alignItems: 'center' }}
                    onPress={onPressWalkIn}>
                    <SvgImagePath.WalkIn />
                    <Text style={styles.textFont}>{t('walkIn')}</Text>
                </Pressable>

            </View>

            <CustomClick
                title='Create new appointment'
                handlePress={onPressCall} />



            <Text style={styles.modeHeading}>{t('selectYourBookingLocation')}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Pressable
                    style={{ flex: 1, alignItems: 'center' }}
                    onPress={onPressSalon}>
                    <SvgImagePath.Call />
                    <Text style={styles.textFont}>{t('salon')}</Text>
                </Pressable>
                <Pressable
                    style={{ flex: 1, alignItems: 'center' }}
                    onPress={onPressHome}>
                    <SvgImagePath.WalkIn />
                    <Text style={styles.textFont}>{t('home')}</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default CreateAppointmentModal;