import type { PropsType } from '../types'

const CardStory = () => {
  return <div>Card</div>
}

export default {
  component: 'Card',
  description: 'Cards provide a flexible and extensible content container with multiple variants and options.',
}

export const props: PropsType = [{ hierarchy: 1, title: 'Card Basic', jsx: CardStory, desc: 'The Button comes with three variants: text (default), contained, and outlined.' }]
