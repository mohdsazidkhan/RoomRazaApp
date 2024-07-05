import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppColor } from '../../../theme/appColor';
import { getCustomSize } from '../../../theme/appFontSize';
import styles from './styles';

interface HeaderWithBackButtonProps {
    headerTitle: string;
    headerBgColor?: string;
    backHandle?: () => void;
    backButtonVisibility?: boolean;
    arrowStyle?: string;
}

const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({
    headerTitle = '',
    headerBgColor = AppColor.WHITE_COLOR,
    backHandle,
    backButtonVisibility = true,
    arrowStyle = 'default'
}): React.ReactElement => {
    return (
        <View style={{ ...styles.headerWithBackView, backgroundColor: headerBgColor }}>
            {
                backButtonVisibility &&
                <Pressable style={styles.headerPressableView} onPress={backHandle}>
                    {arrowStyle == 'default'
                        ?
                        <Icon color={AppColor.MSU_GREEN} size={getCustomSize(25)} name='arrow-back' />
                        :
                        <Icon color={AppColor.MSU_GREEN} size={getCustomSize(25)} name='arrow-back-ios' />
                    }
                </Pressable>
            }
            <Text style={styles.headerText} numberOfLines={1}>{headerTitle}</Text>
        </View>
    );
};
export default HeaderWithBackButton;