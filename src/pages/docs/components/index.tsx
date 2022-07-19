import {
  Stack,
  List,
  ListItem,
  Heading,
  InlineCode,
  Text,
} from '@ds-pack/components'
import { Header, Layout, Link } from '../../../components'
import { flow } from '../../../utils.css'

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
          <InlineCode>@ds-pack/components</InlineCode>
        </Heading>
        <Text className={flow}>
          The components package offers a selection of composable React
          components, all built on top of a shared generic{' '}
          <InlineCode>{`<Box />`}</InlineCode> component.
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
