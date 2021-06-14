import React from 'react'
import { SafeAreaView, 
  Text, 
  View, 
  Dimensions,
  Animated,
  StyleSheet } from 'react-native'
import { CardComponent } from '../../components'

const CardCarouselScreen = () => {

  // This is just data to use in this example - usually I would use axios to do a get request to the backend/database
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
      {/* I am using an animated flatlist to optimise the visual aspect of the items that are not in focus */}
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
      decelerationRate={'fast'}
      renderItem={({item, index}) => {

        // The inputrage will be the same for all my animations so to keep it DRY I define that here
        const inputRange = [
          (index - 1) * ITEM_SIZE,
          index * ITEM_SIZE,
          (index + 1) * ITEM_SIZE,
          (index + 2) * ITEM_SIZE,
        ]

        // These two define the opacity and scale changes when you scroll through the list - used in style
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [.6, 1, .6, 0.3]
        })

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [.9, 1, .95, 0.9]
        })
        
          // In this style I use turneries that look at the index to decide if they are the first or last one
          // If they are first or last, i give them a padding so they will remain in the middle
        const style = {
          marginLeft: index == 0 ? width/30 : 0,
          marginRight: index === data.length - 1 ? width / 30 : 0,
          opacity,
          transform: [{scaleY: scale}]
        }
        return (
        <Animated.View style={style}>
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