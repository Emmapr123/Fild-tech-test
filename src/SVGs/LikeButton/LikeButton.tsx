import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "../buttonprops.types"

function LikeButton(props: IconProps) {

  const { size=24, color="#1d1d1b", fill="none" } = props

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 113.95 111.6"
      {...props}
    >
      <Path
        d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"        
        fill={fill}
        stroke={color}
        strokeWidth={0.9}
      />
    </Svg>
  )
}

export { LikeButton }
