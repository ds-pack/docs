import {
  Stack,
  // List,
  // ListItem,
  Box,
  Heading,
  Text,
  InlineCode,
  Link as ExternalLink,
  vars,
} from '@ds-pack/components'
import { Header, Layout, Link, Swatch } from '../../components'
import { flow } from '../../utils.css'

// @TODO: Fix style composition!
// function StackList(props) {
//   return <Stack is={List} variant="base" {...props} />
// }

let colors = Object.keys(vars.colors)

let named = [
  'white',
  'black',
  'primary',
  'secondary',
  'tertiary',
  'primaryLight',
  'secondaryLight',
  'tertiaryLight',
  'primaryDark',
  'secondaryDark',
  'tertiaryDark',
  'disabledFill',
  'disabledBg',
]
let namedColors = colors.filter((color: string) => named.includes(color))
let scaleColors = colors.filter((color: string) => !named.includes(color))

let chunkedScaleColors = scaleColors.reduce(
  (acc, color) => {
    if (acc[acc.length - 1].length === 10) {
      return [...acc, [color]]
    }
    let [last, ...prev] = acc.reverse()
    return [...prev.reverse(), [...last, color]]
  },
  [[]],
)

function getContrast(backgroundColor: string) {
  let nums = backgroundColor.split('').reverse().slice(0, 3).reverse().join('')
  if (Number(nums) < 500) {
    return '$black'
  }
  return '$white'
}

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
        <Box mb="$10" />
        <Heading is="h4" variant="subHead">
          Color Scale:
        </Heading>
        <Text className={flow}>
          There is a basic color scale available as part of the theme.
        </Text>
        <Stack gap="$4">
          {chunkedScaleColors.map((colors) => (
            <Box
              key={colors.join()}
              display="grid"
              gridTemplateColumns={{
                _: '1fr',
                small: '1fr 1fr',
                medium: '1fr 1fr 1fr',
                large: '1fr 1fr 1fr 1fr',
              }}
            >
              {colors.map((key) => (
                <Swatch
                  key={key}
                  backgroundColor={`$${key}`}
                  color={getContrast(key)}
                >
                  {key}
                </Swatch>
              ))}
            </Box>
          ))}
        </Stack>
        <Box mb="$10" />
        <Heading is="h4" variant="subHead">
          Named Colors:
        </Heading>
        <Text className={flow}>
          There are some special named colors included within the theme for
          specific use cases:
        </Text>
        <Box mb="$10" />
        <Stack gap="$4">
          <Box>
            <Text>
              Black and White, primarily for backgrounds and text color
            </Text>
            <Box
              display="grid"
              gridTemplateColumns={{
                _: '1fr',
                small: '1fr 1fr',
              }}
            >
              <Swatch backgroundColor="$black" color="$white">
                black
              </Swatch>
              <Swatch backgroundColor="$white" color="$black">
                white
              </Swatch>
            </Box>
          </Box>
          <Box>
            <Text>
              Disabled colors, primarily for backgrounds and text colors on
              disabled elements
            </Text>
            <Box
              display="grid"
              gridTemplateColumns={{
                _: '1fr',
                small: '1fr 1fr',
              }}
            >
              <Swatch backgroundColor="$disabledFill" color="$white">
                disabledFill
              </Swatch>
              <Swatch backgroundColor="$disabledBg" color="$black">
                disabledBg
              </Swatch>
            </Box>
          </Box>
          <Box>
            <Text>
              Accent colors, primarily for backgrounds on action-oriented
              elements
            </Text>
            <Box
              display="grid"
              gridTemplateColumns={{
                _: '1fr',
                small: '1fr 1fr',
                medium: '1fr 1fr 1fr',
              }}
            >
              <Swatch backgroundColor="$primaryLight" color="$black">
                primaryLight
              </Swatch>
              <Swatch backgroundColor="$primary" color="$white">
                primary
              </Swatch>
              <Swatch backgroundColor="$primaryDark" color="$white">
                primaryDark
              </Swatch>
            </Box>
            <Box
              display="grid"
              gridTemplateColumns={{
                _: '1fr',
                small: '1fr 1fr',
                medium: '1fr 1fr 1fr',
              }}
            >
              <Swatch backgroundColor="$secondaryLight" color="$black">
                secondaryLight
              </Swatch>
              <Swatch backgroundColor="$secondary" color="$white">
                secondary
              </Swatch>
              <Swatch backgroundColor="$secondaryDark" color="$white">
                secondaryDark
              </Swatch>
            </Box>
            <Box
              display="grid"
              gridTemplateColumns={{
                _: '1fr',
                small: '1fr 1fr',
                medium: '1fr 1fr 1fr',
              }}
            >
              <Swatch backgroundColor="$tertiaryLight" color="$black">
                tertiaryLight
              </Swatch>
              <Swatch backgroundColor="$tertiary" color="$white">
                tertiary
              </Swatch>
              <Swatch backgroundColor="$tertiaryDark" color="$white">
                tertiaryDark
              </Swatch>
            </Box>
          </Box>
        </Stack>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
