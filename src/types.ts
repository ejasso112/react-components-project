export type DefaultType = {
  component: string
  description: string
}

export type PropsType = {
  hierarchy: 1 | 2 | 3
  title: string
  desc?: string
  jsx: () => JSX.Element
}[]

export type StoriesType = Record<string, { default: DefaultType; props?: PropsType }>

export interface ButtonProps {
  variant?: 'text' | 'filled' | 'outlined' | undefined
  size?: 'sm' | 'md' | 'lg' | undefined
  color?: 'primary' | undefined
}
