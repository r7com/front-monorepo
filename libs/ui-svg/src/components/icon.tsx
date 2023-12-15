'use client'
type IconProps = {
  className: string
  HeartIcon: string
}

export const Icon = ({ className, HeartIcon }: IconProps) => (
  // add a class and let any consumer handle the details via CSS ⬇️
  <svg>
    <use href={`${HeartIcon}#heart`} className={`heart ${className}`} />
  </svg>
)
