import { Box, Heading, List, ListItem } from '@ds-pack/components'
import { Header, Link } from '../components'

export default function Packages() {
  return (
    <>
      <Header />
      <Box>
        <Heading is="h2" variant="h3">
          DS Pack Packages:
        </Heading>
        <List>
          <ListItem>
            <Link href="/theme">Theme</Link>
          </ListItem>
          <ListItem>
            <Link href="/components">Components</Link>
          </ListItem>
          <ListItem>
            <Link href="/use-media">useMedia</Link>
          </ListItem>
          <ListItem>
            <Link href="/use-refs">useRefs</Link>
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
