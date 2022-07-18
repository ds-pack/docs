import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components/src/vars.css'

export let intro = style({
  background: `linear-gradient(45deg, ${vars.colors.blue100}, ${vars.colors.cyan300})`,
  height: '45vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
