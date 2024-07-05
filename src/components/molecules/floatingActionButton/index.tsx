import React from 'react'
import { AppColor } from '../../../theme/appColor'
import { FloatingAction } from "react-native-floating-action";
import { getCustomSize } from '../../../theme/appFontSize';

interface FloatingButtonProps {
    actions?: any
    itemPress?: () => void
}

export default function FloatingActionButton(params: FloatingButtonProps) {
    const { actions, itemPress } = params;
    return (
        <FloatingAction
            actions={actions}
            color={AppColor.DEEP_SPACE_SPARKLE}
            buttonSize={getCustomSize(70)}
            overrideWithAction={false}
            animated={true}
            onPressItem={itemPress}
        />
    )
}
