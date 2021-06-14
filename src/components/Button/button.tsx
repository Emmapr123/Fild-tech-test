import React, { ReactNode } from 'react';
import { 
  StyleProp,
  Text, 
  TouchableOpacity,
  ViewStyle
} from 'react-native';

interface ButtonProps {
  style?: StyleProp<ViewStyle>, 
  text?: string | ReactNode, 
  onPress: () => void
}

const Button = ({style, text, onPress}: ButtonProps) => {

  return(
    <TouchableOpacity {...{style, onPress}}>
      <Text style={{fontSize: 24}}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }