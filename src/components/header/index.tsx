import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {ImagePath} from '../../assets/helper/imagePath';
import IconButton from '../iconButton';
import Styles from './styles';
import { useAuth } from '../../routes/context/Auth';

interface HeaderProps {
  backHanlder: () => void;
}
const Header: React.FC<HeaderProps> = ({backHanlder}) => {
  const { profileData, loading } = useAuth(); // Get profileData and loading from context

  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <Pressable onPress={backHanlder}>
          <Image
            source={ImagePath.backArrow}
            style={{width: 21, height: 17, marginBottom: 12, marginRight: 12}}
            resizeMode="contain"
          />
        </Pressable>
        <Image

          source={{uri:profileData?.photoFile ||ImagePath.Group}}
          
          // parentStyle={{width: 63, height: 63}}
          // childStyle={{width: 50, height: 50,borderRadius: 50 / 2,}}
          style={{ height: 50, width: 50, borderRadius: 50 / 2, marginRight: 10, borderWidth: 2, borderColor: "#BFB5FF",  }} />
       
        <View style={Styles.textContainer}>
          <View style={Styles.leftContainer}>
            <Image
              source={ImagePath.hand}
              style={{width: 14, height: 13, marginRight: 8}}
              resizeMode="contain"
            />
            <Text style={Styles.greetingText}>Hello!</Text>
          </View>
          <Text style={Styles.usernameText}>{profileData?.firstName}{profileData?.lastName}</Text>
        </View>
      </View>
      <IconButton imageSource={ImagePath.notificationOutline} />
    </View>
  );
};

export default Header;
