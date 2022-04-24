import type { PropsType } from '../types'
import { Button } from '../components'

const Variants = () => {
  return (
    <>
      <Button variant='text'>Text</Button> <Button variant='filled'>Filled</Button> <Button variant='outlined'>Outlined</Button>
    </>
  )
}

const Text = () => {
  return (
    <>
      <Button variant='text'>Default</Button> <Button variant='text'>Disabled</Button> <Button variant='text'>Active</Button> <Button variant='text'>Link</Button>
    </>
  )
}

const Filled = () => {
  return (
    <>
      <Button variant='filled'>Default</Button> <Button variant='filled'>Disabled</Button> <Button variant='filled'>Active</Button> <Button variant='filled'>Link</Button>
    </>
  )
}

const Outlined = () => {
  return (
    <>
      <Button variant='outlined'>Default</Button> <Button variant='outlined'>Disabled</Button> <Button variant='outlined'>Active</Button> <Button variant='outlined'>Link</Button>
    </>
  )
}

const Sizes = () => {
  return (
    <>
      <div className='mb'>
        <Button variant='text' size='sm'>
          Small
        </Button>{' '}
        <Button variant='text' size='md'>
          Medium
        </Button>{' '}
        <Button variant='text' size='lg'>
          Large
        </Button>
      </div>
      <div className='mb'>
        <Button variant='filled' size='sm'>
          Small
        </Button>{' '}
        <Button variant='filled' size='md'>
          Medium
        </Button>{' '}
        <Button variant='filled' size='lg'>
          Large
        </Button>
      </div>
      <div>
        <Button variant='outlined' size='sm'>
          Small
        </Button>{' '}
        <Button variant='outlined' size='md'>
          Medium
        </Button>{' '}
        <Button variant='outlined' size='lg'>
          Large
        </Button>
      </div>
    </>
  )
}

export default {
  component: 'Button',
  description: 'Custom Buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.',
}

export const props: PropsType = [
  { hierarchy: 1, title: 'Variants', jsx: Variants, desc: 'The Button comes with three variants: text (default), filled, and outlined.' },
  { hierarchy: 2, title: 'Text', jsx: Text, desc: 'Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.' },
  { hierarchy: 2, title: 'Filled', jsx: Filled, desc: 'Filled buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.' },
  { hierarchy: 2, title: 'Outlined', jsx: Outlined, desc: "Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app.\nOutlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons." },
  { hierarchy: 1, title: 'Sizes', jsx: Sizes, desc: 'Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.' },
]
