import { Box, Heading } from '@ds-pack/components'
import Link from '../Link'

export default function Header(props) {
  return (
    <Box
      p="$4"
      backgroundColor="$blue100"
      minHeight="80px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Box
        flexGrow={1}
        minWidth="100%"
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Heading is="h1" variant="h3">
          <Link href="/">DS Pack</Link>
        </Heading>
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
          <Link href="/packages">Packages 📦</Link>
        </Box>
      </Box>
    </Box>
  )
}
