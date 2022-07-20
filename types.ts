import { IconType } from 'react-icons'
export interface Service {
  Icon: IconType
  title: string
  about: string
}

export interface ISkill {
  Icon: IconType
  name: string
  level: string
}

export interface IProject {
  id: number
  name: string
  description: string
  image_path: string
  deployed_url: string
  github_url: string
  category: Category[]
  key_techs: string[]
}

export type Category = 'React' | 'Node.js' | 'Javascript' | 'Next.js'
