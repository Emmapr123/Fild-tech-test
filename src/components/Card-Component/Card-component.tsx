import React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image
  } from 'react-native'

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

  // console.log(card)

  const { width, height } = Dimensions.get('window')
  return(
    <View style={{borderWidth: 1, borderColor: 'black', borderRadius: 18, width: width * 0.8}}>
      <Image 
      style={{width: width * 0.8, height: height / 3 * 2}}
      source={{uri: card.image}}
      /> 
      <Text>{card.location}</Text>
      <Text>{card.title}</Text>
      <Text>{card.price} GBP</Text>
    </View>
  )
}

export { CardComponent }