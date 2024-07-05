import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { getCustomSize } from '../../../theme/appFontSize'

interface TargetProgressViewProps {
    achieveTarget?: string
    achieveTargetText?: string
    unAchieveTargetText?: string,
    startValue?: number,
    endValue?: number
}

export default function TargetProgressView(Data: TargetProgressViewProps) {
    const {
        achieveTarget = '50',
        achieveTargetText = '',
        unAchieveTargetText = '',
        startValue,
        endValue
    } = Data;

    return (
        <View style={{marginTop:getCustomSize(20)}}>
            <View style={styles.barView}>
                <Text style={{ ...styles.achieveText, width: achieveTarget + '%' }}>{achieveTargetText}</Text>
                <Text style={styles.unAchieveText}>{unAchieveTargetText}</Text>
            </View>
            <View style={styles.targetView}>
                <Text style={styles.targetText}>{startValue}</Text>
                <Text style={styles.targetText}>{endValue}</Text>
            </View>
        </View>
    )
}
