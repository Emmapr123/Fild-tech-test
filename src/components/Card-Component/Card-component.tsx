import React, { useState } from 'react';
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
  
  const { width, height } = Dimensions.get('window')
  const [liked, setLiked] = useState(false)

  return(
    <View style={{borderRadius: 18, width: width * 0.9, backgroundColor: 'lightgray', flex: 1}}>
      <Image 
      style={{width: width * 0.9, height: height / 3 * 2, borderTopLeftRadius: 18, borderTopRightRadius: 18}}
      source={{uri: card.image}}
      /> 
      
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