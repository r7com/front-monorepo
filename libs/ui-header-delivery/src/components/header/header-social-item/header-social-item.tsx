import { SvgIcon, SvgIconProps } from '@r7/ui-base-components'

export type HeaderSocialItemProps = {
  socialName: 'facebook' | 'twitter' | 'instagram'
  socialUrl: string
}

export function HeaderSocialItem({ socialName, socialUrl }: HeaderSocialItemProps) {
  return (
    <li className="mr-quark">
      <a
        href={socialUrl}
        target="_blank"
        rel="noreferrer"
        title={`Siga o Portal R7 no ${socialName}`}
      >
        <SvgIcon
          className="border-neutral-high-400 border-hairline !rounded-circular p-quark"
          iconName={socialName as SvgIconProps['iconName']}
          width={25}
          height={25}
          title={`Siga o Portal R7 no ${socialName}`}
          color="primary"
        />
      </a>
    </li>
  )
}
