import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'
import { CardComponentProps } from '../Card-component.types';

const CardText = ( {card}:CardComponentProps) => {
  return(
    <View style={styles.textBox}>
      <Text style={styles.location}>{card.location}</Text>
      <View style={styles.title}>
        <Text style={styles.boldText}>{card.title}</Text>
      </View>
      <View style={styles.price}>
        <Text>Starting from</Text>
        <Text style={styles.boldText}>{card.price} GBP</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textBox: {
    flex: 1, 
    position: 'relative',
  },
  location: {
    padding: 10
  },
  boldText: {
    fontWeight: 'bold', 
    fontSize: 24
  },
  title: {
    position: 'absolute', 
    top: 30, left: 10, right: 10
  },
  price: {
    position: 'absolute', 
    bottom: 10, left: 10
  }
})

export { CardText }