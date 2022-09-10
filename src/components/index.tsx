import { Heading, Box } from '@ds-pack/components'
import Link from './Link'

export { default as Header } from './Header'
export { default as Layout } from './Layout'
export { default as Swatch } from './Swatch'
export { default as Footer } from './Footer'
export { Link }

export function PackageList() {
  return (
    <>
      <Heading mb="$4" is="h2" variant="h3">
        DS Pack Packages:
      </Heading>
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link
            border="solid 1px"
            flexGrow="1"
            borderRadius="$small"
            p="$4"
            href="/docs/theme"
            textAlign="center"
          >
            Theme
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link
            border="solid 1px"
            flexGrow="1"
            borderRadius="$small"
            p="$4"
            href="/docs/components"
            textAlign="center"
          >
            Components
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link
            border="solid 1px"
            flexGrow="1"
            borderRadius="$small"
            p="$4"
            href="/docs/use-media"
            textAlign="center"
          >
            useMedia
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link
            border="solid 1px"
            flexGrow="1"
            borderRadius="$small"
            p="$4"
            href="/docs/use-refs"
            textAlign="center"
          >
            useRefs
          </Link>
        </Box>
      </Box>
    </>
  )
}
