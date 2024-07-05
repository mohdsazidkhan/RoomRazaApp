import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, Pressable, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppColor } from '../../../theme/appColor';
import LinearGradient from 'react-native-linear-gradient';
import { getCustomSize } from '../../../theme/appFontSize';
import styles from './styles';

interface GradientHeaderWithBackButtonProps {
    headerTitle?: string;
    headerBgColor?: string;
    backHandle?: () => void;
    backButtonVisibility?: boolean;
    arrowStyle?: string;
    textColor?: string;
    imageUrl?: string; 
}

const GradientHeaderWithBackButton: React.FC<GradientHeaderWithBackButtonProps> = ({
    headerTitle = '',
    headerBgColor = 'transparent',
    backHandle,
    backButtonVisibility = true,
    arrowStyle = 'default',
    imageUrl = 'https://i.pinimg.com/originals/09/ee/97/09ee9790e4a873be73302693a56a9bf6.jpg', 
    textColor = AppColor.WHITE_COLOR
}): React.ReactElement => {
    return (
        <View style={{ ...styles.gradientHeaderWithBackView, backgroundColor: headerBgColor }}>
            <LinearGradient

                colors={['transparent', 'transparent']}
                locations={[0.22, 0.8]}
                useAngle={true}
                angle={0}
                style={styles.linearGradientView}
                angleCenter={{ x: 0.5, y: 0.5 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>


                {
                    backButtonVisibility &&
                    <Pressable style={styles.gradientHeaderPressable} onPress={backHandle}>
                        {arrowStyle == 'default'
                            ?
                            <Icon color={AppColor.WHITE_COLOR} size={25} name='arrow-back' />
                            :
                            <Icon color={AppColor.WHITE_COLOR} size={25} name='arrow-back-ios' />
                        }
                    </Pressable>
                }

                <Image
                 source={{ uri: imageUrl }}
                    // source={{ uri: 'https://i.pinimg.com/originals/09/ee/97/09ee9790e4a873be73302693a56a9bf6.jpg' }}
                    style={{ height: 35, width: 35, borderRadius: 35 / 2, marginRight: 10, borderWidth: 2, borderColor: "#BFB5FF", marginHorizontal: backButtonVisibility ? 0 : getCustomSize(20) }} />

                <Text style={{ ...styles.headerText, color: textColor }}>{headerTitle}</Text>


            </LinearGradient>
        </View>
    );
};
export default GradientHeaderWithBackButton;