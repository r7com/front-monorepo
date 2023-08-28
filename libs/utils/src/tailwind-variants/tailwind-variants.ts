import { tv as tailwindVariants, VariantProps, defaultConfig } from 'tailwind-variants'

defaultConfig.twMerge = false

const tv = tailwindVariants

export { type VariantProps, tv }
