import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "../buttonprops.types"

function ArrowButton(props: IconProps) {

  const { size=24, stroke="#1d1d1b" } = props

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      {...props}
    >
      <Path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2 12l-4.5 4.5 1.527 1.5L17 12l-5.973-6L9.5 7.5 14 12z" 
        stroke={stroke}
        fill={stroke}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export { ArrowButton }