import { SocialIconVariants } from './social-icons.variants'

export type SocialIconProps = {
  link: string
  title?: string
  position?: 'galeria' | 'topo' | 'rodapé' | 'quiz' | 'poll'
} & SocialIconVariants
