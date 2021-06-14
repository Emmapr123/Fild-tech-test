import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    Image,
    StyleSheet,
    Animated
  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { LikeButton } from '../../SVGs';
import { Button } from '../Button';
import { CardComponentProps } from './Card-component.types';
import { CardText } from './Card-Text';

const CardComponent = ( {card}: CardComponentProps) => {
  
  const { width, height } = Dimensions.get('window')

  // this liked state will decide the style of the look button
  // Usually this state would be decided by a liked atribute in the database -and the database would be updated onclick
  const [liked, setLiked] = useState(false)
  const buttonAnimation = useRef(new Animated.Value(0)).current;

  // This function changes the state and causes the button to animate or to go back to its original state
  const onLike = () => {
    if (liked) {
      setLiked(false)
    } else {
      setLiked(true) 
      animate()
    }
  }

  const animate = () =>  {
  
  Animated.timing(buttonAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start(
      () => buttonAnimation.setValue(0)
    )

  }

  // This animated the rotation of the button, so that it shakes on click
  const shake = buttonAnimation.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: ['0deg', '9deg', '-6deg', '4deg', '-10deg', '0deg']
    })

  return(
    <View style={{borderRadius: 18, width: width * 0.9, backgroundColor: 'lightgray', flex: 1}}>
      <View style={styles.imageBox}>
         <Image 
          style={{width: width * 0.9, height: height / 3 * 2, borderTopLeftRadius: 18, borderTopRightRadius: 18}}
          source={{uri: card.image}}
        /> 
        {/* This linear gradient makes sure you can still see the like button even when the image is dark */}
        <LinearGradient colors={['transparent', 'lightgray']} style={styles.LinearGradient}>
          <View style={{height:  100}}/>
        </LinearGradient>       
      </View>
      <Animated.View style={{position: 'absolute', top: (height / 3 * 2 ) - 60, left: width - 100, transform: [{rotate: shake}]}}>
      <Button 
        text={<LikeButton size={180} fill={liked ? 'black' : 'none'}/>} 
        onPress={() => onLike()}/>
      </Animated.View>
      <CardText {...{card}} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageBox: {
    position: 'relative'
  },
  LinearGradient: {
    position: 'absolute', 
    left: 0, bottom: 0, right: 0
  }
})

export { CardComponent }