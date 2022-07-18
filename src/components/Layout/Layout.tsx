import { Box, BoxProps } from '@ds-pack/components'

interface Props extends BoxProps {
  mode: 'condensed' | 'extended' | 'fill'
}

export default function Layout({ mode, ...props }: Props) {
  return (
    <Box
      maxWidth={
        mode === 'condensed'
          ? {
              small: '95vw',
              medium: '75vw',
              large: '55vw',
              extraLarge: '45vw',
            }
          : mode === 'extended'
          ? {
              small: '95vw',
              medium: '85vw',
              large: '65vw',
              extraLarge: '75vw',
            }
          : /* mode === 'fill' */ null
      }
      margin="0 auto"
      {...props}
    />
  )
}
