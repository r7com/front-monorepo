import { Button, ButtonProps } from '@r7/ui-base-components'

type TvGuideButtonProps = ButtonProps<'a'>

export function TvGuideButton({
  children,
  href,
  color = 'primary',
  ...buttonProps
}: TvGuideButtonProps) {
  return (
    <Button
      as="a"
      className="tv-max-h-sm md:first-of-type:tv-ml-auto tv-border-solid first-of-type:tv-mr-auto md:first-of-type:tv-mr-0 md:tv-w-giant tv-w-[47%] tv-justify-center"
      href={href}
      color={color}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}
