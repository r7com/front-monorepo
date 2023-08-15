export type TextProps = {
  text: string
  fontSize?:
    | 'text-little'
    | 'text-xxxs'
    | 'text-xxs'
    | 'text-xs'
    | 'text-sm'
    | 'text-md'
    | 'text-lg'
    | 'text-xl'
    | 'text-xxl'
    | 'text-xxxl'

  fontWeight?: 'font-light' | 'font-normal' | 'font-semibold' | 'font-bold'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  color?:
    | 'text-dark-high-400'
    | 'text-dark-high-500'
    | 'text-feedback-success-400'
    | 'text-feedback-warning-400'
    | 'text-feedback-helper-400'
    | 'text-brand-primary-400'
    | 'text-brand-primary-500'
}

export function Text({
  text,
  fontWeight = 'font-normal',
  color = 'text-dark-high-400',
  as = 'p',
  fontSize = 'text-xxxs',
}: TextProps) {
  const DynamicTag = as
  return <DynamicTag className={`${fontSize} ${fontWeight} ${color}`}>{text}</DynamicTag>
}
