import { Box, Text } from '@ds-pack/components'
import { Header, Layout, Footer, PackageList } from '../components'
import { intro } from '../landing.css'

export default function Landing() {
  return (
    <Box is="main" minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flexGrow="1">
        <Box className={intro}>
          <Layout mode="condensed">
            <Box p="$10">
              <Text>
                <Text is="strong" fontWeight="bold">
                  DS Pack
                </Text>{' '}
                is a collection of packages that provide all the tools 🛠️ you
                need for a design system.
              </Text>
            </Box>
          </Layout>
        </Box>
        <Layout mode="condensed">
          <Box p="$4">
            <PackageList />
          </Box>
        </Layout>
      </Box>
      <Footer />
    </Box>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
