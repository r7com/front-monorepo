import { SvgIcon } from '@r7/ui-base-components'

export type SectionFootLinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SectionFootLink({ children, ...rest }: SectionFootLinkProps) {
  return (
    <a
      className={`flex items-center gap-nano text-little uppercase px-[14px] py-[6px] bg-[var(--bg)] rounded-pill whitespace-nowrap z-10`}
      {...rest}
    >
      {children}
      <SvgIcon
        iconName="chevron-right"
        className="w-[5px] h-[12px] min-w-max min-h-max m-0 fill-[var(--color)]"
      />
    </a>
  )
}
