import { StyleProp, ViewStyle } from "react-native";

export interface Card {
  id: number,
  image: string,
  location: string,
  title: string,
  price: string
}

export interface CardComponentProps {
  card: Card
  style?: StyleProp<ViewStyle>,
}