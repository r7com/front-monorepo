import { Button, ButtonProps } from '@r7/ui-base-components'

type TvGuideButtonProps = ButtonProps<'a'>

export function TvGuideButton({
  children,
  href,
  color = 'primary',
  ...buttonProps
}: TvGuideButtonProps) {
  return (
    <Button as="a" href={href} color={color} {...buttonProps}>
      {children}
    </Button>
  )
}
