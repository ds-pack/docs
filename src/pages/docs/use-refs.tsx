import { Stack, Heading, List, ListItem, InlineCode } from '@ds-pack/components'
import { Header, Layout, Link } from '../../components'

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
          <InlineCode>@ds-pack/use-refs</InlineCode>
        </Heading>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
