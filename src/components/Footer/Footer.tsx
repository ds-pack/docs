import { Box, Link } from '@ds-pack/components'

let date = new Date()

export default function Footer() {
  return (
    <Box
      p="$4"
      backgroundColor="$blue100"
      minHeight="80px"
      is="footer"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        Created by{' '}
        <Link href="https://matthamlin.me" is="a">
          Matt Hamlin
        </Link>
      </Box>
      <Box>©️ {date.getFullYear()}</Box>
    </Box>
  )
}
