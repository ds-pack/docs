import {
  // Stack,
  // List,
  // ListItem,
  Heading,
  Text,
  InlineCode,
  Link as ExternalLink,
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
          Theme
        </Heading>
        <Text className={flow}>
          The theme for DS Pack is provided as part of the{' '}
          <InlineCode>@ds-pack/components</InlineCode> package. It's shipped as
          a collection of CSS Variables generated via{' '}
          <ExternalLink href="https://vanilla-extract.style/" is="a">
            <InlineCode>@vanilla-extract/css</InlineCode>
          </ExternalLink>
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
