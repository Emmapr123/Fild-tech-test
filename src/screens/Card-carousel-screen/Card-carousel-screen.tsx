import React from 'react'
import { SafeAreaView, 
  Text, 
  View, 
  Dimensions,
  Animated,
  StyleSheet } from 'react-native'
import { CardComponent } from '../../components'

const CardCarouselScreen = () => {

  const data = [{
    id: 1,
    image: 'https://images.unsplash.com/flagged/photo-1570286424640-675cdc1cbd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    location: 'United Kingdom',
    title: 'Virtually Hosted Games - The Night at The Opera House',
    price: '25.50'
  },{
    id: 2,
    image: 'https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1312&q=80',
    location: 'United Kingdom',
    title: 'Virtually Hosted Games - Carnaval Night',
    price: '40.50'
  },{
    id: 3,    
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=862&q=80',
    location: 'Kenya',
    title: 'Live Relaxing Traditional African Meditation',
    price: '10.00'
  },{
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvHoq_ttbDnkaDNJcpUOkI1R9hkXyfyGYbeeTAh9b4Q_g4w0cuKjTod9YzigMtJp08Hg&usqp=CAU',
    location: 'India',
    title: 'Singing Ventriloquism with Yoko',
    price: '45.00'
  },{
    id: 5,
    image: 'https://images.unsplash.com/photo-1611712142269-12b7433e28e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    location: 'Africa',
    title: 'Traditional African Cooking with Gillian',
    price: '30.00'
  }]

  const { width } = Dimensions.get('window')
  const ITEM_SIZE = width * 0.9
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return(
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.headerText}> Online Experiences </Text>
      <Animated.FlatList 
      data={data}
      horizontal
      keyExtractor={(data) => data.title}
      bounces={false}
      ItemSeparatorComponent={() => <View style={{width: width / 30}}/>}
      snapToInterval={ITEM_SIZE + width/38}

      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: scrollX}}}],
        { useNativeDriver: true }
      )}

      // style={}
      decelerationRate={'fast'}
      renderItem={({item, index}) => {
        const inputRange = [
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
              (index + 1) * ITEM_SIZE
            ]

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [.6, 1, .6]
            })

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [.97, 1, .97]
            })

        return (
        <Animated.View style={index === 0 ? {marginLeft: width/30} : {marginLeft: 0} &&
        index === data.length - 1 ? {marginRight: width/30} : {marginRight: 0} && 
        {opacity, transform: [{scale}]}}>
          <CardComponent key={index} card={item} />
        </Animated.View>
        )
      }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24, 
    fontWeight: 'bold', 
    margin: 10, 
    padding: 10
  }
})

export { CardCarouselScreen }