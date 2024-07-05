import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  ViewStyle,
} from 'react-native';
import Styles from './styles';

interface IconButtonProps {
  imageSource: ImageSourcePropType;
  parentStyle?: ViewStyle;
  childStyle?: ImageStyle;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  imageSource,
  parentStyle,
  childStyle,
  onPress,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={[Styles.container, parentStyle]}>
      <Image
        style={[Styles.image, childStyle]}
        source={imageSource}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default IconButton;
