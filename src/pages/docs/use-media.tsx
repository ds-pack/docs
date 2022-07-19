import {
  // Stack,
  // List,
  // ListItem,
  Heading,
  InlineCode,
  Text,
} from '@ds-pack/components'
import { Header, Layout, Link } from '../../components'
import { flow } from '../../utils.css'

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
          <InlineCode>@ds-pack/use-media</InlineCode>
        </Heading>
        <Text className={flow}>
          <InlineCode>useMedia</InlineCode> is a utility hook that can be used
          to match against a specific <InlineCode>MediaQuery</InlineCode>, that
          is also safe for server side rendering!
        </Text>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
