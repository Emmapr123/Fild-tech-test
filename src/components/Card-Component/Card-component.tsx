import React, { useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image
  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { LikeButton } from '../../SVGs';
import { Button } from '../Button';

interface Card {
  id: number,
  image: string,
  location: string,
  title: string,
  price: string
}

interface CardComponentProps {
  card: Card
}

const CardComponent = ( {card}: CardComponentProps) => {
  
  const { width, height } = Dimensions.get('window')
  const [liked, setLiked] = useState(false)

  console.log(liked)

  return(
    <View style={{borderRadius: 18, width: width * 0.9, backgroundColor: 'lightgray', flex: 1}}>
      <View style={{position: 'relative'}}>
         <Image 
        style={{width: width * 0.9, height: height / 3 * 2, borderTopLeftRadius: 18, borderTopRightRadius: 18}}
        source={{uri: card.image}}
        /> 
        <LinearGradient colors={['transparent', 'lightgray']} style={{position: 'absolute', left: 0, bottom: 0, right: 0}}>
          <View style={{height:  100}}/>
        </LinearGradient>       
      </View>
      <Button style={{position: 'absolute', top: (height / 3 * 2 ) - 100, right: 10}} text={<LikeButton fill={liked ? 'black' : 'none'}/>} onPress={() => liked ? setLiked(false) : setLiked(true)}/>
      <View style={{padding: 10}}>
        <Text>{card.location}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>{card.title}</Text>
        <Text>Starting from</Text>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>{card.price} GBP</Text>
      </View>
    </View>
  )
}

export { CardComponent }