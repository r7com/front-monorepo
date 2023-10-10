import { CardHatWrapperVariants, variants } from './card-hat-wrapper.variants'

export type CardHatWrapperProps = {
  children: React.ReactNode
} & CardHatWrapperVariants

export function CardHatWrapper({ children, type }: CardHatWrapperProps) {
  return <div className={`flex items-center mb-nano ${variants({ type })}`}>{children}</div>
}
