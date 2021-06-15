import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'
import { CardComponentProps } from '../Card-component.types';

const CardText = ( {card}:CardComponentProps) => {
  return(
    <View style={{flex: 1, position: 'relative'}}>
      <View style={{padding: 10}}>
        <Text>{card.location}</Text>
      </View>
      <View style={{position: 'absolute', top: 30, left: 10, right: 10}}>
        <Text style={styles.boldText}>{card.title}</Text>
      </View>
      <View style={{position: 'absolute', bottom: 10, left: 10}}>
        <Text>Starting from</Text>
        <Text style={styles.boldText}>{card.price} GBP</Text>
      </View>
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