import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'
import { CardComponentProps } from '../Card-component.types';

const CardText = ( {card}:CardComponentProps) => {
  return(
    <View style={{padding: 10}}>
    <Text>{card.location}</Text>
    <Text style={styles.boldText}>{card.title}</Text>
    <Text>Starting from</Text>
    <Text style={styles.boldText}>{card.price} GBP</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold', 
    fontSize: 24
  }
})

export { CardText }