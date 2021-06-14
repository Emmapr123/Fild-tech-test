import React, { useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet
  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { LikeButton } from '../../SVGs';
import { Button } from '../Button';
import { CardComponentProps } from './Card-component.types';

const CardComponent = ( {card}: CardComponentProps) => {
  
  const { width, height } = Dimensions.get('window')
  const [liked, setLiked] = useState(false)

  console.log(liked)

  return(
    <View style={{borderRadius: 18, width: width * 0.9, backgroundColor: 'lightgray', flex: 1}}>
      <View style={styles.imageBox}>
         <Image 
        style={{width: width * 0.9, height: height / 3 * 2, borderTopLeftRadius: 18, borderTopRightRadius: 18}}
        source={{uri: card.image}}
        /> 
        <LinearGradient colors={['transparent', 'lightgray']} style={styles.LinearGradient}>
          <View style={{height:  100}}/>
        </LinearGradient>       
      </View>
      <Button style={{position: 'absolute', top: (height / 3 * 2 ) - 100, right: 10}} text={<LikeButton fill={liked ? 'black' : 'none'}/>} onPress={() => liked ? setLiked(false) : setLiked(true)}/>
      <View style={{padding: 10}}>
        <Text>{card.location}</Text>
        <Text style={styles.boldText}>{card.title}</Text>
        <Text>Starting from</Text>
        <Text style={styles.boldText}>{card.price} GBP</Text>
      </View>
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
  },
  boldText: {
    fontWeight: 'bold', 
    fontSize: 24
  }
})

export { CardComponent }