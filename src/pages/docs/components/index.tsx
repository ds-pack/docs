import {
  Heading,
  InlineCode,
  Text,
  Box,
  List,
  ListItem,
  Stack,
  Banner,
  Blockquote,
  Link as ExternalLink,
  Button,
  Checkbox,
} from '@ds-pack/components'
import { Header, Layout, Link } from '../../../components'
import { flow } from '../../../utils.css'

let components = [
  {
    name: 'banner',
    displayName: 'Banner',
    group: 'Display',
  },
  {
    name: 'blockquote',
    displayName: 'Blockquote',
    group: 'Display',
  },
  {
    name: 'box',
    displayName: 'Box',
    group: 'Layout',
  },
  {
    name: 'button',
    displayName: 'Button',
    group: 'Inputs',
  },
  {
    name: 'checkbox',
    displayName: 'Checkbox',
    group: 'Inputs',
  },
  {
    name: 'chip',
    displayName: 'Chip',
    group: 'Display',
  },
  {
    name: 'fieldset',
    displayName: 'Fieldset',
    group: 'Inputs',
  },
  {
    name: 'figure',
    displayName: 'Figure',
    group: 'Display',
  },
  {
    name: 'github-mention',
    displayName: 'GitHubMention',
    group: 'Display',
  },
  {
    name: 'heading',
    displayName: 'Heading',
    group: 'Layout',
  },
  {
    name: 'image',
    displayName: 'Image',
    group: 'Display',
  },
  {
    name: 'inline-code',
    displayName: 'InlineCode',
    group: 'Display',
  },
  {
    name: 'input',
    displayName: 'Input',
    group: 'Inputs',
  },
  {
    name: 'label',
    displayName: 'Label',
    group: 'Inputs',
  },
  {
    name: 'link',
    displayName: 'Link',
    group: 'Display',
  },
  {
    name: 'list',
    displayName: 'List',
    group: 'Display',
  },
  {
    name: 'list-itme',
    displayName: 'ListItem',
    group: 'Display',
  },
  {
    name: 'portal',
    displayName: 'Portal',
    group: 'Utilities',
  },
  {
    name: 'radio-button',
    displayName: 'RadioButton',
    group: 'Inputs',
  },
  {
    name: 'radio-input',
    displayName: 'RadioInput',
    group: 'Inputs',
  },
  {
    name: 'stack',
    displayName: 'Stack',
    group: 'Layout',
  },
  {
    name: 'tapable',
    displayName: 'Tapable',
    group: 'Utilities',
  },
  {
    name: 'text',
    displayName: 'Text',
    group: 'Display',
  },
  {
    name: 'textarea',
    displayName: 'Textarea',
    group: 'Inputs',
  },
  {
    name: 'toggle-input',
    displayName: 'ToggleInput',
    group: 'Inputs',
  },
  {
    name: 'twitter-mention',
    displayName: 'TwitterMention',
    group: 'Display',
  },
  {
    name: 'visually-hidden',
    displayName: 'VisuallyHidden',
    group: 'Utilities',
  },
]

let experimentalComponents = [
  {
    name: 'dropdown',
    displayName: 'Dropdown',
    group: 'Utilities',
  },
]

let groupedComponents = components.reduce((acc, comp) => {
  if (acc[comp.group]) {
    return {
      ...acc,
      [comp.group]: [...acc[comp.group], comp],
    }
  }
  return {
    ...acc,
    [comp.group]: [comp],
  }
}, {})

