import { Stack, Heading, List, ListItem } from '@ds-pack/components'
import { Header, Layout, Link } from '../components'

// @TODO: Fix style composition!
// function StackList(props) {
//   return <Stack is={List} variant="base" {...props} />
// }

export default function Packages() {
  return (
    <>
      <Header />
      <Layout mt="$8" mode="condensed">
        <Heading mb="$4" is="h2" variant="h3">
          DS Pack Packages:
        </Heading>
        <List
          // is={StackList}
          // gap="$2"
          // props={{
          //   is: ListItem,
          // }}
          variant="base"
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
        >
          <ListItem mb="$2">
            <Link
              border="solid 1px"
              flexGrow="1"
              borderRadius="$small"
              p="$4"
              href="/docs/theme"
            >
              Theme
            </Link>
          </ListItem>
          <ListItem mb="$2">
            <Link
              border="solid 1px"
              flexGrow="1"
              borderRadius="$small"
              p="$4"
              href="/docs/components"
            >
              Components
            </Link>
          </ListItem>
          <ListItem>
            <Link
              border="solid 1px"
              flexGrow="1"
              borderRadius="$small"
              p="$4"
              mb="$2"
              href="/docs/use-media"
            >
              useMedia
            </Link>
          </ListItem>
          <ListItem>
            <Link
              border="solid 1px"
              flexGrow="1"
              borderRadius="$small"
              p="$4"
              href="/docs/use-refs"
            >
              useRefs
            </Link>
          </ListItem>
        </List>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
