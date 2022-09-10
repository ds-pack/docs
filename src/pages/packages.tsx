import { Box } from '@ds-pack/components'
import { Header, Layout, PackageList, Footer } from '../components'

export default function Packages() {
  return (
    <Box is="main" minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flexGrow="1">
        <Layout mt="$8" mode="condensed">
          <PackageList />
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
