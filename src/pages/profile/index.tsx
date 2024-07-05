import { View, Text, Pressable, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../components/molecules/safeAreaWithStatusBar'
import { AppColor } from '../../theme/appColor'
import { useAuth } from '../../routes/context/Auth'
import { styles } from './styles'
import { DEMO_GIRL_IMAGE,SvgImagePath } from '../../assets/helper/imagePath'
import { AppFontSize, getCustomSize } from '../../theme/appFontSize'
import { AppFonts } from '../../theme/appFont'
import CustomIcon from '../../components/atoms/customIcon'
import DividerView from '../../components/atoms/dividerView'
import { ProgressBar } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/screen'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>
export default function ProfileScreen({ navigation }: Props) {
  const { t } = useTranslation()
  const auth = useAuth();
  const { profileData, } = useAuth(); // Get profileData and loading from context

  return (
    <SafeAreaWithStatusBar>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>


          <ImageBackground
         source={{ uri: DEMO_GIRL_IMAGE }}
            style={styles.coverImage}>

            <View style={styles.editView}>
              <Pressable style={styles.editPressable}>
                <SvgImagePath.Edit />
              </Pressable>

              <Pressable style={styles.sharePressable}>
                <Text style={styles.shareText}>{t('share')}</Text>
                <SvgImagePath.Upload />
              </Pressable>
            </View>


            <View style={styles.nameView}>
              <Pressable style={{ padding: getCustomSize(8) }}>
                <Text style={styles.nameText}>{profileData?.firstName} {profileData?.lastName}</Text>
                <Text style={styles.dateText}>{t('lastLogin')} 20/01/23</Text>
              </Pressable>

              <Pressable style={styles.starViewPress}>
                <Text style={{
                  color: AppColor.WHITE_COLOR,
                  fontFamily: AppFonts.FontsMedium,
                  fontSize: getCustomSize(AppFontSize.FontsSize_18),
                  marginLeft: getCustomSize(10)
                }}>stars</Text>
                <Text style={styles.starText}>4.0</Text>
              </Pressable>
            </View>
          </ImageBackground>






          <View style={styles.profileMainContainer}>
            <Pressable style={styles.profileStatusView}>
              <View style={styles.profileCompletionView}>
                <Text style={styles.profileCompText}>{t('profileCompletion')}</Text>
                <Text style={styles.profileCompText}>67%</Text>
              </View>

              <ProgressBar
                style={styles.progressBarView}
                color={AppColor.DEEP_SPACE_SPARKLE}
                animatedValue={0.5} />
            </Pressable>


            <Pressable
              style={{ ...styles.profileMenuPressable, marginTop: getCustomSize(20) }}
              onPress={() => navigation.navigate('MyProfileScreen')}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.profile}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('myProfile')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />


            <Pressable
              style={styles.profileMenuPressable}
              onPress={() => navigation.navigate('BusinessLogScreen')}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.Business}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('businessLog')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />


            <Pressable
              style={styles.profileMenuPressable}
              onPress={() => navigation.navigate('IncentiveEarnedScreen')}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.Incentive}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('incentiveCommissionEarned')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />


            <Pressable
              style={styles.profileMenuPressable}
              onPress={() => navigation.navigate('ManageToolKitScreen')} >
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.manage}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('manageToolKit')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />


            <Pressable
              style={styles.profileMenuPressable}
              onPress={() => navigation.navigate('ServiceAvailScreen')}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.service}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('serviceAvailedLog')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />


            <Pressable
              style={styles.profileMenuPressable}
              onPress={() => navigation.navigate('TermConditionScreen')}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.terms}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('termsConditions')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />


            <Pressable style={styles.profileMenuPressable}
              onPress={() => navigation.navigate('TrainingScreen')}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.traing}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('training')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />

            <Pressable
              style={styles.profileMenuPressable}
              onPress={() => navigation.navigate('SalaryScreen')}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.salary}
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('salary')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

            <DividerView marginVertical={getCustomSize(20)} />
            <Pressable style={styles.profileMenuPressable}
              onPress={() => auth.signOut()}>
              <View style={styles.profileMenuSubView}>
                <View style={styles.profileMenuImageView}>
                  <Image
                    source={SvgImagePath.logOut }
                    style={styles.profileMenuImage} />
                </View>

                <View style={styles.profileMenuTextView}>
                  <Text style={styles.profileMenuTitle}>{t('logout')}</Text>
                  <Text style={styles.profileTitleDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                </View>
              </View>
              <View >
                <CustomIcon
                  iconName='chevron-right'
                  iconColor={AppColor.TAUPE_GRAY} />
              </View>
            </Pressable>

          </View>
        </View>
      </ScrollView>
    </SafeAreaWithStatusBar>
  )
}