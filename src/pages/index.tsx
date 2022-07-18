import { Box, Text } from '@ds-pack/components'
import { Header, Layout } from '../components'
import { intro } from '../landing.css'

export default function Landing() {
  return (
    <>
      <Header />
      <Box className={intro}>
        <Layout mode="condensed">
          <Box p="$10">
            <Text>
              <Text is="strong" fontWeight="bold">
                DS Pack
              </Text>{' '}
              is a collection of packages that provide all the tools 🛠️ you need
              for a design system.
            </Text>
          </Box>
        </Layout>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
