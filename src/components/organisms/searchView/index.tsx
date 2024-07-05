import { KeyboardTypeOptions, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AppColor } from '../../../theme/appColor'
import { KeyboardType } from 'react-native'
import { AppFonts } from '../../../theme/appFont'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import CustomIcon from '../../atoms/customIcon'
import { styles } from './styles'
import { SvgImagePath } from '../../../assets/helper/imagePath'
import * as appMessage from '../../../assets/messages'
import { useTranslation } from 'react-i18next'

// import { AppFonts } from '../../../theme/appFont'
// import { AppFonts } from '../../../theme/appFonts'
interface SearchViewProps {
    labelValue?: string
    onChangeText?: (text: string) => void
    topMargin?: number
    KeyboardType?: KeyboardType
    multiline?: boolean
    maxlength?: number,
    numberOfLines?: number
    placeholder: string
    borderStyle?: string
    leftText?: string
    backgroundColor?: string
    isEditable?: boolean
    showFilter?: boolean
}

export default function CustomSearchView(params: SearchViewProps) {
    const { t } = useTranslation()
    const { onChangeText, labelValue, topMargin, KeyboardType, multiline, maxlength, numberOfLines, placeholder, borderStyle, leftText, backgroundColor = AppColor.WHITE_COLOR, isEditable = true,
        showFilter = false } = params;

    return (
        <View>
            <View style={{
                borderRadius: 15,
                backgroundColor: backgroundColor,
                marginTop: topMargin ? topMargin : 0,
                flex: leftText ? 1 : 0,
                flexDirection: 'row',
                borderColor: borderStyle == 'dark' ? '#16473280' : '#C0C8C4',
                borderWidth: 1,
                paddingHorizontal: 15,
                alignItems: 'center'

            }}>

                <CustomIcon
                    iconName='search'
                    iconColor='#8F959E' />


                <TextInput
                    pointerEvents='none'
                    multiline={multiline ? true : false}
                    maxLength={maxlength}
                    numberOfLines={numberOfLines}
                    onChangeText={(text) => { onChangeText && onChangeText(text) }}
                    value={labelValue}
                    placeholder={placeholder}
                    selectionColor={AppColor.MSU_GREEN}
                    keyboardType={KeyboardType ? KeyboardType : 'default'}
                    autoCapitalize='none'
                    returnKeyType='done'
                    style={{ flex: 1, fontFamily: AppFonts.FontsRegular }}
                    editable={isEditable}
                    placeholderTextColor={AppColor.TAUPE_GRAY}

                />

            </View>


            {showFilter &&
                <View style={styles.filterSortView}>
                    <View style={styles.filterSortSubView}>

                        <SvgImagePath.Filter />

                        <Text style={styles.filterSortText}>{t('filter')}</Text>
                    </View>

                    <View style={styles.filterSortSubView}>
                        <SvgImagePath.Sort />
                        <Text style={styles.filterSortText}>{t('sort')}</Text>
                    </View>
                </View>
            }

        </View>


    )
}
