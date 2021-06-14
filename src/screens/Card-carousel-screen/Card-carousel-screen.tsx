import React from 'react'
import { FlatList, 
  SafeAreaView, 
  ScrollView, 
  Text, 
  View, 
  Dimensions,
  StyleSheet } from 'react-native'
import { CardComponent } from '../../components'

const CardCarouselScreen = () => {

  const data = [{
    id: 1,
    location: 'United Kingdom',
    title: 'Virtually Hosted Games - The Night at The Opera House',
    price: '25.50'
  },{
    id: 2,
    location: 'United Kingdom',
    title: 'Virtually Hosted Games - Carnaval Night',
    price: '40.50'
  },{
    id: 3,
    location: 'Kenya',
    title: 'Live Relaxing Traditional African Meditation',
    price: '10.00'
  },{
    id: 4,
    location: 'India',
    title: 'Singing Ventriloquism with Yoko',
    price: '45.00'
  },{
    id: 5,
    location: '',
    title: 'Traditional African Cooking with Gillian',
    price: '30.00'
  }]

  const { width, height } = Dimensions.get('window')

  return(
    <SafeAreaView style={{flex: 1}}>
      <Text> Online Experiences </Text>
      <FlatList 
      data={data}
      horizontal
      keyExtractor={(data) => data.title}
      bounces={false}
      ItemSeparatorComponent={() => <View style={{width: width / 10}}/>}
      snapToInterval={width}
      renderItem={({item, index}) => {
        return <CardComponent key={index} card={item} />
      }}
      />
    </SafeAreaView>
  )
}

export { CardCarouselScreen }