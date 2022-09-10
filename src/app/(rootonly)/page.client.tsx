import { Box, Text } from '@ds-pack/components'
import { Header } from '../../components'

function Landing() {
  return (
    <>
      <Header />
      <Box p="$10" backgroundColor="$teal100">
        <Text>
          <Text is="strong" fontWeight="bold">
            DS Pack
          </Text>{' '}
          is a collection of packages that provide all the tools you need for a
          design system.
        </Text>
      </Box>
    </>
  )
}

export default Landing
