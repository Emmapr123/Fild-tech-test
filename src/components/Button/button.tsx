import React from 'react';
import { 
  Text, 
  TouchableOpacity,
} from 'react-native';
import { ButtonProps } from './Button.types';

const Button = ({style, text, onPress}: ButtonProps) => {
  
  // This button can receive any text or SVG, the reason why I prefer making a separate component for it
  // is because the button included in react-native is hard to style
  
  return(
    <TouchableOpacity {...{style, onPress}}>
      <Text style={{fontSize: 24}}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }