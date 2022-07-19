import { Box } from '@ds-pack/components'

export default function Swatch({ backgroundColor, color, ...props }) {
  return (
    <Box
      borderRadius="$medium"
      padding="$4"
      bg={backgroundColor}
      color={color}
      m="$3"
      {...props}
    />
  )
}
