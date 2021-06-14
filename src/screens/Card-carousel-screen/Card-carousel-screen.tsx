import React from 'react'
import { Text, View } from 'react-native'

const CardCarouselScreen = () => {

  const data = [{
    id: 1,
    location: 'United Kingdom',
    title: 'Virtually Hosted Games - The Night at The Opera House',
    price: 25.50
  },{
    id: 2,
    location: 'United Kingdom',
    title: 'Virtually Hosted Games - Carnaval Night',
    price: 40.50
  },{
    id: 3,
    location: 'Kenya',
    title: 'Live Relaxing Traditional African Meditation',
    price: 10.00 
  },{
    id: 4,
    location: 'India',
    title: 'Singing Ventriloquism with Yoko',
    price: 45.00
  },{
    id: 5,
    location: '',
    title: 'Traditional African Cooking with Gillian',
    price: 30.00
  }]
  
  return(
    <View>
      <Text>Hello World</Text>
    </View>
  )
}

export { CardCarouselScreen }