function ComponentList() {
  return (
    <>
      <Heading mb="$4" is="h2" variant="h3">
        Components:
      </Heading>
      <List ml="$4">
        {components.map((comp) => (
          <ListItem key={comp.name}>
            <ExternalLink is="a" href={`#${comp.name}`} textAlign="center">
              {comp.displayName}
            </ExternalLink>
          </ListItem>
        ))}
      </List>
    </>
  )
}

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
        <Box my="$4">
          <ComponentList />
        </Box>
        <Box my="$4">
          <Box id="banner" my="$6">
            <Heading is="h3" variant="subtitle">
              Banner
            </Heading>
            <Box
              my="$4"
              is="pre"
              bg="$black"
              color="$blue100"
              p="$4"
              borderRadius="$small"
            >
              <code>{`import {Banner} from '@ds-pack/components';`}</code>
            </Box>
            <Text my="$4">
              The <InlineCode>Banner</InlineCode> component can be used to
              display different in-context messages to users.
            </Text>
            <Text mb="$4" display="inline-flex" is="strong" fontWeight="bold">
              Examples:
            </Text>
            <Stack gap="$4">
              <Banner variant="success">Success Banner!</Banner>
              <Banner variant="info">Info Banner!</Banner>
              <Banner variant="error">Error Banner!</Banner>
              <Banner variant="warning">Warning Banner!</Banner>
            </Stack>
          </Box>
          <Box id="blockquote" my="$6">
            <Heading is="h3" variant="subtitle">
              Blockquote
            </Heading>
            <Box
              my="$4"
              is="pre"
              bg="$black"
              color="$blue100"
              p="$4"
              borderRadius="$small"
            >
              <code>{`import {Blockquote} from '@ds-pack/components';`}</code>
            </Box>
            <Text my="$4">
              The <InlineCode>Blockquote</InlineCode> component can be used to
              display a quote.
            </Text>
            <Text mb="$4" display="inline-flex" is="strong" fontWeight="bold">
              Examples:
            </Text>
            <Stack gap="$4">
              <Blockquote>I'm a blockquote!</Blockquote>
            </Stack>
          </Box>
          <Box id="box" my="$6">
            <Heading is="h3" variant="subtitle">
              Box
            </Heading>
            <Box
              my="$4"
              is="pre"
              bg="$black"
              color="$blue100"
              p="$4"
              borderRadius="$small"
            >
              <code>{`import {Box} from '@ds-pack/components';`}</code>
            </Box>
            <Text my="$4">
              The <InlineCode>Box</InlineCode> component is a generic layout
              utility that accepts a wide variety of system-props powered by{' '}
              <ExternalLink
                href="https://www.npmjs.com/package/rainbow-sprinkles"
                is="a"
              >
                Rainbow Sprinkles
              </ExternalLink>
              .
            </Text>
            <Text mb="$4" display="inline-flex" is="strong" fontWeight="bold">
              Examples:
            </Text>
            <Stack gap="$4">
              <Box bg="$yellow300" p="$10">
                I'm a box!
              </Box>
              <Box is="marquee" bg="$teal900" color="$white" p="$6">
                It supports custom elements via the <InlineCode>is</InlineCode>{' '}
                prop!
              </Box>
            </Stack>
          </Box>
          <Box id="button" my="$6">
            <Heading is="h3" variant="subtitle">
              Button
            </Heading>
            <Box
              my="$4"
              is="pre"
              bg="$black"
              color="$blue100"
              p="$4"
              borderRadius="$small"
            >
              <code>{`import {Button} from '@ds-pack/components';`}</code>
            </Box>
            <Text my="$4">
              The <InlineCode>Button</InlineCode> component is used for user
              interactions.
            </Text>
            <Text mb="$4" display="inline-flex" is="strong" fontWeight="bold">
              Examples:
            </Text>
            <Stack gap="$4">
              <Button>Click Me!</Button>
              <Button variant="secondary">Secondary button</Button>
              <Button variant="ghost">Ghost button</Button>
              <Button variant="text">Text button</Button>
            </Stack>
          </Box>
          <Box id="checkbox" my="$6">
            <Heading is="h3" variant="subtitle">
              Checkbox
            </Heading>
            <Box
              my="$4"
              is="pre"
              bg="$black"
              color="$blue100"
              p="$4"
              borderRadius="$small"
            >
              <code>{`import {Checkbox} from '@ds-pack/components';`}</code>
            </Box>
            <Text my="$4">
              The <InlineCode>Checkbox</InlineCode> component allows the user to
              select one or more options in a list.
            </Text>
            <Text mb="$4" display="inline-flex" is="strong" fontWeight="bold">
              Examples:
            </Text>
            <Stack gap="$4">
              <Checkbox>Select me!</Checkbox>
            </Stack>
          </Box>
        </Box>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
